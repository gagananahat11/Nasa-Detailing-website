"use client";

import Link from "next/link";
import * as styles from "./Header.styles";

export default function Header() {
  return (
    <header className={styles.header}>
      
      <div className={styles.container}>
        
        {/* LEFT - LOGO */}
        <div className={styles.logoSection}>
          <img src="/logo.jpg" alt="logo" />

          <div className={styles.logoText}>
            <span className={styles.detailing}>
              DETAILING <br />
              STUDIO
            </span>
          </div>
        </div>

        {/* CENTER - MENU */}
        <nav className={styles.navWrapper}>
          <ul className={styles.navBars}>
            <li><Link href="/">HOME</Link></li>
            <li><Link href="/services">SERVICES</Link></li>
            <li><Link href="/about">ABOUT</Link></li>
            <li><Link href="/contact">CONTACTS</Link></li>
          </ul>
        </nav>

        {/* RIGHT */}
        <div className={styles.rightSection}></div>

      </div>

    </header>
  );
}