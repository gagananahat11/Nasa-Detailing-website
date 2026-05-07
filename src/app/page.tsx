"use client";

import * as styles from "./Home.styles";
import { motion } from "framer-motion";
import { FormEvent, useState } from "react";

const initialBooking = {
  fullName: "",
  mobileNumber: "",
  location: "",
  service: "PPF",
};

export default function Home() {
  const [booking, setBooking] = useState(initialBooking);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  const updateBooking = (
    field: keyof typeof initialBooking,
    value: string
  ) => {
    setBooking((current) => ({ ...current, [field]: value }));
  };

  const submitBooking = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(booking),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Booking failed.");
      }

      setBooking(initialBooking);
      setStatus("success");
      setMessage("Thank you. We will call you shortly.");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  };

  return (
    <>
      <main className={styles.main}>
        <div className={styles.container}>
          <motion.h1
            className={styles.heading}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            NASA DETAILING STUDIO
          </motion.h1>

          <motion.p
            className={styles.text}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            PREMIUM CAR & BIKE <br />
            DETAILING STUDIO
          </motion.p>

          <motion.p
            className={styles.servicesText}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
          >
            PPF . Ceramic Coating .
          </motion.p>
        </div>
      </main>

<section className={styles.consultantBar}>
  <div className={styles.container2}>

    <div className={styles.leftDiv}>
      <h1>
        Book Your Car Detailing with <br />
        NASA DETAILING STUDIO.
      </h1>

      <p>
        Book your car detailing service with a trusted car detailing
        brand in India that focuses on precision, quality, and long-term
        protection.
      </p>
    </div>

    <form className={styles.rightLogin} onSubmit={submitBooking}>
      <h1 className={styles.heroText}>
        GET FREE CONSULTANT
      </h1>

      <label>FULL NAME</label>
      <input
        className={styles.inputField}
        placeholder="Enter your name"
        type="text"
        value={booking.fullName}
        onChange={(event) => updateBooking("fullName", event.target.value)}
        required
      />

      <label>MOBILE NUMBER</label>
      <input
        className={styles.inputField}
        placeholder="Phone Number"
        type="tel"
        value={booking.mobileNumber}
        onChange={(event) => updateBooking("mobileNumber", event.target.value)}
        required
      />

      <label>YOUR LOCATION</label>
      <input
        className={styles.inputField}
        placeholder="City"
        type="text"
        value={booking.location}
        onChange={(event) => updateBooking("location", event.target.value)}
        required
      />

      <label>REQUIRED SERVICE</label>

      <select
        className={styles.serviceField}
        value={booking.service}
        onChange={(event) => updateBooking("service", event.target.value)}
      >
        <option>PPF</option>
        <option>Ceramic Coating</option>
        <option>Graphene Coating</option>
      </select>

      <button className={styles.bookBtn} disabled={status === "loading"}>
        {status === "loading" ? "BOOKING..." : "BOOK NOW"}
      </button>

      {message && (
        <p
          className={
            status === "success" ? styles.successMessage : styles.errorMessage
          }
        >
          {message}
        </p>
      )}
    </form>

  </div>
</section>
      <section className={styles.secondSec}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            <div className={styles.card}>
              <h1>2,015</h1>
              <div className={styles.line}></div>

              <p>
                Detailing Studio was established with a vision to deliver premium
                car care services with advanced technology and expert
                craftsmanship.
              </p>
            </div>

            <div className={styles.card}>
              <h1>410K+</h1>
              <div className={styles.line}></div>

              <p>
                Projects delivered with precision, excellence, and unmatched
                standards of luxury craftsmanship.
              </p>
            </div>

            <div className={styles.card}>
              <h1>610K+</h1>
              <div className={styles.line}></div>

              <p>
                Valued clients placing their trust in our precision-driven
                luxury automotive care.
              </p>
            </div>

            <div className={styles.card}>
              <h1>26+</h1>
              <div className={styles.line}></div>

              <p>
                Expanding presence with 26+ stores across major cities,
                delivering consistent service standards everywhere.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
