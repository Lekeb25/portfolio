'use client';

import styles from './Navbar.module.css';

const links = ['Home', 'About', 'Projects', 'Skills', 'Resume', 'Contact'];

export default function Navbar() {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <div className={styles.logoBox}>KN</div>
          <span className={styles.logoName}>Kebodel N. Kenne</span>
        </div>

        <ul className={styles.links}>
          {links.map((link) => (
            <li key={link}>
              <button
                className={styles.link}
                onClick={() => handleScroll(link)}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        <a
          href="/lebenslauf-kebodel-ngoumbe.pdf"
          download="lebenslauf-Kebodel-Ngoumbe.pdf"
          className={styles.cta}
        >
          Download CV
        </a>
      </nav>
    </header>
  );
}
