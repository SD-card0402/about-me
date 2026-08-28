import { Link } from "react-router-dom";
import { Code2, Music, Gamepad2 } from "lucide-react";
import styles from "./Hobbies.module.css";

const items = [
  {
    n: "01",
    slug: "programming",
    en: "Programming",
    ja: "プログラミング",
    text: "Web開発やセキュリティについて学んでいます",
    image: "/assets/pokemon.png",
    Icon: Code2,
  },
  {
    n: "02",
    slug: "music",
    en: "Music",
    ja: "音楽",
    text: "様々なジャンルの音楽を聴いています",
    image: "/assets/topazo.jpg",
    Icon: Music,
  },
  {
    n: "03",
    slug: "gaming",
    en: "Gaming",
    ja: "ゲーム",
    text: "FPSやRPGなどをプレイしています",
    image: "/assets/daigo.jpeg",
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

        <div className={styles.hobbyGrid}>
          {items.map(({ slug, en, ja, text, image, Icon }) => (
            <Link
              key={slug}
              to={`/hobbies/${slug}`}
              className={styles.hobbyLink}
            >
              <article>
                <img src={image} alt={`${en}のイメージ`} className={styles.hobbyImage} />
                <Icon size={28} />
                <h2>{en}</h2>
                <small>{ja}</small>
                <p>{text}</p>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}