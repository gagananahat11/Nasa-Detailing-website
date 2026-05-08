"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import * as styles from "./Header.styles";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
const links = [
  { name: "HOME", href: "/" },
  { name: "SERVICES", href: "/services" },
  { name: "ABOUT", href: "/about" },
  { name: "CONTACTS", href: "/contact" },
];

// NAV ANIMATION
const navVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { y: -15, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

export default function Header() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // SCROLL DETECTION
  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;

    if (latest > prev && latest > 80) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      className={styles.header}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: hidden ? -100 : 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className={styles.container}>
        {/* LEFT - LOGO */}
        <motion.div
          className={styles.logoSection}
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Image
            src="/logo.jpg"
            alt="NASA Detailing Studio logo"
            width={70}
            height={70}
          />

          <div className={styles.logoText}>
            <span className={styles.detailing}>
              DETAILING <br />
              STUDIO
            </span>
          </div>
        </motion.div>

        {/* CENTER - MENU */}
        <button
          className={styles.menuButton}
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav
          className={`${styles.navWrapper} ${menuOpen ? styles.navOpen : ""}`}
        >
          <motion.ul
            className={styles.navBars}
            variants={navVariants}
            initial="hidden"
            animate="show"
          >
            {links.map((link) => {
              const isActive = pathname === link.href;

              return (
                <motion.li
                  key={link.href}
                  className={styles.navItem}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                >
                  <Link href={link.href} onClick={() => setMenuOpen(false)}>
                    {link.name}
                  </Link>

                  {isActive && (
                    <motion.div
                      layoutId="underline"
                      className={styles.underline}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.li>
              );
            })}
          </motion.ul>
        </nav>

        {/* RIGHT */}
        <div className={styles.rightSection}>
          <a
            href="tel:7298666600"
            onClick={(e) => {
              if (window.innerWidth < 768) return; 
              e.preventDefault();
              window.open("https://wa.me/917298666600", "_blank"); 
            }}
            className={styles.contactbtn}
          >
            +91-72986654560
          </a>
        </div>
      </div>
    </motion.header>
  );
}
