
import { useNavigate } from "react-router-dom";
import styles from './index.module.css';

export const NavButton = () => {
  // 表示するボタンに関するロジック
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/about');
  }

  return (
    <>
    <button
      className={styles.button}
      onClick={handleNavigate}
    >
      一つ目のボタン
    </button>

    <button
      className={styles.button}
      onClick={handleNavigate}
    >
      二つ目のボタン
    </button>
  </>
  );
}