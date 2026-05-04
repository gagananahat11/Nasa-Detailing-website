import { css } from "@emotion/css";

export const about = css`
  background: #000000e3;
  color: #fff;
  padding: 40px;

  h1 {
    font-size: 54px;
  }
`;

export const sec2 = css`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 60px;
  padding: 100px 40px;
  background: #f8f8f8;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const left = css`
  display: flex;
  align-items: center;
  // position:absolute;
  // top:-5px;

  h2 {
    font-size: 40px;
    font-weight: 700;
  }
`;

export const right = css`
  color: #333;
  line-height: 1.8;

  p {
    margin-bottom: 20px;
  }
`;

export const bgText = css`
  position: absolute;
  top: 40px;
  left: 40px;
  font-size: 50px;
  font-weight: 800;
  color: transparent;
  -webkit-text-stroke: 1px #ddd;
  z-index: 0;
  pointer-events: none;
`;
