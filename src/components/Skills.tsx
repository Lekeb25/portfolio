import Image from 'next/image';
import styles from './Skills.module.css';

interface Skill {
  label: string;
  iconUrl: string;
  iconBg: string;
  percent: number;
  sub: string;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: [
      {
        label: 'JavaScript',
        iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/javascript.svg',
        iconBg: '#f7df1e',
        percent: 85,
        sub: 'ES6+ · DOM · Web APIs',
      },
      {
        label: 'TypeScript',
        iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/typescript.svg',
        iconBg: '#3178c6',
        percent: 80,
        sub: 'Typed JS · Interfaces · Generics',
      },
      {
        label: 'Angular',
        iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/angular.svg',
        iconBg: '#dd0031',
        percent: 80,
        sub: 'SPA · Components · RxJS',
      },
      {
        label: 'HTML / CSS / Sass',
        iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/html5.svg',
        iconBg: '#e34f26',
        percent: 88,
        sub: 'Semantic HTML · Responsive · Animations',
      },
    ],
  },
  {
    category: 'Backend',
    skills: [
      {
        label: 'Node.js',
        iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nodedotjs.svg',
        iconBg: '#339933',
        percent: 82,
        sub: 'REST API · Express · Backend',
      },
      {
        label: 'Express.js',
        iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/express.svg',
        iconBg: '#090909',
        percent: 80,
        sub: 'Routing · Middleware · REST',
      },
      {
        label: 'Python',
        iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/python.svg',
        iconBg: '#3776ab',
        percent: 75,
        sub: 'ML · Keras · Matplotlib',
      },
    ],
  },
  {
    category: 'Databases',
    skills: [
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
        label: 'MySQL',
        iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mysql.svg',
        iconBg: '#4479a1',
        percent: 70,
        sub: 'Relational DB · Queries',
      },
    ],
  },
  {
    category: 'DevOps & Tools',
    skills: [
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
      {
        label: 'Figma',
        iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/figma.svg',
        iconBg: '#f24e1e',
        percent: 65,
        sub: 'UI Design · Prototyping',
      },
    ],
  },
  {
    category: 'Currently Learning',
    skills: [
      {
        label: 'Java',
        iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/coffeescript.svg',
        iconBg: '#44444b',
        percent: 35,
        sub: 'OOP · Collections · Maven',
      },
      {
        label: 'Spring Boot',
        iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/springboot.svg',
        iconBg: '#6db33f',
        percent: 25,
        sub: 'REST API · JPA · Backend',
      },
    ],
  },
];

const lightBgs = ['#f7df1e', '#fcc624'];

export default function Skills() {
  return (
    <section className={styles.section} id="skills">
      <div className="container">
        <p className="section-label">My toolbox</p>
        <h2 className="section-title">Skills</h2>

        <div className={styles.categories}>
          {skillCategories.map((cat) => (
            <div key={cat.category} className={styles.categoryBlock}>
              <div className={styles.categoryHeader}>
                <span className={styles.categoryTitle}>{cat.category}</span>
                <div className={styles.categoryLine} />
              </div>
              <div className={styles.grid}>
                {cat.skills.map((skill) => (
                  <div key={skill.label} className={styles.card}>
                    <div className={styles.logoSide}>
                      <div
                        className={styles.logoBox}
                        style={{ backgroundColor: skill.iconBg }}
                      >
                        <Image
                          src={skill.iconUrl}
                          alt={skill.label}
                          width={28}
                          height={28}
                          style={{
                            filter: lightBgs.includes(skill.iconBg)
                              ? 'none'
                              : 'brightness(0) invert(1)',
                          }}
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
          ))}
        </div>
      </div>
    </section>
  );
}