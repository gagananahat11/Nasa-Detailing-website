import { css } from "@emotion/css";

export const page = css`
  background: #f4f5f2;
  color: #111;
`;

export const hero = css`
  min-height: 330px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 72px 80px;
  color: #fff;
  background:
    linear-gradient(115deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.62)),
    url("/aboutSecPic.jpg") center / cover;

  p {
    margin: 0 0 12px;
    color: #f5a623;
    font-size: 15px;
    font-weight: 800;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  h1 {
    max-width: 820px;
    margin: 0;
    font-size: clamp(42px, 6vw, 78px);
    line-height: 0.98;
    text-transform: uppercase;
  }

  @media (max-width: 768px) {
    min-height: 300px;
    padding: 56px 24px;
  }
`;

export const contactGrid = css`
  display: grid;
  grid-template-columns: 1fr 0.9fr;
  gap: 64px;
  align-items: start;
  padding: 86px 80px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 42px;
    padding: 64px 24px;
  }
`;

export const info = css`
  span {
    color: #b26d08;
    font-size: 13px;
    font-weight: 900;
    letter-spacing: 2px;
  }

  h2 {
    max-width: 650px;
    margin: 12px 0 22px;
    font-size: clamp(32px, 4.5vw, 56px);
    line-height: 1.05;
    text-transform: uppercase;
  }

  p {
    max-width: 620px;
    margin: 0 0 28px;
    color: #424242;
    font-size: 18px;
    line-height: 1.8;
  }

  a {
    display: block;
    width: fit-content;
    margin-bottom: 14px;
    color: #111;
    font-size: 20px;
    font-weight: 800;
    text-decoration: none;
  }
`;

export const form = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: clamp(24px, 4vw, 40px);
  background: #000;
  color: #fff;
  border-radius: 8px;

  label {
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 1.5px;
  }

  input,
  textarea {
    width: 100%;
    padding: 16px;
    border: 1px solid #333;
    border-radius: 8px;
    background: #161616;
    color: #fff;
    font-size: 16px;
    outline: none;
  }

  textarea {
    min-height: 140px;
    resize: vertical;
  }

  button {
    min-height: 56px;
    border: none;
    background: #f5a623;
    color: #000;
    font-weight: 900;
    cursor: pointer;
  }
`;
