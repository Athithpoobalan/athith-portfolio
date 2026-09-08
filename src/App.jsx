import "./App.css";
import profilePhoto from "./assets/Athith-P.png";

function App() {
  const projects = [
    {
      title: "ATHI CAKES",
      description:
        "A modern cake ordering application designed to provide users with a smooth and attractive cake browsing experience.",
      tech: "HTML • CSS • JavaScript",
      link: "https://lnkd.in/dertGbvQ",
    },
    {
      title: "Student Management System",
      description:
        "A student management application for organizing and managing student information efficiently.",
      tech: "Java • MySQL",
      link: "File not found",
    },
    {
      title: "Institute Web Application",
      description:
        "A modern institute web application designed to present information and provide an attractive user experience.",
      tech: "HTML • CSS • JavaScript",
      link: "Its ongoing",
    },
    {
      title: "Travel Application",
      description:
        "A travel web application created as part of the TAP Academy / Design Esthetics assignment.",
      tech: "HTML • CSS • JavaScript",
      link: "https://athith-destiny.onrender.com/explore?scope=india",
    },
  ];

  const skills = [
    "Java",
    "Python",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Django",
    "MySQL",
    "Git",
    "GitHub",
    "UI/UX",
  ];

  return (
    <div className="portfolio">
      {/* Background Effects */}
      <div className="background-glow glow-one"></div>
      <div className="background-glow glow-two"></div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">P.Athith</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>
        {/* ================= HERO ================= */}
        <section id="home" className="hero">
          <div className="hero-content">
            <p className="hello">HELLO, I'M</p>

            <h1>
              P. <span>ATHITH</span>
            </h1>

            <h2>Full Stack Developer</h2>

            <p className="hero-description">
              I build modern, responsive and practical web applications with a
              passion for problem solving and technology.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-btn">
                View My Work
              </a>

              <a href="#contact" className="secondary-btn">
                Contact Me
              </a>
            </div>
          </div>

          {/* Profile */}
          <div className="profile-container">
            <div className="profile-ring">
              <img src={profilePhoto} alt="P. Athith" />
            </div>

            <div className="floating-card card-one">Java</div>
            <div className="floating-card card-two">Python</div>
            <div className="floating-card card-three">React</div>
          </div>
        </section>

        {/* ================= ABOUT ================= */}
        <section id="about" className="section">
          <p className="section-label">ABOUT ME</p>

          <h2 className="section-title">
            Turning <span>ideas</span> into applications.
          </h2>

          <div className="about-grid">
            <div className="about-text">
              <p>
                I'm P. Athith, a Computer Science and Engineering graduate
                passionate about Full Stack Web Development and software
                development.
              </p>

              <p>
                I enjoy building practical applications and solving programming
                problems. My development journey has given me experience with
                Java, Python, HTML, CSS, JavaScript, React, Django and MySQL.
              </p>

              <p>
                I particularly enjoy backend development because I like
                understanding how systems work behind the scenes and solving
                problems through logical thinking.
              </p>

              <p>
                I'm continuously learning new technologies and looking for
                opportunities where I can build real-world products, contribute
                to a team and grow as a Full Stack Developer.
              </p>
            </div>

            <div className="about-card">
              <div>
                <strong>B.E.</strong>
                <span>Computer Science & Engineering</span>
              </div>

              <div>
                <strong>Full Stack</strong>
                <span>Web Development</span>
              </div>

              <div>
                <strong>Focus</strong>
                <span>Java • Python • Backend</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SKILLS ================= */}
        <section id="skills" className="section">
          <p className="section-label">MY SKILLS</p>

          <h2 className="section-title">
            Technologies I <span>work with</span>
          </h2>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill}>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ================= PROJECTS ================= */}
        <section id="projects" className="section">
          <p className="section-label">MY WORK</p>

          <h2 className="section-title">
            Featured <span>Projects</span>
          </h2>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                {/* Project Number */}
                <div className="project-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Project Title */}
                <h3>{project.title}</h3>

                {/* Project Description */}
                <p>{project.description}</p>

                {/* Technologies */}
                <div className="project-tech">{project.tech}</div>

                {/* ONLY THIS PART IS CLICKABLE */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  View Project <span>↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* ================= JOURNEY ================= */}
        <section className="section journey">
          <p className="section-label">MY JOURNEY</p>

          <h2 className="section-title">
            Education & <span>Experience</span>
          </h2>

          <div className="timeline">
            {/* Education */}
            <div className="timeline-item">
              <div className="timeline-dot"></div>

              <div>
                <span className="timeline-date">EDUCATION</span>

                <h3>B.E Computer Science & Engineering</h3>

                <p>M.A.M College of Engineering, Trichy</p>
              </div>
            </div>

            {/* Training */}
            <div className="timeline-item">
              <div className="timeline-dot"></div>

              <div>
                <span className="timeline-date">TRAINING</span>

                <h3>Full Stack Python</h3>

                <p>
                  Training and practical development experience with Python
                  based web technologies.
                </p>
              </div>
            </div>

            {/* Internship */}
            <div className="timeline-item">
              <div className="timeline-dot"></div>

              <div>
                <span className="timeline-date">INTERNSHIP</span>

                <h3>TAP Academy</h3>

                <p>
                  Internship and development experience with practical
                  project-based learning.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section id="contact" className="contact-section">
          <p className="section-label">CONTACT</p>

          <h2>
            Let's build something <span>great.</span>
          </h2>

          <p>
            I'm open to opportunities, collaborations and interesting
            development projects.
          </p>

          <div className="contact-buttons">
            <a href="mailto:your-email@gmail.com" className="primary-btn">
              Email Me
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="secondary-btn"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="secondary-btn"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer>
        <p>© 2026 P. Athith. Built with React.</p>
      </footer>
    </div>
  );
}

export default App;
