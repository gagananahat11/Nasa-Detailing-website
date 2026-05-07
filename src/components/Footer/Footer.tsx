"use client";

import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import * as styles from "./Footer.styles";

export default function Footer() {
  return (
    <motion.footer
      className={styles.footer}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className={styles.container}>
        
        <div className={styles.col}>
          <img src="/logo.jpg" className={styles.logo} />

          <p>
            We follow a strict quality-first approach, ensuring every service is
            carefully verified and consistently delivers superior results.
          </p>

          <p className={styles.support}>Support center 24/7</p>

          <a href="tel:7298666600" className={styles.phone}>
            +91 72986 66600
          </a>

          <a
            href="https://wa.me/917298666600"
            target="_blank"
            className={styles.whatsapp}
          >
            <FaWhatsapp /> Chat on WhatsApp
          </a>
        </div>

        <div className={styles.col}>
          <h3>QUICK LINKS</h3>
          <ul>
            <li>ABOUT US</li>
            <li>OUR TEAM</li>
            <li>OUR WORKS</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div className={styles.col}>
          <h3>POPULAR SERVICES</h3>
          <ul>
            <li>PAINT PROTECTION FILM</li>
            <li>CERAMIC COATING</li>
            <li>GRAPHENE COATING</li>
            <li>INTERIOR DETAILING</li>
            <li>EXTERIOR DETAILING</li>
          </ul>
        </div>

        <div className={styles.col}>
          <h3>COMPANY ADDRESS</h3>

          <p>
            Location of detaing studio
          </p>

          <div className={styles.social}>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaInstagram /></a>
          </div>

          <div className={styles.newsletter}>
            <input type="email" placeholder=" Email Address" />
            <button>SUBSCRIBE</button>
          </div>
        </div>

      </div>

      <div className={styles.bottom}>
        © 2026 Detailing Studio. All rights reserved.
      </div>
    </motion.footer>
  );
}