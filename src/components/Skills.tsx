import Image from 'next/image';
import styles from './Skills.module.css';

interface Skill {
  label: string;
  iconUrl: string;
  iconBg: string;
  percent: number;
  sub: string;
}

const skills: Skill[] = [
  {
    label: 'JavaScript',
    iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/javascript.svg',
    iconBg: '#f7df1e',
    percent: 85,
    sub: 'Frontend · Backend · TypeScript',
  },
  {
    label: 'TypeScript',
    iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/typescript.svg',
    iconBg: '#3178c6',
    percent: 80,
    sub: 'Typed JS · Node.js · Angular',
  },
  {
    label: 'Angular',
    iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/angular.svg',
    iconBg: '#dd0031',
    percent: 80,
    sub: 'SPA · Components · RxJS',
  },
  {
    label: 'Node.js',
    iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nodedotjs.svg',
    iconBg: '#339933',
    percent: 82,
    sub: 'REST API · Express · Backend',
  },
  {
    label: 'Python',
    iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/python.svg',
    iconBg: '#3776ab',
    percent: 75,
    sub: 'ML · Keras · Matplotlib',
  },
  {
    label: 'PostgreSQL',
    iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/postgresql.svg',
    iconBg: '#336791',
    percent: 78,
    sub: 'Relational DB · SQL · Sequelize',
  },
  {
    label: 'MongoDB',
    iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mongodb.svg',
    iconBg: '#47a248',
    percent: 78,
    sub: 'NoSQL · Mongoose · Atlas',
  },
  {
    label: 'Docker',
    iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/docker.svg',
    iconBg: '#2496ed',
    percent: 75,
    sub: 'Containers · CI/CD · Deploy',
  },
  {
    label: 'Git / GitHub',
    iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg',
    iconBg: '#090909',
    percent: 82,
    sub: 'Version control · GitLab CI/CD',
  },
  {
    label: 'Linux',
    iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linux.svg',
    iconBg: '#fcc624',
    percent: 72,
    sub: 'Ubuntu · Debian · CLI',
  },
];

export default function Skills() {
  return (
    <section className={styles.section} id="skills">
      <div className="container">
        <p className="section-label">My toolbox</p>
        <h2 className="section-title">Skills</h2>

        <div className={styles.grid}>
          {skills.map((skill) => (
            <div key={skill.label} className={styles.card}>
              <div className={styles.logoSide}>
              <div className={styles.logoBox} style={{ backgroundColor: skill.iconBg }} >
              <Image
                src={skill.iconUrl}
                alt={skill.label}
                width={35}
                height={35}
                style={{ filter: skill.iconBg === '#f7df1e' || skill.iconBg === '#fcc624' ? 'none' : 'brightness(0) invert(1)' }}
              />
              </div>
            </div>
              <div className={styles.infoSide}>
                <div className={styles.head}>
                  <span className={styles.name}>{skill.label}</span>
                  <span className={styles.percent}>{skill.percent}%</span>
                </div>
                <div className={styles.bar}>
                  <div
                    className={styles.fill}
                    style={{ width: `${skill.percent}%` }}
                  />
                </div>
                <p className={styles.sub}>{skill.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
