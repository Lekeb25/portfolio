import styles from './Education.module.css';

interface EducationItem {
  title: string;
  school: string;
  date: string;
  description: string;
}

const items: EducationItem[] = [
  {
    title: 'B.Sc. Applied Computer Science — Software Engineering & Development',
    school: 'Hochschule Worms · Germany',
    date: '03/2024 – Present',
    description:
      'Currently in my 5th semester. Relevant focus: Software Engineering, Software Architecture, Web Development, Databases, Fullstack Applications, and Advanced Programming Concepts.',
  },
  {
    title: 'German Language Program (A1–C1, TestDaF Certified)',
    school: 'Sprachlernzentrum SLZ-DKKV, Douala, Cameroon',
    date: '08/2021 – 07/2023',
    description:
      'Completed full German language program from A1 to C1 level. Obtained Goethe Zertifikat B1 (06/2022), B2 (11/2022), and TestDaF (07/2023).',
  },
  {
    title: 'High School Diploma (Science Track)',
    school: 'Collège Évangélique New-Bell, Douala, Cameroon',
    date: '09/2020 – 08/2021',
    description:
      'Secondary school diploma with focus on sciences and mathematics.',
  },
];

export default function Education() {
  return (
    <section className={styles.section} id="resume">
      <div className="container">
        <p className="section-label">My path</p>
        <h2 className="section-title">Education</h2>

        <div className={styles.list}>
          {items.map((item) => (
            <div key={item.title} className={styles.item}>
              <div className={styles.head}>
                <h3 className={styles.title}>{item.title}</h3>
                <span className={styles.date}>{item.date}</span>
              </div>
              <p className={styles.school}>{item.school}</p>
              <p className={styles.description}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
