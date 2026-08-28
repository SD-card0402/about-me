import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import styles from "./Home.module.css";

const slides = [
    { src: "./assets/1.jpg", alt: "ポートフォリオのプロフィール写真" },
    { src: "./assets/2.jpg", alt: "ポートフォリオのプロフィール写真" },
    { src: "./assets/3.png", alt: "ポートフォリオのプロフィール写真" },
];

export default function Home(){
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = window.setInterval(() => {
            setCurrentSlide((slide) => (slide + 1) % slides.length);
        }, 5000);

        return () => window.clearInterval(timer);
    }, []);

    const showSlide = (direction: number) => {
        setCurrentSlide((slide) => (slide + direction + slides.length) % slides.length);
    };

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
        <section className={styles.slider} aria-label="Portfolio highlights">
            <button type="button" className={styles.sliderButton} onClick={() => showSlide(-1)} aria-label="前の画像">
                <ChevronLeft size={18} />
            </button>
            <img src={slides[currentSlide].src} alt={slides[currentSlide].alt} className={styles.slideImage} />
            <button type="button" className={styles.sliderButton} onClick={() => showSlide(1)} aria-label="次の画像">
                <ChevronRight size={18} />
            </button>
            <div className={styles.sliderDots}>
                {slides.map((slide, index) => (
                    <button
                        key={slide.src}
                        type="button"
                        className={`${styles.sliderDot} ${index === currentSlide ? styles.activeDot : ""}`}
                        onClick={() => setCurrentSlide(index)}
                        aria-label={`${index + 1}枚目の画像を表示`}
                        aria-current={index === currentSlide ? "true" : undefined}
                    />
                ))}
            </div>
        </section>
    </main>
}