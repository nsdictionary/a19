"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "../styles/navigation.module.css";

export default function Navigation() {
  const path = usePathname();
  return (
    <div className={styles.navContainer}>
      <nav className={styles.nav}>
        <ul>
          <li className={path === "/" ? styles.active : ""}>
            <Link href="/">Home</Link>
          </li>
          <li className={path === "/about" ? styles.active : ""}>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
