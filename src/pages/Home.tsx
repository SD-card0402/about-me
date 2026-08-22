import {Sparkles} from "lucide-react";
import styles from "./Home.module.css";

export default function Home(){
    return <main className={`${styles.page} ${styles.home} ${styles.container}`}>
        <section className={`${styles.glass} ${styles.hero}`}>
            <Sparkles size={19}/>
            <p className={styles.overline}>
                WELCOME TO MY PORTFOLIO
            </p>
            <h1>My Contacts</h1>
            <hr/>
            <p className={styles.intro}>私の自己紹介サイトです</p>
            <small className={styles.major}>
                White Hacking
            </small>
        </section>
    </main>

}