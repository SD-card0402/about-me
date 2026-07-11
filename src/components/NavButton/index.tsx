
import { useLocation, useNavigate } from "react-router-dom";
import styles from './index.module.css';

type NavButtonProps = {
  showHome?: boolean;
};

export const NavButton = ({ showHome = false }: NavButtonProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isCurrentPath = (path: string) => location.pathname === path;

  return (
    <>
      {showHome && !isCurrentPath('/') && (
        <button
          className={styles.button}
          onClick={() => navigate('/')}
          aria-label="Go to Home"
        >
          Home
        </button>
      )}

      {!isCurrentPath('/about') && (
        <button
          className={styles.button}
          onClick={() => navigate('/about')}
          aria-label="Go to About"
        >
          About
        </button>
      )}

      {!isCurrentPath('/hobby') && (
        <button
          className={styles.button}
          onClick={() => navigate('/hobby')}
          aria-label="Go to Hobby"
        >
          Hobby
        </button>
      )}

      {!isCurrentPath('/contact') && (
        <button
          className={styles.button}
          onClick={() => navigate('/contact')}
          aria-label="Go to Contact"
        >
          Contact
        </button>
      )}
    </>
  );
}