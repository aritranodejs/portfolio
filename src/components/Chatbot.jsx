import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hi! I'm Aritra's assistant. How can I help?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const endRef = useRef(null);
  const suggestions = [
    "Show Node.js projects",
    "What skills are you expert in?",
    "Share your resume link",
    "Tell me about Vietlist",
  ];

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const intentReply = (text) => {
    const t = text.toLowerCase();
    if (t.includes("resume") || t.includes("cv")) {
      return "You can download my resume here: https://drive.google.com/file/d/1o4wwzH2u3RsfqXXSAGNqiKbX782OHhS6";
    }
    if (t.includes("contact") || t.includes("email") || t.includes("reach")) {
      return "You can reach me at aritra.nodejsdeveloper@gmail.com or via the Contact section.";
    }
    if (t.includes("skills") || t.includes("tech") || t.includes("stack")) {
      return "Key skills: JavaScript, Node.js, Express.js, REST APIs, Socket.IO, Microservices, MySQL, PostgreSQL, MongoDB, Prisma, Sequelize, Mongoose, AWS (EC2/RDS/S3/SQS), CI/CD, Redis, Git/GitHub, HTML/CSS/Bootstrap.";
    }
    if (t.includes("projects") || t.includes("work")) {
      return "Highlighted projects: BCUZ (crowdfunding), VRAS (VR app system), Legis Music, Floyd's Lanes, Stub Avenue, 1st Choice Formation. Use the filters in the portfolio to explore.";
    }
    if (t.includes("vietlist")) {
      return "Vietlist: Multi‑role directory/listing platform with microservices and Stripe payments, real‑time messaging, on AWS with Redis + Prisma.";
    }
    if (t.includes("node") || t.includes("express")) {
      return "I build scalable Node.js/Express APIs with RBAC, caching, queues, and SQL/NoSQL backends.";
    }
    return "Thanks! I'll get back to you soon. You can also email aritra.nodejsdeveloper@gmail.com.";
  };

  const sendMessage = async (e) => {
    e?.preventDefault();
    if (!input.trim()) return;
    const userMsg = { role: "user", text: input.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);
    setError("");
    try {
      // Build short history to keep replies contextual
      const history = messages
        .filter((m) => m.role === "user" || m.role === "bot")
        .slice(-6)
        .map((m) => ({ role: m.role === "bot" ? "assistant" : "user", content: m.text }));

      // Try GROQ API first
      const payload = {
        model: "llama3-8b-8192",
        messages: [
          { role: "system", content: "You are Aritra's helpful portfolio assistant. Keep answers concise and friendly." },
          ...history,
          { role: "user", content: userMsg.text },
        ],
        temperature: 0.7,
        max_tokens: 300,
      };

      const apiKey = process.env.REACT_APP_GROQ_API_KEY || process.env.GROQ_API_KEY;
      if (!apiKey) {
        throw new Error("Missing GROQ API key");
      }

      const aiResponse = await axios.post(
        "https://api.groq.com/openai/v1/chat/completions",
        payload,
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          timeout: 15000,
        }
      );

      const aiText = aiResponse?.data?.choices?.[0]?.message?.content?.trim();
      const finalText = aiText && aiText.length > 0 ? aiText : intentReply(userMsg.text);
      const reply = { role: "bot", text: finalText };
      setMessages((prev) => [...prev, reply]);
    } catch (err) {
      const apiErr = err?.response?.data?.error?.message || err?.message || "Unknown error";
      // Show actionable error so we can diagnose missing key/CORS
      setError(`AI error: ${apiErr}`);
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: intentReply("") },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSuggestionClick = async (s) => {
    setInput(s);
    await sendMessage({ preventDefault: () => {} });
  };

  return (
    <>
      <button
        className="chatbot-fab"
        aria-label="Open chat"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? "×" : "💬"}
      </button>
      {open && (
        <div className="chatbot-panel" role="dialog" aria-label="Chatbot">
          <div className="chatbot-header">
            <div>
              <strong>Assistant</strong>
              <div className="chatbot-sub">Ask about projects, skills, resume</div>
            </div>
            <button className="chatbot-close" onClick={() => setOpen(false)} aria-label="Close">×</button>
          </div>
          <div className="chatbot-body">
            {error && <div className="chatbot-error">{error}</div>}
            {messages.map((m, i) => (
              <div key={i} className={`chatbot-msg ${m.role}`}>
                {m.text}
              </div>
            ))}
            {loading && <div className="chatbot-msg bot">Thinking…</div>}
            <div ref={endRef} />
          </div>
          <div className="chatbot-suggestions">
            {suggestions.map((s) => (
              <button key={s} onClick={() => handleSuggestionClick(s)}>{s}</button>
            ))}
          </div>
          <form className="chatbot-input" onSubmit={sendMessage}>
            <input
              type="text"
              value={input}
              placeholder="Type a message..."
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" disabled={loading}>{loading ? "..." : "Send"}</button>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;


