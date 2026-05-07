import { css } from "@emotion/css";

export const main = css`
  min-height: 100vh;
  display: flex;
  //   align-items: center;
  justify-content: center;
`;

export const container = css`
  text-align: left;
`;

export const heading = css`
  color: transparent;
  -webkit-text-stroke: 1px #ddd;
  font-family: var(--font-heading);
  font-size: 100px;
  font-weight: 700;
  margin-bottom: 0px;
  margin-top: 80px;
  margin-left: 200px;
`;

export const text = css`
  font-size: 68px;
  font-weight: 700;
  line-height: 1.4;
  position: absolute;
  top: 169px;
  left: 100px;
  margin-bottom: 0px;
`;
export const servicesText = css`
  font-size: 22px;
  // font-weight: 600;
  margin-left: 100px;
  margin-top: 180px;
`;
export const secondSec = css`
  background: black;
  color: white;
  padding: 120px 80px;
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
    font-size: 40px;
    font-weight: 800;
    margin-bottom: 30px;
    font-family: var(--font-heading);
  }

  p {
    font-size: 21px;
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
  
`;

export const container2 = css`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 80px;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const leftDiv = css`
  display: grid;
  gap: 25px;
  color: white;

  h1 {
    font-size: 52px;
    font-weight: 700;
    line-height: 1.3;
    color:black;
  }

  p {
    font-size: 18px;
    line-height: 1.8;
    color:black;
  }
`;

export const rightLogin = css`
  background: red;
  padding: 40px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const heroText = css`
  font-size: 34px;
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
