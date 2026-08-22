import Home from "./Home";
import styles from "./App.module.css";

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


export default function App() {
  return (
    <div className={styles.site}>
      <div className={styles["aqua-background"]} aria-hidden="true" />
      <Home />
      <footer className={styles.footer}>© 2026 Footer Mitaina Yatu</footer>
    </div>
  );
}
