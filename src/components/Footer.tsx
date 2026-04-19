
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.inner}>
          <span className={styles.left}>
            © 2026 <span className={styles.accent}>Kebodel Ngoumbe Kenne</span>
          </span>
          <span className={styles.right}>
            Hochschule Worms · Software Engineering
          </span>
        </div>
      </div>
    </footer>
  );
}