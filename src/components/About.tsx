import styles from './About.module.css';

const tags = [
  'Collaborative',
  'Structured',
  'Backend-focused',
  'Problem solving',
  'Clean code',
  'Curious',
  'Fast learner',
];

export default function About() {
  return (
    <section className={styles.section} id="about">
      <div className="container">
        <p className="section-label">Who I am</p>
        <h2 className="section-title">About Me</h2>

        <div className={styles.grid}>
          <div className={styles.card}>
            <span className={styles.icon}>◈</span>
            <h3>My way of thinking</h3>
            <p>
              I approach software development in a structured and analytical way. I focus on understanding 
              problems before implementing solutions, and I prioritize clean architecture and maintainable code. <br />
              I care about building systems that are reliable, scalable, and easy to understand for other developers.
            </p>
          </div>

          <div className={styles.card}>
            <span className={styles.icon}>◎</span>
            <h3>My philosophy as a developer</h3>
            <p>
              I work across the full stack, with a strong interest in backend systems and how components 
              interact. I focus on APIs, data flow, and performance. <br />
              I continuously evaluate whether a solution is scalable, secure, and maintainable over time.
            </p>
          </div>
        </div>

        <div className={styles.fullCard}>
          <h3>Beyond the code — who I am as a person</h3>
          <p>
            Outside of tech, I enjoy reading authors like Albert Camus, Dostoevsky, and Hermann Hesse, which influence how I think about discipline, perspective, and personal growth.<br />
            I am also interested in fitness, especially weight training and running, which help me stay focused and consistent.<br />
            I value environments where people challenge each other, learn together, and build meaningful things — not just individually, but as a team.
          </p>
          <div className={styles.tags}>
            {tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
