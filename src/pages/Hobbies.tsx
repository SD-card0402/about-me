import { Link } from "react-router-dom";
import { Code2, Music, Gamepad2 } from "lucide-react";
import styles from "./Hobbies.module.css";

const items = [
  {
    n: "01",
    slug: "programming",
    en: "Programming",
    ja: "プログラミング",
    text: "こんなサイトがあったらなぁを\n自己満足で作っています",
    Icon: Code2,
  },
  {
    n: "02",
    slug: "music",
    en: "Music",
    ja: "音楽",
    text: "ジャンル問わず音楽が好きです\nハードコアはいいぞ",
    Icon: Music,
  },
  {
    n: "03",
    slug: "gaming",
    en: "Gaming",
    ja: "ゲーム",
    text: "FPSやRPGなど\nいろんなゲームを機種問わず\nプレイしています",
    Icon: Gamepad2,
  },
];

export default function Hobbies() {
  return (
    <main className={`${styles.page} ${styles.container}`}>
      <section className={`${styles.glass} ${styles.content}`}>
        <div className={styles.title}>
          <p>My Hobbies</p>
          <hr />
          <h1>趣味について</h1>
        </div>

        <p className={styles["center-copy"]}>
          色んなことに手を出しています
        </p>

        <div className={styles["hobby-grid"]}>
          {items.map(({ n, slug, en, ja, text, Icon }) => (
            <Link
              key={slug}
              to={`/hobbies/${slug}`}
              className={styles["hobby-link"]}
            >
              <article>
                <div className={styles["card-top"]}>
                  <Icon size={20} />
                  <i>{n}</i>
                </div>

                <h2>{en}</h2>
                <small>{ja}</small>

                <hr />

                <p>{text}</p>

                <span className={styles["detail-link"]}>
                  詳細を見る →
                </span>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}