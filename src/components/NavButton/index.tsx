
import { useNavigate } from "react-router-dom";
import styles from './index.module.css';

export const NavButton = () => {
  const navigate = useNavigate();

  return (
    <>
      <button
        className={styles.button}
        onClick={() => navigate('/about')}
        aria-label="Go to About"
      >
        一つ目のボタン
      </button>

      <button
        className={styles.button}
        onClick={() => navigate('/contact')}
        aria-label="Go to Contact"
      >
        二つ目のボタン
      </button>
    </>
  );
}