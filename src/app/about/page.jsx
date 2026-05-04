"use client";

import * as styles from "./About.styles";

export default function AboutPage() {
  return (
    <div>

      {/* SECTION 1 */}
      <div className={styles.about}>
        <a>HOME</a>
        <a>ABOUT</a>
        <h1>ABOUT</h1>
      </div>

      {/* SECTION 2 */}
     <div className={styles.sec2}>
  
  {/* BIG BACKGROUND TEXT */}
  <h1 className={styles.bgText}>ABOUT US</h1>

  {/* LEFT SIDE */}
  <div className={styles.left}>
    <h2>WHO WE ARE</h2>
  </div>

  {/* RIGHT SIDE */}
  <div className={styles.right}>
    <p>
     Founded in 2015 by Ved Pratap, an automotive enthusiast who moved from the corporate world with a vision to elevate detailing standards in India, Detailing Bull was created to redefine vehicle care and protection. What began as a passion project has grown into one of India’s most trusted automotive detailing brands, with 26+ stores nationwide serving everyone from daily car owners to luxury vehicle enthusiasts.


    </p>

    <p>
Our growth is built on quality, precision, and innovation. Using advanced technology, premium products, and professionally trained experts, we deliver superior paint protection and long-lasting, showroom-quality finishes. At Detailing Bull, we don’t just detail cars — we protect investments and enhance the ownership experience.

    </p>
  </div>

</div>

    </div>
  );
}