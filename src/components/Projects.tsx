import Image from 'next/image';
import styles from './Projects.module.css';

interface Project {
  type: string;
  title: string;
  description: string;
  impact: string;
  techs: string[];
  repo: string;
  demo: string;
  image: string;
  isPrivate?: boolean;
}

const projects: Project[] = [
  {
    type: 'DevOps · Social Media',
    title: 'Mastodon — Hochschule Worms',
    description:
      'Deployment and operation of the official Mastodon instance of Hochschule Worms — a federated social network hosted on university servers. Designed and managed the platform end-to-end, including infrastructure setup, moderation workflows, and system monitoring.',
    impact:
      'Provided the university with full control over data, privacy, and community management. Built and operated by a Scrum team, covering CI/CD pipelines, incident handling, and live moderation.\n\nAwarded Best Team Project (2026). Team of 7 · Duration: 8 weeks.',
    techs: ['Docker', 'GitLab CI/CD', 'Linux', 'PostgreSQL'],
    repo: 'https://github.com/Lekeb25',
    demo: 'https://m.it.hs-worms.de/public/local',
    image: '/projects/mastodon.png',
    isPrivate: true,
  },
  {
    type: 'Fullstack · E-Commerce',
    title: 'Skincare Online Shop',
    description:
      'Fullstack e-commerce platform with a customer-facing shop and an admin dashboard for managing users, products, and orders. Built with a clear separation between frontend and backend, focusing on maintainability and scalability.',
    impact:
      'Implements a structured fullstack architecture with authentication, role-based access, and database integration. Demonstrates real-world application design, API development, and data management across multiple systems.\n\nTeam of 4 · Duration: SOSE 2025.',
    techs: ['Angular', 'Node.js', 'TypeScript', 'MongoDB', 'PostgreSQL', 'Express'],
    repo: 'https://github.com/Lekeb25/fullstack_sose25',
    demo: 'https://davinshop.netlify.app/',
    image: '/projects/skincare.png',
  },
  {
    type: 'Frontend · Education',
    title: 'MINT Learning Platform for Kids',
    description:
      'Interactive learning platform for children aged 5–12, designed to introduce STEM concepts through playful interaction. Focused on accessibility, intuitive design, and engaging user experience.',
    impact:
      'Demonstrates the ability to design user-friendly interfaces for specific audiences, with a focus on clarity, responsiveness, and engagement in educational contexts.',
    techs: ['HTML', 'CSS', 'JavaScript'],
    repo: 'https://github.com/Lekeb25/mint',
    demo: 'https://mintkenngas.onrender.com',
    image: '/projects/mint.png',
  },
  {
    type: 'Frontend · API Integration',
    title: 'Pokémon Search Web App',
    description:
      'Lightweight web application that allows users to search and explore Pokémon data in real time. Built with a focus on simplicity and responsiveness.',
    impact:
      'Demonstrates API integration, dynamic data fetching, and responsive UI updates. Shows the ability to work with external data sources and build interactive interfaces.',
    techs: ['HTML', 'CSS', 'JavaScript', 'REST API'],
    repo: 'https://github.com/Lekeb25/pokemon',
    demo: 'https://pokemon-9s9i.onrender.com',
    image: '/projects/pokemon.png',
  },
];

export default function Projects() {
  return (
    <section className={styles.section} id="projects">
      <div className="container">
        <p className="section-label">What I&apos;ve built</p>
        <h2 className="section-title">Projects</h2>

        <div className={styles.list}>
          {projects.map((project) => (
            <div key={project.title} className={styles.card}>
              <div className={styles.body}>
                <div>
                  <span className={styles.typeTag}>{project.type}</span>
                  <h3 className={styles.title}>{project.title}</h3>
                  <p className={styles.description}>{project.description}</p>
                  <p className={styles.impact}>{project.impact}</p>
                  <div className={styles.techs}>
                    {project.techs.map((tech) => (
                      <span key={tech} className={styles.techPill}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className={styles.buttons}>
                  {project.isPrivate ? (
                    <span className={styles.btnPrivate}>
                      <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
                        <path d="M18 8h-1V6A5 5 0 0 0 7 6v2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2zm-6 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm3.1-9H8.9V6a3.1 3.1 0 0 1 6.2 0v2z"/>
                      </svg>
                      Private Repository
                    </span>
                  ) : (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.btnRepo}
                    >
                      <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
                        <path d="M12 0C5.4 0 0 5.4 0 12c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 016 0C17 4.7 18 5 18 5c.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6C20.6 21.8 24 17.3 24 12 24 5.4 18.6 0 12 0z" />
                      </svg>
                      Repository
                    </a>
                  )}
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.btnDemo}
                  >
                    Live Demo →
                  </a>
                </div>
              </div>

              <div className={styles.thumbnail}>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={450}
                  height={500}
                  className={styles.photo}
                  priority
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
