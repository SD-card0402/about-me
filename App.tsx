import Home from "./pages/Home";
import styles from "./App.module.css";

export default function App() {
  return (
    <div className={styles.site}>
      <div className={styles["aqua-background"]} aria-hidden="true" />
      <Home />
      <footer className={styles.footer}>© 2026 Footer Mitaina Yatu</footer>
    </div>
  );
}
