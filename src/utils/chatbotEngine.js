import axios from "axios";

export const PORTFOLIO_CONTEXT = {
  name: "Aritra Dutta",
  title: "Node.js Developer",
  email: "aritra.nodejsdeveloper@gmail.com",
  phone: "+91 8420222247",
  location: "Kolkata, India",
  resume: "https://drive.google.com/file/d/1o4wwzH2u3RsfqXXSAGNqiKbX782OHhS6",
  linkedin: "https://www.linkedin.com/in/aritra-dutta-2a3a8322b",
  github: "https://github.com/aritranodejs",
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
    { name: "BCUZ", desc: "Crowdfunding platform", tags: ["node", "fullstack"] },
    { name: "VRAS", desc: "VR app system", tags: ["node", "realtime"] },
    { name: "Legis Music", desc: "Music platform", tags: ["node", "api"] },
    { name: "Floyd's Lanes", desc: "Entertainment platform", tags: ["node", "fullstack"] },
    { name: "Stub Avenue", desc: "Social platform", tags: ["node", "social"] },
    { name: "1st Choice Formation", desc: "Business tool", tags: ["node", "business"] },
    {
      name: "Vietlist",
      desc: "Multi-role directory/listing platform with Stripe payments, real-time messaging, AWS, Redis + Prisma",
      tags: ["node", "microservices", "aws", "stripe"],
    },
  ],
};

export const INITIAL_MESSAGE = {
  role: "bot",
  text: "Welcome! I'm Aritra's AI assistant — ask me about his projects, tech stack, experience, or how to get in touch.",
  time: Date.now(),
};

export const QUICK_ACTIONS = [
  { label: "Skills", prompt: "What skills are you expert in?", icon: "fa-layer-group" },
  { label: "Projects", prompt: "Show Node.js projects", icon: "fa-briefcase" },
  { label: "Resume", prompt: "Share your resume link", icon: "fa-file-alt" },
  { label: "Vietlist", prompt: "Tell me about Vietlist", icon: "fa-rocket" },
];

const SYSTEM_PROMPT = `You are Aritra Dutta's portfolio assistant.
Answer ONLY using this context:
${JSON.stringify(PORTFOLIO_CONTEXT)}
Keep replies concise (2-4 sentences), polished, and professional.
If unrelated to the portfolio, say: "I can only answer questions related to Aritra's portfolio."`;

const DEFAULT_REPLY =
  "I can help with Aritra's skills, projects, resume, or contact details. Try asking about Node.js, Vietlist, or his cloud experience.";

const hasWord = (text, word) => new RegExp(`\\b${word}\\b`, "i").test(text);

const findProject = (text) => {
  const t = text.toLowerCase();
  return PORTFOLIO_CONTEXT.projects.find((p) => {
    const name = p.name.toLowerCase();
    return t.includes(name) || name.split(" ").some((part) => part.length > 3 && t.includes(part));
  });
};

export const getLocalReply = (text) => {
  const t = text.toLowerCase().trim();
  if (!t) return DEFAULT_REPLY;

  if (t.includes("resume") || t.includes("cv") || hasWord(t, "cv")) {
    return `Download Aritra's resume:\n${PORTFOLIO_CONTEXT.resume}`;
  }

  if (t.includes("email") || t.includes("contact") || t.includes("reach") || t.includes("phone") || t.includes("call")) {
    return `Contact Aritra:\n📧 ${PORTFOLIO_CONTEXT.email}\n📱 ${PORTFOLIO_CONTEXT.phone}\n📍 ${PORTFOLIO_CONTEXT.location}`;
  }

  if (t.includes("linkedin") || t.includes("github") || t.includes("social")) {
    return `Connect with Aritra:\nLinkedIn: ${PORTFOLIO_CONTEXT.linkedin}\nGitHub: ${PORTFOLIO_CONTEXT.github}`;
  }

  if (t.includes("skill") || t.includes("expert") || t.includes("tech stack") || t.includes("stack") || t.includes("technologies")) {
    return `Aritra's core stack:\n${PORTFOLIO_CONTEXT.skills.join(" · ")}`;
  }

  const project = findProject(t);
  if (project) return `**${project.name}**\n${project.desc}`;

  if (t.includes("node") || t.includes("express") || t.includes("nodejs") || t.includes("node.js")) {
    const nodeProjects = PORTFOLIO_CONTEXT.projects.filter((p) => p.tags?.includes("node")).map((p) => p.name).join(", ");
    return `Aritra specializes in scalable Node.js/Express backends — RBAC, caching, queues, and SQL/NoSQL.\n\nNode.js projects: ${nodeProjects}`;
  }

  if (t.includes("project") || t.includes("portfolio") || t.includes("work") || t.includes("built")) {
    return PORTFOLIO_CONTEXT.projects.map((p) => `• ${p.name} — ${p.desc}`).join("\n");
  }

  if (t.includes("experience") || t.includes("background") || t.includes("developer") || t.includes("who is aritra") || t.includes("about aritra") || t.includes("about you")) {
    return `${PORTFOLIO_CONTEXT.name} is a ${PORTFOLIO_CONTEXT.title} based in ${PORTFOLIO_CONTEXT.location}, building production-grade APIs, microservices, and full-stack web apps.`;
  }

  if (hasWord(t, "hello") || hasWord(t, "hi") || hasWord(t, "hey") || t === "hii") {
    return "Hello! Pick a quick action below or ask anything about Aritra's work, skills, or resume.";
  }

  if (t.includes("aws") || t.includes("cloud") || t.includes("deploy")) {
    return "Cloud & DevOps: AWS (EC2, RDS, S3, SQS), CI/CD pipelines, Redis caching, and microservices — prominently used in the Vietlist platform.";
  }

  if (t.includes("database") || t.includes("sql") || t.includes("mongo") || t.includes("prisma")) {
    return "Databases: MySQL, PostgreSQL, MongoDB with Prisma, Sequelize, and Mongoose ORMs.";
  }

  const unrelatedPatterns = [/write.*code for/, /snake game/, /weather in/, /who is the president/];
  if (unrelatedPatterns.some((p) => p.test(t))) {
    return "I focus exclusively on Aritra's portfolio — skills, projects, resume, and contact info.";
  }

  const matchedSkill = PORTFOLIO_CONTEXT.skills.find((s) => t.includes(s.toLowerCase().split(/[\s(/]/)[0]));
  if (matchedSkill) return `Yes — Aritra has hands-on experience with ${matchedSkill} in production projects.`;

  return null;
};

export const truncateMessage = (text, maxLength = 600) => {
  if (text.length <= maxLength) return text;
  return `${text.substring(0, maxLength)}...`;
};

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const fetchGroqReply = async (text, history) => {
  const apiKey = process.env.REACT_APP_GROQ_API_KEY || process.env.GROQ_API_KEY;
  if (!apiKey) return null;

  const chatHistory = history.slice(-8).map((m) => ({
    role: m.role === "bot" ? "assistant" : "user",
    content: m.text,
  }));

  const res = await axios.post(
    "https://api.groq.com/openai/v1/chat/completions",
    {
      model: "llama-3.1-8b-instant",
      messages: [{ role: "system", content: SYSTEM_PROMPT }, ...chatHistory, { role: "user", content: text }],
      temperature: 0.4,
      max_tokens: 350,
    },
    {
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      timeout: 15000,
    }
  );

  return res?.data?.choices?.[0]?.message?.content?.trim() || null;
};

const fetchBackendReply = async (text) => {
  const baseUrl = process.env.REACT_APP_API_URL || process.env.REACT_APP_API_KEY || process.env.REACT_API_KEY || "";
  if (!baseUrl) return null;

  const res = await axios.post(
    `${baseUrl}/api/ai`,
    { input: text, context: PORTFOLIO_CONTEXT, instructions: SYSTEM_PROMPT },
    { timeout: 15000 }
  );

  return res?.data?.message?.trim() || null;
};

export const resolveBotReply = async (text, history) => {
  const local = getLocalReply(text);
  if (local) {
    await delay(450 + Math.random() * 350);
    return local;
  }

  try {
    const backend = await fetchBackendReply(text);
    if (backend) return backend;
  } catch {
    /* continue */
  }

  try {
    const groq = await fetchGroqReply(text, history);
    if (groq) return groq;
  } catch {
    /* continue */
  }

  return DEFAULT_REPLY;
};

export const formatMessageTime = (ts) => {
  if (!ts) return "";
  return new Date(ts).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
};
