import styles from "../styles/about.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not found",
};

export default function NotFound() {
  return (
    <div className={styles.container}>
      <p className={styles.text}>Page Not Found!</p>
    </div>
  );
}
