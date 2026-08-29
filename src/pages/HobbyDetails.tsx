import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import styles from "./HobbyDetails.module.css";

const hobbies = {
  programming: {
    title: "Programming",
    subtitle: "プログラミング",

    categories: [
      {

        cards: [
          {
            title: "成果物①",
            content:
              "Pythonを用いてポケモンのクイズを作りました",
            image: "..//assets//pokemon.png"
          },

          {
            title: "成果物②",
            image: "..//assets//slime.png",
            content:
              "ドラクエのクイズゲームをサイトにて作成中です",
          },
        ],
      },
    ],
  },

  music: {
    title: "Music",
    subtitle: "音楽",

    categories: [
      {
        cards: [
          {
            title: "t+pazorite",
            image: "..//assets//4.jpg",
            content:
              "ハードコアはいいぞ",
          },

          {
            title: "米津玄師",
            image: "../assets/10.jpg",
            content:
              "死神がいっっちばん好きです",
          },
        ],
      },
    ],
  },

  gaming: {
    title: "Gaming",
    subtitle: "ゲーム",

    categories: [
      {
        name: "FPS",

        cards: [
          {
            title: "第五人格",
            image: "../assets/11.jpg",
            content:
              "最近はサバイバーしかやっていません",
          },

          {
            title: "Minecraft",
            image: "../assets/12.jpg",
            content:
              "最近は離れつつあります。友達とやるのが一番楽しいですね",
          },
        ],
      },
    ],
  },
};

export default function HobbyDetail() {
  const { slug } = useParams();

  const hobby =
    hobbies[slug as keyof typeof hobbies];

  if (!hobby) {
    return <h1>Not Found</h1>;
  }

  return (
    <main className={`${styles.page} ${styles.container}`}>
      <section className={`${styles.glass} ${styles.content}`}>
        <Link
          to="/hobbies"
          className={styles.backButton}
        >
          <ArrowLeft size={16} />
          趣味一覧へ戻る
        </Link>

        <div className={styles.title}>
          <p>{hobby.title}</p>
          <hr />
          <h1>{hobby.subtitle}</h1>
        </div>

        {hobby.categories.map((category) => (

            <div className={styles.cardGrid}>
              {category.cards.map((card) => (
                <section
                  key={card.title}
                  className={styles.detailCard}
                >
                  <div className={styles.cardLayout}>
                    <img
                      src={card.image}
                      alt={card.title}
                      className={styles.cardImage}
                    />
                    <div>
                      <h3>{card.title}</h3>
                      <p>{card.content}</p>
                    </div>
                  </div>
                </section>
              ))}
            </div>
        ))}
      </section>
    </main>
  );
}