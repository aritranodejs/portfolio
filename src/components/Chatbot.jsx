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

  // Portfolio context
  const portfolioContext = {
    name: "Aritra Dutta",
    email: "aritra.nodejsdeveloper@gmail.com",
    resume: "https://drive.google.com/file/d/1o4wwzH2u3RsfqXXSAGNqiKbX782OHhS6",
    skills: [
      "JavaScript",
      "Node.js",
      "Express.js",
      "REST APIs",
      "Socket.IO",
      "Microservices",
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Prisma",
      "Sequelize",
      "Mongoose",
      "AWS (EC2/RDS/S3/SQS)",
      "CI/CD",
      "Redis",
      "Git/GitHub",
      "HTML/CSS/Bootstrap",
    ],
    projects: [
      { name: "BCUZ", desc: "Crowdfunding platform" },
      { name: "VRAS", desc: "VR app system" },
      { name: "Legis Music", desc: "Music platform" },
      { name: "Floyd's Lanes", desc: "Entertainment platform" },
      { name: "Stub Avenue", desc: "Social platform" },
      { name: "1st Choice Formation", desc: "Business tool" },
      {
        name: "Vietlist",
        desc: "Multi-role directory/listing platform with Stripe payments, real-time messaging, AWS, Redis + Prisma",
      },
    ],
  };

  // Unified function to send message to AI
  const sendToAI = async (text) => {
    if (!text.trim()) return;

    const userMsg = { role: "user", text: text.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);
    setError("");

    try {
      const baseUrl = process.env.REACT_APP_API_KEY || process.env.REACT_API_KEY || "";
      const url = `${baseUrl}/api/ai`;

      // Include portfolio context for accurate AI responses
      const res = await axios.post(
        url,
        { input: text, context: portfolioContext },
        { timeout: 15000 }
      );

      const aiText = res?.data?.message?.trim();
      const finalText = aiText && aiText.length > 0 ? aiText : "Sorry, I didn't get that.";

      setMessages((prev) => [...prev, { role: "bot", text: finalText }]);
    } catch (err) {
      const apiErr = err?.response?.data?.error || err?.message || "Unknown error";
      setError(`AI error: ${apiErr}`);
      setMessages((prev) => [...prev, { role: "bot", text: "Sorry, something went wrong." }]);
    } finally {
      setLoading(false);
    }
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendToAI(input);
    setInput("");
  };

  // Handle suggestion click
  const handleSuggestionClick = async (suggestion) => {
    await sendToAI(suggestion);
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
            <button
              className="chatbot-close"
              onClick={() => setOpen(false)}
              aria-label="Close"
            >
              ×
            </button>
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
              <button key={s} onClick={() => handleSuggestionClick(s)}>
                {s}
              </button>
            ))}
          </div>

          <form className="chatbot-input" onSubmit={handleSubmit}>
            <input
              type="text"
              value={input}
              placeholder="Type a message..."
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" disabled={loading}>
              {loading ? "..." : "Send"}
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;
