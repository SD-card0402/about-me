
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
        About
      </button>

      <button
        className={styles.button}
        onClick={() => navigate('/hobby')}
        aria-label="Go to Hobby"
      >
        Hobby
      </button>

      <button
        className={styles.button}
        onClick={() => navigate('/contact')}
        aria-label="Go to Contact"
      >
        Contact
      </button>
    </>
  );
}