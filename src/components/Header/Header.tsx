"use client";

import Link from "next/link";
import * as styles from "./Header.styles";

const navItems = [
  { label: "Home", href: "/", active: true },
  { label: "About", href: "/about" },
  { label: "Our Services", href: "/our-services" },
  { label: "Our Portfolio", href: "/our-portfolio", hasDropdown: true },
  { label: "Pages", href: "#", hasDropdown: true },
  { label: "Blog", href: "/blog" },
];

export default function Header() {
  return (
    <header >
        
    </header>
  );
}
