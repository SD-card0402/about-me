import styles from "./About.module.css";

export default function About(){
    return <main className={`${styles.page} ${styles.container}`}>
    <section className={`${styles.glass} ${styles.content}`}>
    <div className={styles.title}>
        <p>About Me</p>
        <hr/><h1>自己紹介</h1>
    </div>
    <div className={styles["about-grid"]}>
        <div className={styles.identity}>
            <span>
                <img src="/assets/404.jpeg" className={styles["identity-img"]} alt="アイコン"/>
            </span>
            <h2>Nakazawa Megumi</h2>
            <small>STUDENT</small>
        </div>
        <div>
            <h2 className={styles.statement}>
                中澤めぐみ
            </h2>
            <p className={styles.copy}>
                スーパーAI＆テクノロジー科のホワイトハッカー専攻です。<br />
                とにかくお金を稼ぎたいなと考えています。<br />
                ちなみにちょっとした暇つぶしでクイズ用のサイトを作成しています。
            </p>
            <div className={styles.values}>
                <article>
                    <h3>好きなこと</h3>
                    <p className={styles.likes}>ゲーム・8時間睡眠</p>
                </article>
                <article>
                    <h3>嫌いなこと</h3>
                    <p className={styles.likes}>働くこと</p>
                </article>
            </div>
        </div>
    </div>
    </section>
    </main>
}