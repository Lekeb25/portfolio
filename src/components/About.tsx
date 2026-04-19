import styles from './About.module.css';

const tags = [
  'Team player',
  'Fast learner',
  'Backend-minded',
  'Problem solver',
  'Clean code advocate',
  'Curious',
  'Open source enthusiast',
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
              I believe the best software comes from curiosity and collaboration. I approach
              every problem methodically — understanding it deeply before touching the keyboard.
              Architecture first, code second. I care about building things that are clean,
              maintainable, and actually useful.
            </p>
          </div>

          <div className={styles.card}>
            <span className={styles.icon}>◎</span>
            <h3>My philosophy as a developer</h3>
            <p>
              I enjoy working across the full stack, but I have a special interest in backend
              systems and how things connect under the hood. I follow clean code principles,
              think in APIs, and I&apos;m always asking: does this solution scale? Is it secure?
              Will someone else understand it in six months?
            </p>
          </div>
        </div>

        <div className={styles.fullCard}>
          <h3>Beyond the code — who I am as a person</h3>
          <p>
            Outside of tech, I read a lot — Camus, Dostoevsky, Hermann Hesse. I&apos;m also into
            fitness: weight training, running, anything physical. And I genuinely believe
            adults underestimate the value of play — I make time for it. I&apos;m someone who
            thrives around people: collaborative projects where we push each other, learn
            together, and build something worth showing.
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
