// src/App.js
import React from "react";

/* Smooth scroll helper for navigation */
function scrollToId(id, e) {
  if (e) e.preventDefault();
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* Navbar */
function Navbar() {
  return (
    <header className="header">
      <div className="nav-inner">
        <h1 className="brand">Jack Doe</h1>
        <nav aria-label="Main navigation">
          <a href="#about" onClick={(e) => scrollToId("about", e)}>
            About
          </a>
          <a href="#projects" onClick={(e) => scrollToId("projects", e)}>
            Projects
          </a>
          <a href="#skills" onClick={(e) => scrollToId("skills", e)}>
            Skills
          </a>
          <a href="#resume" onClick={(e) => scrollToId("resume", e)}>
            Resume
          </a>
          <a href="#contact" onClick={(e) => scrollToId("contact", e)}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

/* About section (Jack) */
function About() {
  return (
    <section id="about" className="section about">
      <div className="about-grid">
        <div className="about-text">
          <h2>About Jack</h2>
          <p>
            Hi — I'm <strong>Jack Doe</strong>, a web developer who builds
            clean, responsive, and user-friendly websites. I specialise in
            React, frontend performance, and polish.
          </p>
          <p>
            I enjoy turning ideas into real products and learning new
            technologies every week.
          </p>
        </div>
      </div>
    </section>
  );
}

/* Projects */
function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "Personal portfolio built with React and responsive CSS.",
      link: "#",
    },
    {
      title: "Weather App",
      desc: "A small weather app consuming a public REST API.",
      link: "#",
    },
    {
      title: "E-commerce Mock",
      desc: "Product listing and a cart demo (React + local state).",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <article key={p.title} className="project-card">
            <div className="card-body">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <a href={p.link} target="_blank" rel="noreferrer">
                View
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* Skills */
function Skills() {
  const skills = [
    { name: "React", level: 90 },
    { name: "JavaScript (ES6+)", level: 85 },
    { name: "HTML & CSS", level: 90 },
    { name: "Accessibility", level: 75 },
  ];

  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <div className="skills-list">
        {skills.map((s) => (
          <div key={s.name} className="skill">
            <div className="skill-name">{s.name}</div>
            <div className="skill-bar">
              <div className="skill-fill" style={{ width: `${s.level}%` }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* Resume */
function Resume() {
  return (
    <section id="resume" className="section">
      <h2>Resume</h2>
      <p>
        Download Jack's resume:{" "}
        <a href="/resume-jack-doe.pdf" target="_blank" rel="noreferrer">
          Resume (PDF)
        </a>
      </p>
    </section>
  );
}

/* Contact */
function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    if (!name || !email || !message) {
      alert("Please fill all fields before sending.");
      return;
    }
    alert(`Thanks, ${name}! Jack will get back to you at ${email}.`);
    form.reset();
  }

  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input name="name" type="text" required />
        </label>
        <label>
          Email
          <input name="email" type="email" required />
        </label>
        <label>
          Message
          <textarea name="message" rows="5" required />
        </label>
        <button type="submit" className="btn">
          Send Message
        </button>
      </form>
    </section>
  );
}

/* App — combines everything */
export default function App() {
  return (
    <div className="container">
      <Navbar />
      <main>
        <About />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
      </main>
      <footer className="footer">
        <p>© {new Date().getFullYear()} Jack Doe — Built with ♥</p>
      </footer>
    </div>
  );
}
