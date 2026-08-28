import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import { ArrowUpRight, House, UserRound, Heart, Mail } from "lucide-react";
import Home from "./pages/Home";
import About from "./pages/About";
import Hobbies from "./pages/Hobbies";
import Contact from "./pages/Contact";
import HobbyDetails from "./pages/HobbyDetails";
import Skills from "./pages/Skills";
import styles from "./App.module.css";

const pages = [
  { to: "/", en: "Top", ja: "トップ", Icon: House },
  { to: "/about", en: "About", ja: "自己紹介", Icon: UserRound },
  { to: "/hobbies", en: "Hobby's", ja: "趣味", Icon: Heart },
  { to: "/skills", en: "Skills", ja: "スキル", Icon: UserRound },
  { to: "/contact", en: "Contact", ja: "お問い合わせ", Icon: Mail },
];

function BottomNavigation() {
  const { pathname } = useLocation();
  const currentPath = pathname === "/" ? "/" : pathname.replace(/\/$/, "");
  const destinations = pages.filter((page) => page.to !== currentPath);

  return (
    <nav className={`${styles["bottom-navigation"]} ${styles.container}`} aria-label="他のページへのナビゲーション">
      <p className={styles["bottom-navigation-label"]}>EXPLORE OTHER PAGES</p>
      <div className={styles["bottom-navigation-grid"]}>
        {destinations.map(({ to, en, ja, Icon }) => (
          <NavLink key={to} to={to} className={styles["bottom-navigation-link"]}>
            <span className={styles["bottom-navigation-icon"]}><Icon size={18} /></span>
            <span className={styles["bottom-navigation-text"]}>
              <b>{en}</b>
              <small>{ja}</small>
            </span>
            <ArrowUpRight className={styles["bottom-navigation-arrow"]} size={16} />
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

function Header() {
  return (
    <header className={styles.header}>
      <div className={`${styles.container} ${styles["header-inner"]}`}>
        <NavLink to="/" className={styles.logo}>
          MY PORTFOLIO
        </NavLink>
        <nav className={styles["header-navigation"]} aria-label="メインナビゲーション">
          {pages.map(({ to, en, ja }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                `${styles["header-link"]} ${isActive ? styles.active : ""}`
              }
            >
              <b>{en}</b>
              <small>{ja}</small>
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <div className={styles.site}>
      <div className={styles["aqua-background"]} aria-hidden="true" />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/hobbies/:slug" element={<HobbyDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <BottomNavigation />
      <footer className={styles.footer}>© 2026 Footer Mitaina Yatu</footer>
    </div>
  );
}
