"use client";

import { usePathname } from "next/navigation";
import styles from "../styles/about.module.css";

export default function Loading() {
  const pathname = usePathname();

  if (pathname === "/about") {
    return null;
  }

  return (
    <div className={styles.container}>
      <p className={styles.text}>Loading...</p>
    </div>
  );
}
