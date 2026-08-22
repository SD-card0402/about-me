import styles from "./Contact.module.css";

const skills = [
    "HTML / CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Python",
    "Linux",
    "Cyber Security",
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
    },
    {
        title: "Security Learning",
        description:
        "CTFや脆弱性診断を通じたセキュリティ学習。"
    },
];

export default function Portfolio() {
    return (
    <main className={`${styles.page} ${styles.container}`}>
        <section className={`${styles.glass} ${styles.content}`}>
            
            <div className={styles.title}>
                <p>Portfolio</p>
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

        <section className={styles.section}>
            <h2>Learning</h2>
            
            <p className={styles.center}>
            React、TypeScript、ネットワーク、
            サイバーセキュリティ、クラウド技術などを
            中心に学習しています。
            </p>
        </section>

        <section className={styles.section}>
            <h2>Future Goals</h2>
            
            <p className={styles.center}>
            安全で使いやすいWebサービスを開発できる
            エンジニア兼ホワイトハッカーを目指しています。
            </p>
        </section>
        
    </section>
    </main>
    );
}