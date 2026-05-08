"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import * as styles from "./About.styles";

export default function AboutPage() {
  return (
    <div>
      <motion.div
        className={styles.about}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.25 }}
      >
        <a>HOME</a>
        <a>ABOUT</a>
        <h1>ABOUT</h1>
      </motion.div>

      <motion.div
        className={styles.sec2}
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h1 className={styles.bgText}>ABOUT US</h1>
        <div className={styles.left}>
          <h2>WHO WE ARE</h2>
        </div>
        <div className={styles.right}>
          <p>
            Founded in 2015 by Ved Pratap, an automotive enthusiast who moved
            from the corporate world with a vision to elevate detailing standards
            in India, Detailing Bull was created to redefine vehicle care and
            protection. What began as a passion project has grown into one of
            India&apos;s most trusted automotive detailing brands, with 26+
            stores nationwide serving everyone from daily car owners to luxury
            vehicle enthusiasts.
          </p>

          <p>
            Our growth is built on quality, precision, and innovation. Using
            advanced technology, premium products, and professionally trained
            experts, we deliver superior paint protection and long-lasting,
            showroom-quality finishes. At Detailing Bull, we don&apos;t just
            detail cars &mdash; we protect investments and enhance the ownership
            experience.
          </p>
        </div>
      </motion.div>

      <motion.div
        className={styles.sec2p2}
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className={styles.secp2left}>
          <p>
            Driven by passion and precision, we specialize in delivering
            world-class automotive detailing solutions. Every service is
            carefully crafted to enhance, protect, and maintain the true essence
            of your vehicle.
          </p>
        </div>

        <div className={styles.secp2right}>
          <Image
            src="/aboutSecPic.jpg"
            alt="NASA Detailing Studio service bay"
            width={900}
            height={620}
          />
        </div>
      </motion.div>
    </div>
  );
}
