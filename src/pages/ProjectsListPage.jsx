import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import projects from "../data/projects";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const ProjectListCard = ({ project, index }) => {
    const ref = useIntersectionObserver({ threshold: 0.1 });
    const accentColor = project.color || "var(--accent-primary)";

    return (
        <Link
            to={`/projects/${project.slug}`}
            ref={ref}
            className="plist-card reveal-fade-up"
            style={{ "--delay": `${index * 0.1}s`, "--accent": accentColor }}
        >
            <div className="plist-card-inner">
                {/* Left: Icon */}
                <div className="plist-icon-wrap">
                    <div
                        className="plist-icon"
                        style={{
                            backgroundColor: accentColor,
                            maskImage: `url("${project.icon}")`,
                            WebkitMaskImage: `url("${project.icon}")`,
                        }}
                    />
                </div>

                {/* Content */}
                <div className="plist-content">
                    <div className="plist-top-row">
                        <span
                            className="plist-category"
                            style={{ borderColor: accentColor, color: accentColor }}
                        >
                            {project.category}
                        </span>
                        <span className="plist-date">{project.date}</span>
                    </div>
                    <h2 className="plist-title">{project.title}</h2>
                    <p className="plist-subtitle">{project.subtitle}</p>
                    <p className="plist-summary">{project.summary}</p>

                    {/* Tags */}
                    <div className="plist-tags">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="plist-tag"
                                style={{
                                    backgroundColor: `${accentColor}12`,
                                    color: accentColor,
                                    borderColor: `${accentColor}30`,
                                }}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Metrics Preview */}
                    <div className="plist-metrics">
                        {project.highlights.slice(0, 3).map((h, i) => (
                            <div key={i} className="plist-metric">
                                <span className="plist-metric-val" style={{ color: accentColor }}>
                                    {h.metric}
                                </span>
                                <span className="plist-metric-label">{h.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Arrow */}
                <div className="plist-arrow">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </div>
            </div>
        </Link>
    );
};

const ProjectsListPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="projects-list-page">
            {/* Back to home */}
            <button
                onClick={() => navigate("/")}
                className="back-btn"
                aria-label="Go home"
            >
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                >
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                <span>Home</span>
            </button>

            <section className="plist-hero">
                <div className="container">
                    <p className="plist-label">Portfolio</p>
                    <h1 className="plist-heading">All Projects</h1>
                    <p className="plist-desc">
                        A collection of systems, products, and experiments I&apos;ve built —
                        from high-performance databases to AI research tools.
                    </p>
                </div>
            </section>

            <section className="plist-section">
                <div className="container">
                    <div className="plist-grid">
                        {projects.map((project, index) => (
                            <ProjectListCard
                                key={project.slug}
                                project={project}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <style>{`
        .projects-list-page {
          background-color: var(--bg-color);
          min-height: 100vh;
          padding-bottom: 4rem;
        }

        /* ── Back Button ── */
        .back-btn {
          position: fixed;
          top: 2rem;
          left: 2rem;
          z-index: 100;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.2rem;
          background: rgba(10, 10, 10, 0.85);
          backdrop-filter: blur(12px);
          border: 1px solid var(--border-color);
          border-radius: 99px;
          color: var(--text-secondary);
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .back-btn:hover {
          color: var(--text-primary);
          border-color: var(--text-secondary);
          transform: translateX(-4px);
        }

        /* ── Hero ── */
        .plist-hero {
          padding: 8rem 0 3rem;
          border-bottom: 1px solid var(--border-color);
        }
        .plist-label {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--accent-primary);
          font-weight: 700;
          margin-bottom: 0.5rem;
        }
        .plist-heading {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          text-transform: uppercase;
          margin: 0 0 1rem;
        }
        .plist-desc {
          font-size: 1.1rem;
          color: var(--text-secondary);
          max-width: 600px;
          line-height: 1.6;
        }

        /* ── Card List ── */
        .plist-section {
          padding: 3rem 0;
        }
        .plist-grid {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .plist-card {
          display: block;
          text-decoration: none;
          color: inherit;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.35s ease;
          cursor: pointer;
        }
        .plist-card:hover {
          transform: translateY(-4px);
          border-color: var(--accent);
          box-shadow: 0 24px 48px -12px rgba(0,0,0,0.6);
        }
        .plist-card-inner {
          display: flex;
          align-items: flex-start;
          gap: 2.5rem;
          padding: 2.5rem;
        }

        /* Icon */
        .plist-icon-wrap {
          flex-shrink: 0;
          width: 80px;
          height: 80px;
          border-radius: 16px;
          background: linear-gradient(135deg, #111, #0a0a0a);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .plist-icon {
          width: 42px;
          height: 42px;
          mask-size: contain;
          -webkit-mask-size: contain;
          mask-repeat: no-repeat;
          -webkit-mask-repeat: no-repeat;
          mask-position: center;
          -webkit-mask-position: center;
          transition: filter 0.3s ease;
        }
        .plist-card:hover .plist-icon {
          filter: drop-shadow(0 0 12px var(--accent));
        }

        /* Content */
        .plist-content {
          flex: 1;
          min-width: 0;
        }
        .plist-top-row {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 0.75rem;
        }
        .plist-category {
          font-size: 0.65rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          padding: 0.25rem 0.6rem;
          border: 1px solid;
          border-radius: 99px;
        }
        .plist-date {
          font-size: 0.75rem;
          color: var(--text-secondary);
          font-weight: 500;
        }
        .plist-title {
          font-size: 1.6rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: -0.02em;
          margin: 0 0 0.15rem;
          line-height: 1.1;
        }
        .plist-subtitle {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin: 0 0 0.75rem;
          font-weight: 400;
        }
        .plist-summary {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0 0 1rem;
          max-width: 650px;
        }

        /* Tags */
        .plist-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-bottom: 1.25rem;
        }
        .plist-tag {
          font-size: 0.7rem;
          font-weight: 600;
          padding: 0.2rem 0.65rem;
          border-radius: 99px;
          border: 1px solid;
        }

        /* Metrics Preview */
        .plist-metrics {
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .plist-metric {
          display: flex;
          flex-direction: column;
        }
        .plist-metric-val {
          font-size: 1.4rem;
          font-weight: 800;
          line-height: 1;
        }
        .plist-metric-label {
          font-size: 0.65rem;
          color: var(--text-secondary);
          text-transform: uppercase;
          font-weight: 600;
          letter-spacing: 0.03em;
          margin-top: 0.2rem;
        }

        /* Arrow */
        .plist-arrow {
          flex-shrink: 0;
          color: var(--text-secondary);
          transition: all 0.3s ease;
          align-self: center;
        }
        .plist-card:hover .plist-arrow {
          color: var(--accent);
          transform: translateX(6px);
        }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .back-btn {
            top: 1rem;
            left: 1rem;
          }
          .plist-hero {
            padding: 6rem 0 2rem;
          }
          .plist-card-inner {
            flex-direction: column;
            gap: 1.5rem;
            padding: 1.5rem;
          }
          .plist-icon-wrap {
            width: 56px;
            height: 56px;
            border-radius: 12px;
          }
          .plist-icon {
            width: 30px;
            height: 30px;
          }
          .plist-title {
            font-size: 1.3rem;
          }
          .plist-arrow {
            display: none;
          }
          .plist-metrics {
            gap: 1.5rem;
          }
        }
      `}</style>
        </div>
    );
};

export default ProjectsListPage;
