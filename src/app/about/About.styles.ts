import { css } from "@emotion/css";

export const about = css`
  background: #000000e3;
  color: #fff;
  padding: 72px 80px;

  h1 {
    margin: 16px 0 0;
    font-size: clamp(44px, 7vw, 76px);
    line-height: 0.95;
  }

  a {
    display: inline-block;
    margin-right: 14px;
    color: #f5a623;
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 1.5px;
  }

  @media (max-width: 768px) {
    padding: 56px 24px;
  }
`;

export const sec2 = css`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 60px;
  padding: 110px 80px 90px;
  background: #f8f8f8;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 28px;
    padding: 88px 24px 64px;
  }
`;

export const left = css`
  display: flex;
  align-items: center;
  // position:absolute;
  // top:-5px;

  h2 {
    margin: 0;
    font-size: clamp(32px, 4vw, 46px);
    font-weight: 700;
  }
`;

export const right = css`
  color: #333;
  line-height: 1.8;

  p {
    margin-bottom: 20px;
    line-height: 1.8;
    font-size: 17px;
  }
`;

export const bgText = css`
  position: absolute;
  top: 40px;
  left: 80px;
  font-size: clamp(44px, 8vw, 92px);
  font-weight: 800;
  color: transparent;
  -webkit-text-stroke: 1px #ddd;
  z-index: 0;
  pointer-events: none;

  @media (max-width: 900px) {
    left: 24px;
    top: 34px;
  }
`;

export const sec2p2 = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  padding: 80px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 34px;
    padding: 64px 24px;
  }
`;

export const secp2left = css`
  display: flex;
  align-items: center;

  p {
    margin: 0;
    font-size: clamp(24px, 4vw, 36px);
    font-weight: 600;
    line-height: 1.45;
    max-width: 620px;
  }
`;

export const secp2right = css`
  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }
`;
