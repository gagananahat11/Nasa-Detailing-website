"use client";

import Link from "next/link";
import {
  FaCarSide,
  FaGem,
  FaShieldAlt,
  FaSprayCan,
  FaTools,
  FaWater,
} from "react-icons/fa";
import * as styles from "./service.styles";

const services = [
  {
    icon: <FaShieldAlt />,
    title: "Paint Protection Film",
    text: "High-impact transparent film that protects painted panels from chips, scratches, road debris, and daily wear.",
  },
  {
    icon: <FaGem />,
    title: "Ceramic Coating",
    text: "Gloss-rich coating that adds hydrophobic protection, easier cleaning, and deeper paint clarity.",
  },
  {
    icon: <FaCarSide />,
    title: "Graphene Coating",
    text: "Advanced surface protection with strong water beading, slickness, UV resistance, and long-lasting shine.",
  },
  {
    icon: <FaSprayCan />,
    title: "Exterior Detailing",
    text: "A complete exterior reset with wash, decontamination, polishing, trims, wheels, and finishing protection.",
  },
  {
    icon: <FaWater />,
    title: "Interior Detailing",
    text: "Deep cleaning for seats, carpets, plastics, vents, glass, and touch points for a fresher cabin.",
  },
  {
    icon: <FaTools />,
    title: "Paint Correction",
    text: "Precision machine polishing to reduce swirl marks, oxidation, dullness, and light scratches.",
  },
];

const process = ["Inspect", "Correct", "Protect", "Deliver"];

export default function ServicesPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.breadcrumbs}>
          <Link href="/">HOME</Link>
          <span>/</span>
          <Link href="/services">SERVICES</Link>
        </div>
        <p>Premium Vehicle Care</p>
        <h1>Our Services</h1>
      </section>

      <section className={styles.intro}>
        <div>
          <span className={styles.eyebrow}>What We Do</span>
          <h2>Protection, restoration, and detailing built around your vehicle.</h2>
        </div>
        <p>
          From daily drivers to luxury cars, every service is handled with a
          careful inspection, professional products, and a finish-focused
          process.
        </p>
      </section>

      <section className={styles.serviceGrid}>
        {services.map((service) => (
          <article className={styles.card} key={service.title}>
            <div className={styles.icon}>{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </article>
        ))}
      </section>

      <section className={styles.process}>
        <div>
          <span className={styles.eyebrow}>Our Process</span>
          <h2>Every job follows a clean, quality-first workflow.</h2>
        </div>

        <div className={styles.steps}>
          {process.map((step, index) => (
            <div className={styles.step} key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.cta}>
        <div>
          <span className={styles.eyebrow}>Ready For A Detail?</span>
          <h2>Book a service and give your vehicle the care it deserves.</h2>
        </div>
        <a href="https://wa.me/917298666600" target="_blank" rel="noreferrer">
          Chat on WhatsApp
        </a>
      </section>
    </main>
  );
}
