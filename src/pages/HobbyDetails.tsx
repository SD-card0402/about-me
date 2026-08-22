import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import styles from "./HobbyDetails.module.css";

const hobbies = {
    programming: {
        title: "Programming",
        subtitle: "プログラミング",
        image: "/images/programming.jpg",
        reason:"自分のアイデアを形にできるところに魅力を感じています。エラーを解決しながら完成させる達成感も好きです。",
        goal:"フロントエンドだけでなくバックエンドやクラウド技術も学び、フルスタック発ができるようになりたいです。",
    },
    
    music: {
        title: "Music",
        image: "/images/music.jpg",
        subtitle: "音楽",
        reason:"新しい音楽に出会うことで気分転換ができ、制作や勉強へのモチベーション向上にもつながっています。",
        goal:"今まで聴いたことのないジャンルにも挑戦し、自分の音楽の幅をさらに広げたいです。",
    },
    
    gaming: {
        title: "Gaming",
        image: "/images/gaming.jpg",
        subtitle: "ゲーム",
        reason:"戦略を考えたり、プレイヤー同士で協力したりする楽しさがあります。またUIやゲーム設計にも興味があります。",
        goal:"ゲーム開発にも挑戦し、自分でゲームを制作できるようになりたいです。",
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
        </section>
        
        <section className={styles.detailCard}>
            <div className={styles.reasonLayout}>
                <div className={styles.imageWrapper}>
                    <img
                    src={hobby.image}
                    alt={hobby.title}
                    className={styles.reasonImage}
                    />
                </div>
                <div className={styles.reasonContent}>
                    <h2>好きな理由</h2>
                    <p>{hobby.reason}</p>
                </div>
            </div>
        </section>
        
        <section className={styles.detailCard}>
            <h2>これから挑戦したいこと</h2>
            <p>{hobby.goal}</p>
        </section>
    </main>
);
}