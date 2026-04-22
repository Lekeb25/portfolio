import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.section} id="home">
      <div className={`container ${styles.containerHero}`}>
        <div className={styles.text}>
          <p className={styles.welcome}>Welcome to my world</p>
          <h1 className={styles.heading}>
            Hi, I&apos;m <span className={styles.accent}>Kebodel Ngoumbe Kenne</span>
            <br />a Software Engineering
            <br />&amp; CS Student.
          </h1>
          <p className={styles.bio}>
            Computer Science student in my 5th semester at Hochschule Worms, specializing in 
            Software Engineering & Development. I build fullstack applications with Angular, 
            Node.js and TypeScript, with a focus on backend systems, REST APIs, and clean architecture.
          </p>
          <p className={styles.bio}>
            Currently looking for a Praktikum · Based in Germany
          </p>
          <div className={styles.socials}>
            <a
              href="https://github.com/Lekeb25"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 016 0C17 4.7 18 5 18 5c.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6C20.6 21.8 24 17.3 24 12 24 5.4 18.6 0 12 0z" />
              </svg>
            </a>
            < a href="mailto:Kebodelkenne25@gmail.com"
              className={styles.socialIcon}
              aria-label="Email"
            >
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                <path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </a>
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <Image
            src="/hero.png"
            alt="kebodel ngoumbe kenne"
            width={450}
            height={500}
            className={styles.photo}
            priority
          />
        </div>
      </div>
    </section>
  );
}
