import { Background } from "../components/background";
import styles from "./styles.module.css";

export function NotFound() {
  return (
    <>
      <Background />
      <div className={styles.center}>
        <div className={styles.box}>
          <h1>404 Not Found</h1>
        </div>
      </div>
    </>
  );
}
