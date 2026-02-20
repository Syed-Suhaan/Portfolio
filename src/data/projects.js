const projects = [
    {
        slug: "passportphotoindia",
        title: "PassportPhotoIndia",
        subtitle: "Exam Photo Engine",
        category: "SaaS / Image Processing",
        date: "Nov 2025 – Dec 2025",
        icon: "/icons/passportphotoindia.svg",
        color: "#FF6B35",
        summary:
            "Consumer-facing SaaS for Indian exam-compliant passport photo generation, leveraging HTML5 Canvas for client-side image processing.",
        description:
            "Architected a consumer-facing SaaS for Indian exam-compliant passport photo generation, leveraging HTML5 Canvas to perform complex image cropping, background normalization, and resizing entirely on the client side.",
        highlights: [
            {
                metric: "4,870+",
                label: "Monthly Visitors",
                detail:
                    "Scaled platform traffic through targeted organic SEO strategies",
            },
            {
                metric: "$8",
                label: "First 30-Day Revenue",
                detail:
                    "Achieved early-stage monetization with verified revenue within 30 days of launch",
            },
            {
                metric: "<100ms",
                label: "Render Time",
                detail:
                    "Engineered custom image processing pipeline for sub-100ms rendering",
            },
        ],
        bullets: [
            "Architected a consumer-facing SaaS for Indian exam-compliant passport photo generation, leveraging HTML5 Canvas to perform complex image cropping, background normalization, and resizing entirely on the client side.",
            "Scaled platform traffic to 4,870+ unique monthly visitors through targeted organic SEO strategies, achieving early-stage monetization with a verified total revenue of $8 within the first 30 days of launch.",
            "Optimized infrastructure performance and security using Cloudflare for DNS management and traffic orchestration, significantly reducing request latency and server-side processing costs.",
            "Implemented advanced user behavior tracking and conversion funnels using Google Analytics 4 (GA4), enabling data-driven iterations on the UI/UX to improve user retention and organic discovery.",
        ],
        techStack: [
            { name: "React", icon: "/icons/react-svgrepo-com.svg" },
            { name: "Node.js", icon: "/icons/nodejs02-svgrepo-com.svg" },
            { name: "MongoDB", icon: null },
            { name: "GA4", icon: null },
            { name: "Cloudflare", icon: null },
            { name: "HTML5 Canvas", icon: null },
        ],
        tags: ["React", "Node.js", "MongoDB", "Canvas", "GA4", "SEO"],
        architecture: {
            overview:
                "Full-stack application with a React frontend performing client-side image processing via HTML5 Canvas API, backed by Express.js and MongoDB for user management and analytics.",
            layers: [
                {
                    name: "Frontend",
                    detail:
                        "React with custom Canvas-based image cropping, background normalization, and DPI-aware resizing",
                },
                {
                    name: "Backend",
                    detail:
                        "Express.js REST API for user sessions, payment integration, and configuration management",
                },
                {
                    name: "Infrastructure",
                    detail:
                        "Cloudflare CDN for DNS, caching, and DDoS protection; Google Analytics 4 for behavior tracking",
                },
                {
                    name: "Database",
                    detail:
                        "MongoDB for storing user data, exam configurations, and transaction records",
                },
            ],
        },
        links: {
            live: "https://passportphotoindia.com",
            github: null,
        },
    },
    {
        slug: "susydb",
        title: "SusyDB",
        subtitle: "In-Memory Key-Value Store",
        category: "Systems / Infrastructure",
        date: "Nov 2025 – Dec 2025",
        icon: "/icons/radish-svgrepo-com.svg",
        color: "#00D4AA",
        summary:
            "A tiny, high-performance, in-memory key-value store written in Go. RESP-compatible, embeddable, and benchmarked at 154k RPS.",
        description:
            "SusyDB is a lightweight Redis alternative written in pure Go. It provides zero-ops deployment as a single binary with no external dependencies, supporting key data structures, Pub/Sub messaging, and embeddable library mode.",
        highlights: [
            {
                metric: "154k",
                label: "Requests/sec",
                detail:
                    "Mixed workload benchmark (50/50 SET/GET) with 50 concurrent clients",
            },
            {
                metric: "1.8ms",
                label: "P99 Latency",
                detail: "Sub-2ms tail latency under mixed workload",
            },
            {
                metric: "9.5x",
                label: "vs Redis (TTL)",
                detail:
                    "Performance gain over Redis Windows port on TTL workload (SETEX)",
            },
        ],
        bullets: [
            "Built a RESP-compatible key-value store in Go from scratch, supporting Strings, Hashes, Counters, TTL expiry, and Pub/Sub — usable directly with redis-cli.",
            "Engineered a thread-safe concurrent architecture using sync.RWMutex for lock-based access control, achieving 154k RPS on mixed workloads.",
            "Implemented a hybrid eviction strategy combining lazy expiry (on GET) with an active background garbage collector goroutine for memory optimization.",
            'Benchmarked extensively against Redis on 5 workloads (Mixed, TTL, Counters, Hash, Pub/Sub) demonstrating 1.5x–9.5x performance gains on Windows, and documented with a transparent "Fairness Disclosure."',
            "Packaged as a Docker container (multi-stage alpine build) and an embeddable Go library, enabling zero-ops deployment for Go microservices.",
        ],
        techStack: [
            { name: "Go", icon: "/icons/go-svgrepo-com.svg" },
            { name: "TCP", icon: null },
            { name: "Docker", icon: null },
            { name: "RESP Protocol", icon: null },
        ],
        tags: ["Go", "TCP", "Concurrency", "Docker", "RESP"],
        architecture: {
            overview:
                "Single-process, multi-threaded key-value store using native Go concurrency primitives. TCP socket server spawns goroutines per client connection, with a global RWMutex protecting the in-memory map.",
            layers: [
                {
                    name: "Networking",
                    detail:
                        "TCP server with bufio-buffered I/O, RESP-compatible text protocol, per-connection goroutine model",
                },
                {
                    name: "Command Router",
                    detail:
                        "Map-based command dispatch (SET, GET, DEL, HSET, HGET, INCR, PUBLISH, SUBSCRIBE, INFO, PING)",
                },
                {
                    name: "Core Store",
                    detail:
                        "Go map wrapped with sync.RWMutex — RLock for reads, Lock for writes. Supports string, hash, and counter types",
                },
                {
                    name: "Eviction",
                    detail:
                        "Hybrid: lazy expiry on read + active background GC goroutine sweeping every 1 second",
                },
            ],
        },
        benchmarks: [
            {
                workload: "Mixed (50/50 SET/GET)",
                redis: "99k / 5.2ms",
                susydb: "154k / 1.8ms",
                gain: "1.5x",
            },
            {
                workload: "TTL (SETEX 60s)",
                redis: "17k / 24ms",
                susydb: "170k / 0.9ms",
                gain: "9.5x",
            },
            {
                workload: "Counters (INCR Hot Key)",
                redis: "22k / 4.8ms",
                susydb: "163k / 1.1ms",
                gain: "7.3x",
            },
            {
                workload: "Hash (Session HSET/HGET)",
                redis: "19k / 5.1ms",
                susydb: "168k / 2.3ms",
                gain: "8.4x",
            },
            {
                workload: "Pub/Sub (Message Blast)",
                redis: "18k / 5.4ms",
                susydb: "143k / 1.2ms",
                gain: "7.6x",
            },
        ],
        links: {
            github: "https://github.com/Syed-Suhaan/SusyDB",
            live: null,
        },
    },
    {
        slug: "alra",
        title: "ALRA 2.0",
        subtitle: "Auto-LitReview Agent",
        category: "AI / NLP / RAG",
        date: "Dec 2025 – Feb 2026",
        icon: "/icons/fastapi-svgrepo-com.svg",
        color: "#7C5CFC",
        summary:
            "AI-powered research assistant for automated literature reviews. Uses RAG with FAISS, LLM-based query reasoning, multi-signal grounding scores, and multi-paper synthesis.",
        description:
            "ALRA is an AI research assistant that ingests PDF research papers, creates a searchable FAISS vector database, and uses Llama 3.3 70B (via Groq) to answer queries with composite grounding scores and source citations. Version 2.0 adds query reasoning, semantic extraction, and multi-paper synthesis.",
        highlights: [
            {
                metric: "5-Phase",
                label: "Architecture",
                detail:
                    "Query Reasoning → Semantic Extraction → Grounding Score → Synthesis → Evaluation",
            },
            {
                metric: "70B",
                label: "LLM Parameters",
                detail: "Powered by Llama 3.3 70B Versatile via Groq API",
            },
            {
                metric: "0–100%",
                label: "Grounding Score",
                detail:
                    "Composite confidence from retrieval similarity, citation coverage, source overlap, and hallucination risk",
            },
        ],
        bullets: [
            "Built a RAG-based research assistant using FAISS vector search and Llama 3.3 70B (Groq), enabling researchers to query multiple PDFs with confidence-scored, source-cited answers.",
            "Implemented LLM-based query expansion (reasoning layer) that decomposes complex multi-hop questions into sub-queries and generates semantic search keywords for improved retrieval.",
            "Engineered a Composite Grounding Score (0–100%) combining retrieval similarity, citation coverage, source overlap, and hallucination risk detection — replacing naive distance-only heuristics.",
            "Built a Multi-Paper Synthesis engine that generates structured comparison tables across uploaded papers, detecting contradictions and disagreements between research claims.",
            "Designed a semantic extraction pipeline that classifies PDF chunks into research sections (Objective, Methodology, Results, Claims, Limitations) for context-aware retrieval.",
        ],
        techStack: [
            { name: "Python", icon: null },
            { name: "Streamlit", icon: null },
            { name: "LangChain", icon: null },
            { name: "FAISS", icon: null },
            { name: "Groq / Llama 3.3", icon: null },
            { name: "HuggingFace", icon: null },
        ],
        tags: ["Python", "LangChain", "FAISS", "Streamlit", "LLM", "RAG"],
        architecture: {
            overview:
                "Multi-module RAG pipeline: Query Reasoning → Semantic Search (FAISS) → LLM Generation → Grounding Score → Evaluation Logging. Supports two modes: Q&A Chat and Multi-Paper Synthesis.",
            layers: [
                {
                    name: "Query Reasoning",
                    detail:
                        "LLM-based query expansion: core intent extraction, reasoning keywords, sub-query decomposition, expanded search query generation",
                },
                {
                    name: "Semantic Extraction",
                    detail:
                        "PDF chunks classified into research sections (Objective, Methodology, Results, Claims, Limitations) with paper title extraction",
                },
                {
                    name: "Vector Search",
                    detail:
                        "FAISS index with HuggingFace embeddings (all-MiniLM-L6-v2), metadata-enriched chunks for context-aware retrieval",
                },
                {
                    name: "Grounding Engine",
                    detail:
                        "Composite confidence score from 4 signals: retrieval similarity, citation coverage, source overlap, hallucination risk",
                },
                {
                    name: "Synthesis Mode",
                    detail:
                        "Cross-paper comparison: claims tables, methodology comparison, results summary, contradiction detection",
                },
            ],
        },
        versionHistory: {
            title: "ALRA 1.0 vs ALRA 2.0 — The Architecture Upgrade",
            intro: "ALRA started as a straightforward RAG chatbot and evolved into a multi-phase research intelligence platform. Here's what changed and why.",
            versions: [
                {
                    version: "1.0",
                    label: "Foundation",
                    date: "Dec 2025",
                    description: "The original ALRA was a standard RAG pipeline — upload PDFs, chunk them, embed with FAISS, and query with Llama 3.3 via Groq. Confidence scoring was a simple L2-distance heuristic mapped to a percentage. It worked, but had clear limitations.",
                    features: [
                        "Basic PDF ingestion with PyMuPDF + RecursiveCharacterTextSplitter",
                        "FAISS vector store with HuggingFace embeddings (all-MiniLM-L6-v2)",
                        "Single-mode Q&A chat with Llama 3.3 70B",
                        "Distance-based confidence score (L2 → percentage heuristic)",
                        "Simple benchmark suite with keyword matching",
                    ],
                    limitations: [
                        "No query understanding — direct user query used for retrieval",
                        "Confidence score was unreliable (purely distance-based, no semantic validation)",
                        "Flat chunks with no section awareness — methodology mixed with results",
                        "No cross-paper comparison capability",
                        "Single-mode: only Q&A, no synthesis",
                    ],
                },
                {
                    version: "2.0",
                    label: "Intelligence Upgrade",
                    date: "Jan – Feb 2026",
                    description: "Inspired by the CLARA framework (Apple/Edinburgh research on latent-space retrieval), ALRA 2.0 adds 5 new architectural layers. The goal: make the system actually understand research questions, not just pattern-match.",
                    features: [
                        "LLM-based Query Reasoning — decomposes multi-hop questions into sub-queries with reasoning keywords",
                        "Semantic Extraction — classifies chunks into sections (Objective, Methodology, Results, Claims, Limitations)",
                        "Composite Grounding Score — 4-signal confidence (retrieval similarity, citation coverage, source overlap, hallucination risk)",
                        "Multi-Paper Synthesis Mode — generates comparison tables with contradiction detection",
                        "Performance History Dashboard — interaction logging with faithfulness and recall metrics",
                    ],
                    improvements: [
                        "Query expansion catches implied concepts the user didn't explicitly state",
                        "Section-tagged chunks mean retrieval knows if it's pulling from Results vs. Methodology",
                        "Grounding score replaces naive distance heuristic with multi-signal validation",
                        "Synthesis mode enables literature review workflows across multiple papers",
                        "Evaluation logging creates a feedback loop for iterative improvement",
                    ],
                },
            ],
        },
        links: {
            github: "https://github.com/Syed-Suhaan/auto-lit-review",
            live: "https://auto-lit-review-agent.streamlit.app/",
        },
    },
    {
        slug: "eras-protocol",
        title: "ERAS Protocol App",
        subtitle: "Enhanced Recovery After Surgery",
        category: "HealthTech / Mobile",
        date: "2024",
        icon: "/icons/eras-protocol.svg",
        color: "#FF4D6A",
        summary:
            "Award-winning mobile application that digitized 20+ pages of hospital logs into a seamless Flutter interface. Won 1st place in App-a-thon.",
        description:
            "The ERAS Protocol App digitizes the Enhanced Recovery After Surgery workflow, replacing 20+ pages of manual hospital logs with a streamlined mobile interface built in Flutter. It won 1st place at the App-a-thon competition.",
        highlights: [
            {
                metric: "1st",
                label: "Place — App-a-thon",
                detail: "Won first place in the university App-a-thon competition",
            },
            {
                metric: "20+",
                label: "Pages Digitized",
                detail: "Converted manual hospital log forms into digital workflows",
            },
            {
                metric: "Real-time",
                label: "Cloud Sync",
                detail:
                    "Firebase-backed real-time data synchronization for medical staff",
            },
        ],
        bullets: [
            "Digitized 20+ pages of manual hospital logs into a seamless Flutter interface, streamlining the Enhanced Recovery After Surgery (ERAS) protocol workflow.",
            "Won 1st place in the university App-a-thon, demonstrating strong UI/UX and practical HealthTech application.",
            "Integrated Firebase for real-time cloud synchronization, authentication, and secure medical data storage.",
            "Designed intuitive multi-step forms for pre-operative, intra-operative, and post-operative checklists used by medical staff.",
        ],
        techStack: [
            { name: "Flutter", icon: "/icons/flutter-svgrepo-com.svg" },
            { name: "Firebase", icon: "/icons/firebase-svgrepo-com.svg" },
            { name: "Dart", icon: null },
        ],
        tags: ["Flutter", "Firebase", "HealthTech", "Dart"],
        architecture: {
            overview:
                "Cross-platform mobile application built with Flutter, using Firebase for backend services including Firestore for real-time data, Firebase Auth for user management, and Cloud Functions for server-side logic.",
            layers: [
                {
                    name: "Mobile Frontend",
                    detail:
                        "Flutter with Material Design, multi-step form wizards, and responsive layouts optimized for medical staff workflows",
                },
                {
                    name: "Backend Services",
                    detail:
                        "Firebase Firestore for real-time NoSQL database, Firebase Auth for secure medical staff authentication",
                },
                {
                    name: "Data Model",
                    detail:
                        "Structured ERAS protocol checklists: pre-operative assessments, intra-operative monitoring, post-operative recovery tracking",
                },
            ],
        },
        links: {
            github: null,
            live: null,
        },
    },
];

export default projects;
