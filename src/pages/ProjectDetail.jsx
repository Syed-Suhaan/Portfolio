import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import projects from "../data/projects";

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "1.5rem",
          backgroundColor: "var(--bg-color)",
        }}
      >
        <h1
          style={{
            fontSize: "4rem",
            fontWeight: 800,
            color: "var(--accent-primary)",
          }}
        >
          404
        </h1>
        <p style={{ color: "var(--text-secondary)" }}>Project not found.</p>
        <Link to="/projects" className="btn btn-primary">
          Back to Projects
        </Link>
      </div>
    );
  }

  const accentColor = project.color || "var(--accent-primary)";

  return (
    <div className="project-detail-page">
      {/* Floating back button */}
      <button
        onClick={() => navigate(-1)}
        className="back-btn"
        aria-label="Go back"
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
        <span>Back</span>
      </button>

      {/* ── Hero Section ── */}
      <section className="project-hero">
        <div className="container">
          <div className="project-hero-inner">
            {/* Left: Icon */}
            <div className="project-hero-icon-wrap">
              <div
                className="project-hero-icon"
                style={{
                  backgroundColor: accentColor,
                  maskImage: `url("${project.icon}")`,
                  WebkitMaskImage: `url("${project.icon}")`,
                }}
              />
            </div>

            {/* Right: Info */}
            <div className="project-hero-info">
              <div className="project-meta-row">
                <span
                  className="project-category-badge"
                  style={{
                    borderColor: accentColor,
                    color: accentColor,
                  }}
                >
                  {project.category}
                </span>
                <span className="project-date">{project.date}</span>
              </div>
              <h1 className="project-title">{project.title}</h1>
              <p className="project-subtitle">{project.subtitle}</p>
              <p className="project-description">{project.description}</p>

              {/* Links */}
              <div className="project-links">
                {project.links?.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ backgroundColor: accentColor }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                    Live Site
                  </a>
                )}
                {project.links?.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Highlights / Metrics ── */}
      {project.highlights && project.highlights.length > 0 && (
        <section className="project-section">
          <div className="container">
            <div className="metrics-grid">
              {project.highlights.map((h, i) => (
                <div
                  key={i}
                  className="metric-card"
                  style={{ "--accent": accentColor }}
                >
                  <span className="metric-value">{h.metric}</span>
                  <span className="metric-label">{h.label}</span>
                  <span className="metric-detail">{h.detail}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── What I Built ── */}
      <section className="project-section">
        <div className="container">
          <h2 className="section-heading">
            <span className="heading-accent" style={{ color: accentColor }}>
              //
            </span>{" "}
            What I Built
          </h2>
          <div className="bullets-list">
            {project.bullets.map((bullet, i) => (
              <div key={i} className="bullet-item">
                <div
                  className="bullet-marker"
                  style={{ backgroundColor: accentColor }}
                />
                <p>{bullet}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Architecture ── */}
      {project.architecture && (
        <section className="project-section">
          <div className="container">
            <h2 className="section-heading">
              <span className="heading-accent" style={{ color: accentColor }}>
                //
              </span>{" "}
              Architecture
            </h2>
            <p className="arch-overview">{project.architecture.overview}</p>
            <div className="arch-layers">
              {project.architecture.layers.map((layer, i) => (
                <div key={i} className="arch-layer-card">
                  <div className="arch-layer-header">
                    <span
                      className="arch-layer-num"
                      style={{ color: accentColor }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3>{layer.name}</h3>
                  </div>
                  <p>{layer.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Version History (ALRA only) ── */}
      {project.versionHistory && (
        <section className="project-section">
          <div className="container">
            <h2 className="section-heading">
              <span className="heading-accent" style={{ color: accentColor }}>
                                //
              </span>{" "}
              {project.versionHistory.title}
            </h2>
            <p className="arch-overview">{project.versionHistory.intro}</p>
            <div className="version-grid">
              {project.versionHistory.versions.map((ver, i) => (
                <div
                  key={i}
                  className={`version-card ${ver.version === '2.0' ? 'version-highlight' : ''}`}
                  style={{ '--accent': accentColor }}
                >
                  <div className="version-header">
                    <span className="version-badge" style={{
                      backgroundColor: ver.version === '2.0' ? accentColor : 'transparent',
                      border: ver.version === '1.0' ? `1px solid var(--border-color)` : 'none',
                      color: ver.version === '2.0' ? '#fff' : 'var(--text-secondary)',
                    }}>
                      v{ver.version}
                    </span>
                    <div>
                      <h3 className="version-label">{ver.label}</h3>
                      <span className="version-date">{ver.date}</span>
                    </div>
                  </div>
                  <p className="version-desc">{ver.description}</p>

                  <div className="version-section">
                    <h4>Features</h4>
                    <ul>
                      {ver.features.map((f, j) => (
                        <li key={j}>{f}</li>
                      ))}
                    </ul>
                  </div>

                  {ver.limitations && (
                    <div className="version-section version-limitations">
                      <h4>Limitations</h4>
                      <ul>
                        {ver.limitations.map((l, j) => (
                          <li key={j}>{l}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {ver.improvements && (
                    <div className="version-section version-improvements">
                      <h4>What Changed</h4>
                      <ul>
                        {ver.improvements.map((imp, j) => (
                          <li key={j}>{imp}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Benchmarks (SusyDB only) ── */}
      {project.benchmarks && (
        <section className="project-section">
          <div className="container">
            <h2 className="section-heading">
              <span className="heading-accent" style={{ color: accentColor }}>
                //
              </span>{" "}
              Benchmarks
            </h2>
            <p className="bench-note">
              50 Concurrent Clients · 100,000 Requests · Small (16B) payloads ·
              Windows 11
            </p>
            <div className="bench-table-wrap">
              <table className="bench-table">
                <thead>
                  <tr>
                    <th>Workload</th>
                    <th>Redis (RPS / P99)</th>
                    <th>SusyDB (RPS / P99)</th>
                    <th>Gain</th>
                  </tr>
                </thead>
                <tbody>
                  {project.benchmarks.map((b, i) => (
                    <tr key={i}>
                      <td className="bench-workload">{b.workload}</td>
                      <td className="bench-redis">{b.redis}</td>
                      <td
                        className="bench-susydb"
                        style={{ color: accentColor }}
                      >
                        {b.susydb}
                      </td>
                      <td className="bench-gain">{b.gain}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* ── Tech Stack ── */}
      <section className="project-section">
        <div className="container">
          <h2 className="section-heading">
            <span className="heading-accent" style={{ color: accentColor }}>
              //
            </span>{" "}
            Tech Stack
          </h2>
          <div className="tech-grid">
            {project.techStack.map((tech, i) => (
              <div key={i} className="tech-chip">
                {tech.icon && (
                  <div
                    className="tech-chip-icon"
                    style={{
                      backgroundColor: accentColor,
                      maskImage: `url("${tech.icon}")`,
                      WebkitMaskImage: `url("${tech.icon}")`,
                    }}
                  />
                )}
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Navigation Footer ── */}
      <section className="project-section project-nav-footer">
        <div className="container">
          <div className="project-nav-links">
            {(() => {
              const idx = projects.findIndex((p) => p.slug === slug);
              const prev = idx > 0 ? projects[idx - 1] : null;
              const next =
                idx < projects.length - 1 ? projects[idx + 1] : null;
              return (
                <>
                  {prev ? (
                    <Link
                      to={`/projects/${prev.slug}`}
                      className="project-nav-link prev"
                    >
                      <span className="nav-label">← Previous</span>
                      <span className="nav-title">{prev.title}</span>
                    </Link>
                  ) : (
                    <div />
                  )}
                  <Link to="/projects" className="project-nav-link all">
                    All Projects
                  </Link>
                  {next ? (
                    <Link
                      to={`/projects/${next.slug}`}
                      className="project-nav-link next"
                    >
                      <span className="nav-label">Next →</span>
                      <span className="nav-title">{next.title}</span>
                    </Link>
                  ) : (
                    <div />
                  )}
                </>
              );
            })()}
          </div>
        </div>
      </section>

      <style>{`
        .project-detail-page {
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
        .project-hero {
          padding: 8rem 0 4rem;
          border-bottom: 1px solid var(--border-color);
        }
        .project-hero-inner {
          display: flex;
          gap: 4rem;
          align-items: flex-start;
        }
        .project-hero-icon-wrap {
          flex-shrink: 0;
          width: 120px;
          height: 120px;
          border-radius: 24px;
          background: linear-gradient(135deg, #111, #0a0a0a);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .project-hero-icon {
          width: 64px;
          height: 64px;
          mask-size: contain;
          -webkit-mask-size: contain;
          mask-repeat: no-repeat;
          -webkit-mask-repeat: no-repeat;
          mask-position: center;
          -webkit-mask-position: center;
        }
        .project-hero-info {
          flex: 1;
        }
        .project-meta-row {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 1rem;
        }
        .project-category-badge {
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          padding: 0.3rem 0.8rem;
          border: 1px solid;
          border-radius: 99px;
        }
        .project-date {
          font-size: 0.8rem;
          color: var(--text-secondary);
          font-weight: 500;
        }
        .project-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          text-transform: uppercase;
          margin: 0 0 0.25rem;
          line-height: 1;
        }
        .project-subtitle {
          font-size: 1.2rem;
          color: var(--text-secondary);
          margin: 0 0 1.5rem;
          font-weight: 400;
        }
        .project-description {
          font-size: 1rem;
          line-height: 1.7;
          color: var(--text-secondary);
          max-width: 700px;
        }
        .project-links {
          display: flex;
          gap: 1rem;
          margin-top: 1.5rem;
        }
        .project-links .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        /* ── Sections ── */
        .project-section {
          padding: 4rem 0;
        }
        .section-heading {
          font-size: 1.6rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: -0.02em;
          margin-bottom: 2rem;
        }
        .heading-accent {
          font-family: monospace;
          font-weight: 400;
          margin-right: 0.5rem;
        }

        /* ── Metrics ── */
        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.5rem;
        }
        .metric-card {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .metric-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: var(--accent);
          border-radius: 4px 0 0 4px;
        }
        .metric-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255,255,255,0.1);
          box-shadow: 0 20px 40px -10px rgba(0,0,0,0.5);
        }
        .metric-value {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--accent);
          line-height: 1;
        }
        .metric-label {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--text-primary);
          text-transform: uppercase;
          letter-spacing: 0.03em;
          margin-top: 0.5rem;
        }
        .metric-detail {
          font-size: 0.8rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-top: 0.25rem;
        }

        /* ── Bullets ── */
        .bullets-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          max-width: 800px;
        }
        .bullet-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }
        .bullet-marker {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          flex-shrink: 0;
          margin-top: 0.65rem;
        }
        .bullet-item p {
          margin: 0;
          font-size: 0.95rem;
          line-height: 1.7;
          color: var(--text-secondary);
        }

        /* ── Architecture ── */
        .arch-overview {
          font-size: 1rem;
          line-height: 1.7;
          color: var(--text-secondary);
          max-width: 800px;
          margin-bottom: 2rem;
        }
        .arch-layers {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1rem;
        }
        .arch-layer-card {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 1.5rem;
          transition: all 0.3s ease;
        }
        .arch-layer-card:hover {
          border-color: rgba(255,255,255,0.1);
          transform: translateY(-2px);
        }
        .arch-layer-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 0.75rem;
        }
        .arch-layer-num {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.8rem;
          font-weight: 700;
          opacity: 0.7;
        }
        .arch-layer-header h3 {
          font-size: 1rem;
          font-weight: 700;
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 0.02em;
        }
        .arch-layer-card p {
          font-size: 0.85rem;
          line-height: 1.6;
          margin: 0;
          color: var(--text-secondary);
        }

        /* ── Benchmarks ── */
        .bench-note {
          font-size: 0.8rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          font-weight: 500;
        }
        .bench-table-wrap {
          overflow-x: auto;
          border: 1px solid var(--border-color);
          border-radius: 12px;
          background: var(--bg-card);
        }
        .bench-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.85rem;
        }
        .bench-table th {
          text-align: left;
          padding: 1rem 1.25rem;
          font-weight: 700;
          text-transform: uppercase;
          font-size: 0.7rem;
          letter-spacing: 0.08em;
          color: var(--text-secondary);
          border-bottom: 1px solid var(--border-color);
          white-space: nowrap;
        }
        .bench-table td {
          padding: 0.85rem 1.25rem;
          border-bottom: 1px solid rgba(255,255,255,0.03);
          white-space: nowrap;
        }
        .bench-table tr:last-child td {
          border-bottom: none;
        }
        .bench-workload {
          font-weight: 600;
          color: var(--text-primary);
        }
        .bench-redis {
          color: var(--text-secondary);
        }
        .bench-susydb {
          font-weight: 700;
        }
        .bench-gain {
          font-weight: 800;
          color: var(--accent-primary);
        }

        /* ── Tech Grid ── */
        .tech-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .tech-chip {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: 99px;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-primary);
          transition: all 0.25s ease;
        }
        .tech-chip:hover {
          border-color: rgba(255,255,255,0.15);
          transform: translateY(-2px);
        }
        .tech-chip-icon {
          width: 18px;
          height: 18px;
          mask-size: contain;
          -webkit-mask-size: contain;
          mask-repeat: no-repeat;
          -webkit-mask-repeat: no-repeat;
          mask-position: center;
          -webkit-mask-position: center;
        }

        /* ── Nav Footer ── */
        .project-nav-footer {
          border-top: 1px solid var(--border-color);
          margin-top: 2rem;
        }
        .project-nav-links {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 2rem;
        }
        .project-nav-link {
          text-decoration: none;
          color: var(--text-secondary);
          transition: color 0.3s ease;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .project-nav-link:hover {
          color: var(--text-primary);
        }
        .project-nav-link .nav-label {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-weight: 600;
        }
        .project-nav-link .nav-title {
          font-size: 1.1rem;
          font-weight: 700;
        }
        .project-nav-link.next {
          text-align: right;
        }
        .project-nav-link.all {
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--accent-primary);
        }

        /* ── Version History ── */
        .version-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }
        .version-card {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 2rem;
          transition: all 0.3s ease;
        }
        .version-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px -10px rgba(0,0,0,0.5);
        }
        .version-highlight {
          border-color: var(--accent);
          background: linear-gradient(135deg, rgba(124,92,252,0.05), var(--bg-card));
        }
        .version-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.25rem;
        }
        .version-badge {
          font-size: 0.75rem;
          font-weight: 800;
          padding: 0.35rem 0.85rem;
          border-radius: 99px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          flex-shrink: 0;
        }
        .version-label {
          font-size: 1.1rem;
          font-weight: 800;
          margin: 0;
          text-transform: uppercase;
          letter-spacing: -0.01em;
        }
        .version-date {
          font-size: 0.75rem;
          color: var(--text-secondary);
          font-weight: 500;
        }
        .version-desc {
          font-size: 0.85rem;
          line-height: 1.7;
          color: var(--text-secondary);
          margin: 0 0 1.5rem;
        }
        .version-section {
          margin-bottom: 1.25rem;
        }
        .version-section h4 {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--accent);
          font-weight: 700;
          margin: 0 0 0.6rem;
        }
        .version-limitations h4 {
          color: #ff6b6b;
        }
        .version-improvements h4 {
          color: #51cf66;
        }
        .version-section ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .version-section li {
          font-size: 0.8rem;
          line-height: 1.5;
          color: var(--text-secondary);
          padding-left: 1.2rem;
          position: relative;
        }
        .version-section li::before {
          content: '›';
          position: absolute;
          left: 0;
          color: var(--accent);
          font-weight: 700;
          font-size: 1rem;
        }
        .version-limitations li::before {
          color: #ff6b6b;
        }
        .version-improvements li::before {
          color: #51cf66;
        }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .back-btn {
            top: 1rem;
            left: 1rem;
            padding: 0.5rem 1rem;
            font-size: 0.8rem;
          }
          .project-hero {
            padding: 6rem 0 3rem;
          }
          .project-hero-inner {
            flex-direction: column;
            gap: 2rem;
          }
          .project-hero-icon-wrap {
            width: 80px;
            height: 80px;
            border-radius: 16px;
          }
          .project-hero-icon {
            width: 44px;
            height: 44px;
          }
          .project-title {
            font-size: 2rem;
          }
          .metrics-grid {
            grid-template-columns: 1fr;
          }
          .arch-layers {
            grid-template-columns: 1fr;
          }
          .project-nav-links {
            flex-direction: column;
            gap: 1.5rem;
          }
          .project-nav-link.next {
            text-align: left;
          }
          .version-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectDetail;
