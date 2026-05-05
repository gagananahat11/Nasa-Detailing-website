"use client";

import * as styles from "./About.styles";

export default function AboutPage() {
  return (
    <div>
      <div className={styles.about}>
        <a>HOME</a>
        <a>ABOUT</a>
        <h1>ABOUT</h1>
      </div>
     <div className={styles.sec2}>
    <h1 className={styles.bgText}>ABOUT US</h1>
  <div className={styles.left}>
    <h2>WHO WE ARE</h2>
  </div>
  <div className={styles.right}>
    <p>
     Founded in 2015 by Ved Pratap, an automotive enthusiast who moved from the corporate world with a vision to elevate detailing standards in India, Detailing Bull was created to redefine vehicle care and protection. What began as a passion project has grown into one of India’s most trusted automotive detailing brands, with 26+ stores nationwide serving everyone from daily car owners to luxury vehicle enthusiasts.


    </p>

    <p>
Our growth is built on quality, precision, and innovation. Using advanced technology, premium products, and professionally trained experts, we deliver superior paint protection and long-lasting, showroom-quality finishes. At Detailing Bull, we don’t just detail cars — we protect investments and enhance the ownership experience.

    </p>
  </div>

</div>
<div className={styles.sec2p2}>
  
  {/* TEXT LEFT */}
  <div className={styles.secp2left}>
    <p>
      Driven by passion and precision, we specialize in delivering world-class automotive detailing solutions. Every service is carefully crafted to enhance, protect, and maintain the true essence of your vehicle.
    </p>
  </div>

  {/* IMAGE RIGHT */}
  <div className={styles.secp2right}>
    <img src="/aboutSecPic.jpg" alt="about" />
  </div>

</div>

    </div>
  );
}