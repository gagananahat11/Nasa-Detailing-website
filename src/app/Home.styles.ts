import { css } from "@emotion/css";

export const main = css`
  min-height: calc(100vh - 94px);
  display: flex;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 820px) {
    min-height: auto;
    padding: 74px 24px 96px;
  }
`;

export const container = css`
  width: min(100%, 1240px);
  text-align: left;
  position: relative;
`;

export const heading = css`
  color: transparent;
  -webkit-text-stroke: 1px #ddd;
  font-family: var(--font-heading);
  font-size: clamp(54px, 8vw, 100px);
  font-weight: 700;
  margin-bottom: 0px;
  margin-top: 80px;
  margin-left: clamp(0px, 13vw, 200px);

  @media (max-width: 820px) {
    margin: 0;
    font-size: clamp(46px, 15vw, 72px);
    line-height: 0.98;
  }
`;

export const text = css`
  font-size: clamp(44px, 6vw, 68px);
  font-weight: 700;
  line-height: 1.4;
  position: absolute;
  top: 169px;
  left: clamp(0px, 7vw, 100px);
  margin-bottom: 0px;

  @media (max-width: 820px) {
    position: static;
    margin-top: 22px;
    font-size: clamp(34px, 11vw, 54px);
    line-height: 1.18;
  }
`;
export const servicesText = css`
  font-size: 22px;
  margin-left: 100px;
  margin-top: 180px;

  @media (max-width: 820px) {
    margin: 28px 0 0;
    font-size: 18px;
  }
`;
export const secondSec = css`
  background: black;
  color: white;
  padding: 120px 80px;
  margin-bottom: 100px;

  @media (max-width: 900px) {
    padding: 80px 24px;
    margin-bottom: 64px;
  }
`;
export const statsGrid = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 60px;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const card = css`
  h1 {
    font-size: clamp(34px, 4vw, 40px);
    font-weight: 800;
    margin-bottom: 30px;
    font-family: var(--font-heading);
  }

  p {
    font-size: clamp(17px, 2vw, 21px);
    line-height: 1.7;
    color: #d1d1d1;
  }
`;

export const line = css`
  width: 100%;
  height: 1px;
  background: #777;
  margin-bottom: 40px;
`;
export const consultantBar = css`
  padding: 0px 60px 50px 60px;

  @media (max-width: 900px) {
    padding: 0 24px 56px;
  }
`;

export const container2 = css`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 80px;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 42px;
  }
`;

export const leftDiv = css`
  display: grid;
  gap: 25px;
  color: white;

  h1 {
    font-size: clamp(34px, 5vw, 52px);
    font-weight: 700;
    line-height: 1.3;
    color: black;
  }

  p {
    font-size: 18px;
    line-height: 1.8;
    color: black;
  }
`;

export const rightLogin = css`
  background: red;
  padding: clamp(24px, 4vw, 40px);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const heroText = css`
  font-size: clamp(26px, 4vw, 34px);
  color: white;
  text-align: center;
  margin-bottom: 20px;
`;

export const inputField = css`
  width: 100%;
  padding: 16px;
  border: 1px solid #333;
  background: #1a1a1a;
  color: white;
  border-radius: 10px;
  font-size: 16px;
  outline: none;
`;

export const serviceField = css`
  width: 100%;
  padding: 16px;
  border: 1px solid #333;
  background: #1a1a1a;
  color: white;
  border-radius: 10px;
  font-size: 16px;
  outline: none;
`;

export const bookBtn = css`
  margin-top: 10px;
  padding: 18px;
  border: none;
  background: yellow;
  color: black;
  font-size: 16px;
  font-weight: 700;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: translateY(-3px);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
    transform: none;
  }
`;

export const successMessage = css`
  color: #e8ffe8;
  font-size: 15px;
  font-weight: 600;
  margin: 0;
`;

export const errorMessage = css`
  color: #fff0f0;
  font-size: 15px;
  font-weight: 600;
  margin: 0;
`;

export const thirdSec = css`
  padding: 0px 60px 100px 60px;
  background: white;

  @media (max-width: 950px) {
    padding: 0 24px 72px;
  }
`;

export const thirdContainer = css`
  display: grid;
  grid-template-columns: 1fr 0.95fr;
  align-items: center;
  gap: clamp(42px, 6vw, 85px);

  @media (max-width: 950px) {
    grid-template-columns: 1fr;
    gap: 45px;
  }
`;

export const thirdImage = css`
  min-height: 625px;
  background:
    linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url("/thirdImg.jpg") center / cover;

  @media (max-width: 950px) {
    min-height: 420px;
  }
`;

export const thirdRight = css`
  position: relative;
  padding: 70px 0;
  color: black;

  h1 {
    position: relative;
    z-index: 1;
    margin: 0 0 55px 0;
    font-family: var(--font-heading);
    font-size: clamp(36px, 5vw, 48px);
    font-weight: 800;
    line-height: 1;
  }

  p {
    max-width: 650px;
    margin: 0 0 60px 14px;
    font-size: clamp(18px, 2.2vw, 24px);
    line-height: 1.35;
  }

  @media (max-width: 950px) {
    padding: 0;

    h1 {
      font-size: 40px;
      margin-bottom: 35px;
    }

    p {
      margin-left: 0;
      font-size: 20px;
    }
  }
`;

export const thirdOutlineText = css`
  position: absolute;
  top: 34px;
  left: 0;
  margin: 0;
  color: transparent;
  -webkit-text-stroke: 1px #d6d6d6;
  font-family: var(--font-heading);
  font-size: 62px;
  font-weight: 800;
  line-height: 1;

  @media (max-width: 950px) {
    position: static;
    font-size: 44px;
    margin-bottom: -16px;
  }
`;

export const serviceBtn = css`
  margin-left: 0;
  min-width: min(240px, 100%);
  padding: 22px 48px;
  border: none;
  background: #ffb128;
  color: white;
  font-size: 22px;
  font-weight: 800;
  cursor: pointer;
  clip-path: polygon(10% 0, 100% 0, 100% 68%, 90% 100%, 0 100%, 0 32%);

  @media (max-width: 420px) {
    width: 100%;
  }
`;
