import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  INITIAL_MESSAGE,
  QUICK_ACTIONS,
  formatMessageTime,
  resolveBotReply,
  truncateMessage,
} from "../utils/chatbotEngine";
import "../assets/css/Chatbot.css";

const MessageContent = ({ text }) => {
  const renderLine = (line) => {
    const parts = [];
    const regex = /(\*\*[^*]+\*\*|https?:\/\/[^\s]+|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
    let last = 0;
    let match;

    while ((match = regex.exec(line)) !== null) {
      if (match.index > last) parts.push(<span key={`t-${last}`}>{line.slice(last, match.index)}</span>);
      const chunk = match[0];
      if (chunk.startsWith("**")) {
        parts.push(<strong key={`b-${match.index}`}>{chunk.slice(2, -2)}</strong>);
      } else if (chunk.startsWith("http")) {
        parts.push(
          <a key={`u-${match.index}`} href={chunk} target="_blank" rel="noopener noreferrer">
            {chunk}
          </a>
        );
      } else {
        parts.push(
          <a key={`e-${match.index}`} href={`mailto:${chunk}`}>
            {chunk}
          </a>
        );
      }
      last = match.index + chunk.length;
    }

    if (last < line.length) parts.push(<span key={`t-end`}>{line.slice(last)}</span>);
    return parts.length ? parts : line;
  };

  return (
    <>
      {text.split("\n").map((line, i, arr) => (
        <React.Fragment key={i}>
          {renderLine(line)}
          {i < arr.length - 1 && <br />}
        </React.Fragment>
      ))}
    </>
  );
};

const ChatMessage = ({ message, onCopy, copiedId, id }) => (
  <motion.div
    className={`chatbot-msg-row ${message.role}`}
    initial={{ opacity: 0, y: 10, scale: 0.98 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
  >
    <div className="chatbot-msg-avatar" aria-hidden="true">
      <i className={message.role === "bot" ? "fas fa-wand-magic-sparkles" : "fas fa-user"} />
    </div>
    <div className="chatbot-msg-wrap">
      <div className={`chatbot-msg ${message.role}`}>
        <MessageContent text={message.text} />
      </div>
      <div className="chatbot-msg-meta">
        <span className="chatbot-msg-time">{formatMessageTime(message.time)}</span>
        {message.role === "bot" && (
          <button
            type="button"
            className="chatbot-copy-btn"
            onClick={() => onCopy(message.text, id)}
            aria-label="Copy message"
          >
            <i className={`fas ${copiedId === id ? "fa-check" : "fa-copy"}`} />
          </button>
        )}
      </div>
    </div>
  </motion.div>
);

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ ...INITIAL_MESSAGE, id: 0 }]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [copiedId, setCopiedId] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const widgetRef = useRef(null);
  const inputRef = useRef(null);
  const endRef = useRef(null);
  const msgIdRef = useRef(1);

  const isFreshChat = messages.length <= 1;

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open, loading]);

  useEffect(() => {
    try {
      const seen = sessionStorage.getItem("chatbot-seen");
      if (!seen) {
        const t1 = setTimeout(() => setShowHint(true), 4000);
        const t2 = setTimeout(() => setShowHint(false), 12000);
        return () => { clearTimeout(t1); clearTimeout(t2); };
      }
    } catch { /* ignore */ }
    return undefined;
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const timer = setTimeout(() => inputRef.current?.focus(), 280);
    try { sessionStorage.setItem("chatbot-seen", "1"); } catch { /* ignore */ }
    setShowHint(false);
    setHasInteracted(true);

    const focusables = widgetRef.current?.querySelectorAll(
      'button, [href], input, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusables?.[0];
    const last = focusables?.[focusables.length - 1];

    const trap = (e) => {
      if (e.key !== "Tab" || !focusables?.length) return;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener("keydown", trap);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("keydown", trap);
    };
  }, [open]);

  const handleClickOutside = useCallback((e) => {
    if (widgetRef.current && !widgetRef.current.contains(e.target)) setOpen(false);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, handleClickOutside]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  const sendMessage = async (text) => {
    if (!text.trim() || loading) return;

    const userMsg = { role: "user", text: text.trim(), time: Date.now(), id: msgIdRef.current++ };
    const history = [...messages, userMsg];
    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);

    try {
      const reply = await resolveBotReply(text, history);
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: truncateMessage(reply), time: Date.now(), id: msgIdRef.current++ },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: "Something went wrong — try asking about skills, projects, or resume.",
          time: Date.now(),
          id: msgIdRef.current++,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = input;
    setInput("");
    sendMessage(msg);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const handleClear = () => {
    setMessages([{ ...INITIAL_MESSAGE, time: Date.now(), id: msgIdRef.current++ }]);
    setCopiedId(null);
  };

  const handleCopy = async (text, id) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch { /* ignore */ }
  };

  const toggleOpen = () => setOpen((v) => !v);

  return (
    <div className="chatbot-widget" ref={widgetRef}>
      <AnimatePresence>
        {open && (
          <motion.div
            className="chatbot-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Aritra AI assistant"
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="chatbot-panel-glow" aria-hidden="true" />

            <header className="chatbot-header">
              <div className="chatbot-header-info">
                <div className="chatbot-avatar">
                  <i className="fas fa-wand-magic-sparkles" aria-hidden="true" />
                  <span className="chatbot-avatar-ring" />
                </div>
                <div>
                  <p className="chatbot-title">Aritra AI</p>
                  <div className="chatbot-sub">
                    <span className="chatbot-status-dot" />
                    Portfolio assistant · Instant replies
                  </div>
                </div>
              </div>
              <div className="chatbot-header-actions">
                <button type="button" className="chatbot-icon-btn" onClick={handleClear} aria-label="Clear chat" title="New chat">
                  <i className="fas fa-plus" />
                </button>
                <button type="button" className="chatbot-icon-btn" onClick={() => setOpen(false)} aria-label="Close chat">
                  <i className="fas fa-chevron-down" />
                </button>
              </div>
            </header>

            <div className="chatbot-body">
              {isFreshChat && (
                <motion.div
                  className="chatbot-welcome"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <p>Ask about projects, skills, resume, or how to get in touch.</p>
                </motion.div>
              )}

              {messages.map((m) => (
                <ChatMessage
                  key={m.id ?? `${m.role}-${m.time}`}
                  message={m}
                  id={m.id}
                  onCopy={handleCopy}
                  copiedId={copiedId}
                />
              ))}

              {loading && (
                <div className="chatbot-msg-row bot">
                  <div className="chatbot-msg-avatar"><i className="fas fa-wand-magic-sparkles" /></div>
                  <div className="chatbot-msg bot chatbot-msg--typing">
                    <div className="chatbot-typing" aria-label="Assistant is typing">
                      <span /><span /><span />
                    </div>
                  </div>
                </div>
              )}
              <div ref={endRef} />
            </div>

            <div className="chatbot-quick-actions">
              {QUICK_ACTIONS.map((action) => (
                <button
                  key={action.label}
                  type="button"
                  className="chatbot-quick-btn"
                  onClick={() => sendMessage(action.prompt)}
                  disabled={loading}
                >
                  <i className={`fas ${action.icon}`} aria-hidden="true" />
                  <span>{action.label}</span>
                </button>
              ))}
            </div>

            <form className="chatbot-input" onSubmit={handleSubmit}>
              <div className="chatbot-input-wrap">
                <textarea
                  ref={inputRef}
                  rows={1}
                  value={input}
                  placeholder="Ask anything about Aritra..."
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  disabled={loading}
                  aria-label="Chat message"
                />
                <button
                  type="submit"
                  className="chatbot-send-btn"
                  disabled={loading || !input.trim()}
                  aria-label="Send message"
                >
                  <i className="fas fa-arrow-up" />
                </button>
              </div>
              <p className="chatbot-input-hint">
                <kbd>Enter</kbd> send · <kbd>Shift</kbd>+<kbd>Enter</kbd> new line
              </p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="chatbot-fab-wrap">
        <AnimatePresence>
          {showHint && !open && (
            <motion.div
              className="chatbot-hint"
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 12 }}
            >
              Ask me about Aritra&apos;s work
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          type="button"
          className={`chatbot-fab ${open ? "chatbot-fab--open" : ""}`}
          aria-label={open ? "Close chat" : "Open AI assistant"}
          aria-expanded={open}
          onClick={toggleOpen}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
        >
          <span className="chatbot-fab-icon">
            <i className={`fas ${open ? "fa-times" : "fa-comment-dots"}`} />
          </span>
          {!open && <span className="chatbot-fab-ring" aria-hidden="true" />}
          {!open && !hasInteracted && <span className="chatbot-fab-badge" aria-hidden="true" />}
        </motion.button>
      </div>
    </div>
  );
};

export default Chatbot;
