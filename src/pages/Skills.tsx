import styles from "./Skills.module.css";

const skills = [
    "HTML / CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Python"
];

const projects = [
    {
        title: "About me",
        description:
        "React と TypeScript を使用して制作した自己紹介サイト。",
    },
    {
        title: "DQ quiz",
        description:
        "選択式のクイズアプリ。React と TypeScript を使用して制作。",
    }
];

export default function Skills() {
    return (
    <main className={`${styles.page} ${styles.container}`}>
        <section className={`${styles.glass} ${styles.content}`}>
            
            <div className={styles.title}>
                <p>Skills</p>
                <hr />
                <h1>スキルと成果物</h1>
            </div>
            <p className={styles["center-copy"]}>ホワイトハッカーを目指して学習している技術や、制作した成果物を紹介しています。</p>

        <section className={styles.section}>
            <h2>Skills</h2>
            
            <div className={styles.skillGrid}>
                {skills.map((skill) => (
                    <span key={skill} className={styles.skillCard}>
                        {skill}
                    </span>
                ))}
            </div>
        </section>

        <section className={styles.section}>
            <h2>Projects</h2>
            
            <div className={styles.projectGrid}>
                {projects.map((project) => (
                    <article
                    key={project.title}
                    className={styles.projectCard}
                    >
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </article>
                ))}
            </div>
        </section>
        
    </section>
    </main>
    );
}