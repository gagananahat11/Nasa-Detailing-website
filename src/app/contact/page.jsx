"use client";

import { motion } from "framer-motion";
import * as styles from "./Contact.styles";

export default function ContactPage() {
  return (
    <main className={styles.page}>
      <motion.section
        className={styles.hero}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.25 }}
      >
        <p>Contact Us</p>
        <h1>Book Your Detailing Consultation</h1>
      </motion.section>

      <motion.section
        className={styles.contactGrid}
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className={styles.info}>
          <span>NASA DETAILING STUDIO</span>
          <h2>Premium car and bike care, one call away.</h2>
          <p>
            Share your vehicle details with us and our team will help you choose
            the right protection, coating, or detailing service.
          </p>

          <a href="tel:7298666600">+91 72986 66600</a>
          <a href="https://wa.me/917298666600" target="_blank" rel="noreferrer">
            Chat on WhatsApp
          </a>
        </div>

        <form className={styles.form}>
          <label>FULL NAME</label>
          <input type="text" placeholder="Enter your name" />

          <label>MOBILE NUMBER</label>
          <input type="tel" placeholder="Phone Number" />

          <label>MESSAGE</label>
          <textarea placeholder="Tell us what service you need" />

          <button type="button">SEND MESSAGE</button>
        </form>
      </motion.section>
    </main>
  );
}
