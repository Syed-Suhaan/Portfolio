import Navbar from './components/navbar';
import Hero from './components/hero';
import Projects from './components/projects';
import Achievements from './components/testimonials';
import About from './components/about';
import Contact from './components/contact';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Achievements />
      <Contact />

      {/* Simple Footer */}
      <footer className="section" style={{ borderTop: '1px solid var(--border-color)', padding: '4rem 0', backgroundColor: 'var(--bg-card)' }}>
        <div className="container">
          <div style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '2rem'
          }}>
            {/* Left: Brand */}
            <div>
              <h3 className="logo" style={{ fontSize: '1.75rem', margin: 0, lineHeight: 1 }}>SUHAAN</h3>
              <p style={{ margin: '0.5rem 0 0', color: 'var(--text-secondary)' }}>© 2025 All Rights Reserved.</p>
            </div>

            {/* Right: Links */}
            <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
              <a href="https://linkedin.com/in/syed-suhaan/" className="nav-link">LinkedIn</a>
              <a href="https://github.com/syed-suhaan" className="nav-link">GitHub</a>
              <a href="mailto:suhaansyed2004@gmail.com" className="nav-link">Email</a>
            </div>
          </div>
        </div>
      </footer>
    </div >
  );
}

export default App;
