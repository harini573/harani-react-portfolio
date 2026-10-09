
import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight, Github, Linkedin, Mail, Code2, BrainCircuit,
  Database, Globe, Menu, X, GraduationCap, BriefcaseBusiness,
  Award, Sparkles,
} from "lucide-react";
import "./styles.css";

const API_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:5000/api/about";

const defaultProfile = {
  name: "Harani Vijaykumar",
  degree: "B.E. Computer Science Engineering",
  college: "Coimbatore Institute of Engineering and Technology",
  graduationYear: 2027,
  cgpa: 8.44,
  email: "harinivijaykumar7@gmail.com",
  location: "Coimbatore,Tamil Nadu, India",
};

const skills = [
  { name: "Python", icon: Code2 },
  { name: "Java & C", icon: Code2 },
  { name: "React.js", icon: Globe },
  { name: "Node.js / Express", icon: Globe },
  { name: "HTML / CSS / Bootstrap", icon: Globe },
  { name: "MySQL / MongoDB", icon: Database },
  { name: "TensorFlow / Keras", icon: BrainCircuit },
  { name: "OpenCV / NumPy", icon: BrainCircuit },
  { name: "scikit-learn", icon: BrainCircuit },
  { name: "GitHub", icon: Github },
  { name: "REST APIs", icon: Globe },
  { name: "Docker / Kubernetes", icon: Code2 },
];

const projects = [
  {
    title: "Blood Group Detection Using Fingerprint",
    category: "AI / ML",
    description:
      "A machine-learning project exploring fingerprint image processing and CNN-based prediction, with a web interface and database integration.",
    tech: ["Python", "TensorFlow", "Keras", "OpenCV", "FastAPI", "MongoDB"],
  },
  {
    title: "PHP & MySQL Blog Platform",
    category: "Full Stack",
    description:
      "A CRUD-based blog application with authentication, role management, search, pagination and dark mode.",
    tech: ["PHP", "MySQL", "XAMPP", "HTML", "CSS"],
  },
  {
    title: "Hospital Appointment Booking",
    category: "Web Development",
    description:
      "An appointment-booking interface designed to simplify hospital scheduling and provide an accessible user experience.",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
  },
];

const experiences = [
  {
    role: "Full Stack Development Intern",
    company: "Synovers Technologies, Coimbatore",
    period: "2025",
    description:
      "Gained practical exposure to full-stack development and building web applications.",
  },
  {
    role: "Web Development Intern",
    company: "ApexPlanet",
    period: "2025",
    description:
      "Completed online internship training focused on PHP and MySQL web development.",
  },
];

const certifications = [
  "NPTEL Elite Silver - R Programming",
  "NPTEL Elite — Software Project Management",
  "Full Stack Development Internship — Synovers Technologies",
  "Web Development in PHP & MySQL — ApexPlanet",
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profile, setProfile] = useState(defaultProfile);
  const [apiStatus, setApiStatus] = useState("loading");

  // Load profile from the backend; use default details if it is offline.
  useEffect(() => {
    const controller = new AbortController();

    async function loadProfile() {
      try {
        const response = await fetch(API_URL, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`API request failed: ${response.status}`);
        }

        const data = await response.json();

        setProfile((current) => ({
          ...current,
          ...data,
        }));
        setApiStatus("connected");
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Could not load API profile:", error);
          setApiStatus("offline");
        }
      }
    }

    loadProfile();
    return () => controller.abort();
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const navItems = ["About", "Skills", "Projects", "Experience", "Contact"];

  return (
    <div className="site">
      <header className="nav-wrap">
        <nav className="nav container">
          <a href="#home" className="brand" onClick={closeMenu}>
            <span className="brand-mark">H</span>
            <span>Harani<span className="dot"></span></span>
          </a>

          <button
            type="button"
            className="menu-btn"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={closeMenu}
              >
                {item}
              </a>
            ))}
            <a className="nav-cta" href="#contact" onClick={closeMenu}>
              Let's talk <ArrowUpRight size={16} />
            </a>
          </div>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section id="home" className="hero container">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="pulse" />
              Available for internships &amp; opportunities
            </div>

            <h1>
              Building ideas into{" "}
              <span>useful digital experiences.</span>
            </h1>

            <p className="hero-text">
              I'm <strong>{profile.name}</strong>, a Computer Science
              Engineering student passionate about software development,
              full-stack applications and AI/ML.
            </p>

            <div className="hero-actions">
              <a className="btn primary" href="#projects">
                View my work <ArrowUpRight size={18} />
              </a>
              <a className="btn secondary" href="#contact">
                Get in touch <Mail size={17} />
              </a>
            </div>

            <div className="social-row">
              <a
                href="https://github.com/harini573"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={19} /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/harani-vijaykumar-2bbb1a2b7/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={19} /> LinkedIn
              </a>
            </div>
          </div>

          <div className="hero-card">
            <div className="orb orb-one" />
            <div className="orb orb-two" />

            <div className="profile-card">
              <div className="profile-top">
                <div className="mini-avatar">HV</div>
                <span className="status">Open to work</span>
              </div>

              <p className="code-label">developer.profile</p>

              <div className="code-lines">
                <span><i>name</i>: "{profile.name}"</span>
                <span><i>role</i>: "Software / Full Stack / AI"</span>
                <span>
                  <i>education</i>: "B.E. CSE • {profile.graduationYear}"
                </span>
                <span><i>cgpa</i>: {profile.cgpa}</span>
                <span><i>location</i>: "{profile.location}"</span>
              </div>

              <div className="floating-tag tag-one">
                <BrainCircuit size={16} /> AI / ML
              </div>
              <div className="floating-tag tag-two">
                <Code2 size={16} /> Full Stack
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section container">
          <div className="section-head">
            <span className="section-number">01</span>
            <div>
              <p className="kicker">About me</p>
              <h2>A curious developer who likes to <em>build.</em></h2>
            </div>
          </div>

          <div className="about-grid">
            <div>
              <p className="large-copy">
                I'm currently pursuing my <strong>{profile.degree}</strong> at{" "}
                {profile.college}, with an expected graduation in{" "}
                {profile.graduationYear}.
              </p>
              <p>
                I enjoy turning concepts into working applications, from
                responsive web interfaces and REST APIs to machine-learning
                projects involving computer vision. I'm continuously improving
                my problem-solving and development skills while preparing for
                software and AI-focused opportunities.
              </p>
              <p className="api-status" aria-live="polite">
                {apiStatus === "connected"
                  ? "Profile data loaded from the API."
                  : apiStatus === "loading"
                    ? "Connecting to portfolio API..."
                    : "API offline. Showing saved profile details."}
              </p>
            </div>

            <div className="stats">
              <div><strong>{profile.cgpa}</strong><span>CGPA</span></div>
              <div>
                <strong>{profile.graduationYear}</strong>
                <span>Graduation</span>
              </div>
              <div><strong>3+</strong><span>Major projects</span></div>
              <div><strong>2</strong><span>Internships</span></div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section section-soft">
          <div className="container">
            <div className="section-head">
              <span className="section-number">02</span>
              <div>
                <p className="kicker">Toolkit</p>
                <h2>Technologies I <em>work with.</em></h2>
              </div>
            </div>

            <div className="skills-grid">
              {skills.map(({ name, icon: Icon }) => (
                <div className="skill" key={name}>
                  <Icon size={19} />
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section container">
          <div className="section-head">
            <span className="section-number">03</span>
            <div>
              <p className="kicker">Selected work</p>
              <h2>Projects with a <em>purpose.</em></h2>
            </div>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article
                className={`project ${index === 0 ? "featured" : ""}`}
                key={project.title}
              >
                <div className="project-number">0{index + 1}</div>
                <div className="project-category">{project.category}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-list">
                  {project.tech.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
                <div className="project-arrow">
                  <ArrowUpRight size={20} />
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* EXPERIENCE AND EDUCATION */}
        <section id="experience" className="section section-dark">
          <div className="container">
            <div className="section-head light">
              <span className="section-number">04</span>
              <div>
                <p className="kicker">Journey</p>
                <h2>Experience &amp; <em>learning.</em></h2>
              </div>
            </div>

            <div className="timeline">
              {experiences.map((item) => (
                <div className="timeline-item" key={item.company}>
                  <div className="timeline-icon">
                    <BriefcaseBusiness size={18} />
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-meta">
                      <span>{item.period}</span>
                      <span>{item.company}</span>
                    </div>
                    <h3>{item.role}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="education">
              <div className="edu-icon"><GraduationCap size={22} /></div>
              <div>
                <p className="kicker">Education</p>
                <h3>{profile.degree}</h3>
                <p>
                  {profile.college} · Expected {profile.graduationYear} ·
                  CGPA {profile.cgpa}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section id="certifications" className="section container">
          <div className="section-head">
            <span className="section-number">05</span>
            <div>
              <p className="kicker">Credentials</p>
              <h2>Certificates &amp; <em>milestones.</em></h2>
            </div>
          </div>

          <div className="cert-grid">
            {certifications.map((certification, index) => (
              <div className="cert" key={certification}>
                <div className="cert-icon"><Award size={19} /></div>
                <span>0{index + 1}</span>
                <p>{certification}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact-section">
          <div className="container contact-inner">
            <div>
              <p className="kicker">Let's connect</p>
              <h2>
                Have an idea or an opportunity?
                <br />
                <em>Let's build something.</em>
              </h2>
              <p className="contact-copy">
                I'm interested in software development, full-stack and AI/ML
                opportunities.
              </p>
            </div>

            <div className="contact-links">
              <a href={`mailto:${profile.email}`}>
                <Mail size={20} />
                <span><small>Email</small>{profile.email}</span>
                <ArrowUpRight size={18} />
              </a>

              <a
                href="https://linkedin.com/in/harani-vijaykumar-2bbb1a2b7/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={20} />
                <span><small>LinkedIn</small>Harani Vijaykumar</span>
                <ArrowUpRight size={18} />
              </a>

              <a
                href="https://github.com/harini573"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={20} />
                <span><small>GitHub</small>harini573</span>
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer container">
        <div>© 2026 Harani Vijaykumar</div>
        <div className="footer-note">
          <Sparkles size={15} />
          Designed &amp; built with React
        </div>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);