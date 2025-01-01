"use client";
import { ReactElement } from "react";
import styles from "./error.module.css";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};
export default function Error({ error, reset }: Props): ReactElement {
  return (
    <div className={styles["error"]}>
      <div className={styles.writings}>
        <div className={styles["status-code"]}>راه به جایی نمیبریم !</div>
        <h1>یک خطای غیرمنتظره رخ داده است.</h1>
      </div>
      <div className={styles.actions}>
        <button onClick={reset}>تلاش مجدد</button>
      </div>
      <div className={styles.trace}>
        <details>
          <summary>لاگ خطا</summary>
          <pre dir="ltr">{error.stack}</pre>
        </details>
      </div>
    </div>
  );
}
