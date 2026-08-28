import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import styles from "./HobbyDetails.module.css";

const hobbies = {
  programming: {
    title: "Programming",
    subtitle: "プログラミング",

    categories: [
      {
        name: "Frontend",

        cards: [
          {
            title: "好きな理由",
            image: "/images/frontend-reason.jpg",
            content:
              "ユーザーが直接触れる画面を作ることが好きです。",
          },

          {
            title: "学んだこと",
            image: "/images/frontend-learning.jpg",
            content:
              "React、TypeScript、UI設計について学んでいます。",
          },

          {
            title: "制作物",
            image: "/images/frontend-project.jpg",
            content:
              "ポートフォリオサイトや個人開発アプリを制作しています。",
          },

          {
            title: "今後の目標",
            image: "/images/frontend-goal.jpg",
            content:
              "Next.jsやバックエンドも学習してフルスタック開発を目指しています。",
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
        name: "Hardcore",

        cards: [
          {
            title: "好きな理由",
            image: "/images/hardcore-reason.jpg",
            content:
              "迫力のあるサウンドで集中力が高まります。",
          },

          {
            title: "お気に入りアーティスト",
            image: "/images/hardcore-artist.jpg",
            content:
              "国内外のHardcoreアーティストをよく聴いています。",
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
            title: "好きな理由",
            image: "/images/fps-reason.jpg",
            content:
              "チームで戦略を考えながらプレイできるからです。",
          },

          {
            title: "プレイタイトル",
            image: "/images/fps-games.jpg",
            content:
              "様々なFPSタイトルをプレイしています。",
          },
        ],
      },

      {
        name: "RPG",

        cards: [
          {
            title: "好きな理由",
            image: "/images/rpg-reason.jpg",
            content:
              "ストーリーや世界観を楽しめるからです。",
          },

          {
            title: "お気に入り作品",
            image: "/images/rpg-favorite.jpg",
            content:
              "オープンワールドRPGをよくプレイしています。",
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
          <section
            key={category.name}
            className={styles.categorySection}
          >
            <h2 className={styles.categoryTitle}>
              {category.name}
            </h2>

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
          </section>
        ))}
      </section>
    </main>
  );
}