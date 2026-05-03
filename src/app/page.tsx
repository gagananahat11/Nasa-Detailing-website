"use client";

import { css } from "@emotion/css";

const main = css`
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
  font-family: var(--font-heading);
  font-size: 48px;
  font-weight: 700;
`;

export default function Home() {
  return (
    <main className={main}>
      <h1>WELCOME TO NASA DETAILING STUDIO</h1>
    </main>
  );
}