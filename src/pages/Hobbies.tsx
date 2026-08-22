import {Code2,Music,Gamepad2} from "lucide-react";
import styles from "./Hobbies.module.css";

const items=[
        {n:"01",en:"Programming",ja:"プログラミング",text:"こんなサイトがあったらなぁを\n自己満足で作っています",Icon:Code2},
        {n:"02",en:"Music",ja:"音楽",text:"ジャンル問わず音楽が好きです\nハードコアはいいぞ",Icon:Music},
        {n:"03",en:"Gaming",ja:"ゲーム",text:"FPSやRPGなど\nいろんなゲームを機種問わず\nプレイしています",Icon:Gamepad2}
    ];

export default function Hobbies(){
    return <main className={`${styles.page} ${styles.container}`}>
        <section className={`${styles.glass} ${styles.content}`}>
            <div className={styles.title}>
                <p>My Hobby's</p>
                <hr/><h1>趣味について</h1>
            </div>
            <p className={styles["center-copy"]}>
                色んなことに手を出しています
            </p>
            <div className={styles["hobby-grid"]}>
                {items.map(
                    ({n,en,ja,text,Icon})=>
                    <article key={en}>
                        <div className={styles["card-top"]}>
                            <Icon size={20}/>
                            <i>{n}</i>
                        </div>
                        <h2>{en}</h2>
                        <small>{ja}</small>
                        <hr/>
                        <p>{text}</p>
                    </article>
                )}
            </div>
        </section>
    </main>
}