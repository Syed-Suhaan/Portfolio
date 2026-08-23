export const profile = {
  name: "Syed Suhaan",
  affiliation: "Manipal Institute of Technology · Final year · EEE + Data Science",
  email: "suhaansyed2004@gmail.com",
  github: "https://github.com/Syed-Suhaan",
  linkedin: "https://linkedin.com/in/syed-suhaan",
  resume: "/resume.pdf",
  bio: [
    "My name is Suhaan. I'm a final-year student at MIT Manipal, focused on applied AI — agent systems, voice, RAG, and evals.",
    "I'm an Activate AI Fellow 2026 (14 / 600+; cohort with Sarvam, Emergent, Lexapar, Aeos Labs and others), currently a SWE — Applied AI Intern at Lexapar, where I built legal RAG pipelines and a realtime meeting voice agent end-to-end from scratch.",
    "I'm also founding engineer at SecondCortex Labs, researching context management for AI coding agents (SecondCortex, Cortex CLI, on-device Cortex).",
  ],
  contactNote:
    "Open to Applied AI / SWE roles for Fall–Winter 2026. Happy to chat about agents, evals, or SecondCortex.",
};

export const news = [
  {
    date: "Jun 2026",
    event: "Started SWE — Applied AI Intern at Lexapar via Activate AI Fellows.",
  },
  {
    date: "Apr 2026",
    event: "Top 10 at Microsoft AI Unlocked 2026; pitched SecondCortex at Microsoft IDC.",
  },
  {
    date: "Apr 2026",
    event: "Top 100 at OpenAI Codex Hackathon — Cortex memory on Codex infra.",
  },
  {
    date: "2026",
    event: "Invited to YC Startup School Bengaluru on the strength of SecondCortex.",
  },
  {
    date: "Feb–Apr 2026",
    event: "Built SecondCortex — 5s developer context restore + MCP for Cursor / Claude / Codex.",
  },
  {
    date: "2025",
    event: "Meta Hacker Cup Round 2 — AIR 886 (top 0.3%).",
  },
  {
    date: "Mar–May 2025",
    event: "App Developer Intern at InternLoom — 20+ screen production Flutter app.",
  },
];

export const selectedWork = [
  {
    slug: "secondcortex",
    title: "SecondCortex",
    description:
      "Developer memory for AI coding agents. MCP for Claude Code, Cursor, Codex. Microsoft Top 10 · OpenAI Top 100.",
    metric: "5s",
    metricLabel: "restore",
  },
  {
    slug: "susydb",
    title: "SusyDB",
    description:
      "Redis-compatible KV store in Go — 150k+ req/s, sub-2ms p99, open-sourced with benchmarks.",
    metric: "150k+",
    metricLabel: "req/s",
  },
  {
    slug: "alra",
    title: "ALRA 2.0",
    description:
      "Multi-PDF research agent with Composite Grounding Score for answer faithfulness.",
    metric: "0–100%",
    metricLabel: "grounding",
  },
];

export const experience = [
  {
    date: "Jun 2026 – Present",
    role: "SWE — Applied AI Intern",
    org: "Lexapar",
    detail:
      "Legal RAG pipelines, realtime meeting voice agent, evals, agent harness, and LLM Ops — built end-to-end from scratch.",
  },
  {
    date: "Feb 2026 – Present",
    role: "Founding Engineer",
    org: "SecondCortex Labs",
    detail:
      "SecondCortex developer memory system, Cortex CLI, on-device Cortex — multi-agent orchestration and MCP integration.",
  },
  {
    date: "2026",
    role: "Activate AI Fellow",
    org: "Activate",
    detail: "Selected 14 / 600+; cohort with Sarvam, Emergent, Lexapar, Aeos Labs, and others.",
  },
  {
    date: "Dec 2025",
    role: "Open Source Contributor",
    org: "Kubeflow",
    detail:
      "Contributed TorchTune and LoRA documentation guides; merged PR #4257 on kubeflow/website.",
    link: "https://github.com/kubeflow/website/pull/4257",
  },
  {
    date: "Mar – May 2025",
    role: "App Developer Intern",
    org: "InternLoom",
    detail:
      "Delivered 20+ screen production Flutter app; optimized Firestore queries reducing dashboard load by 40%.",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "News", href: "#news" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
