
import { css } from "@emotion/css";

export const page = css`
  background: #f4f5f2;
  color: #111;
`;

export const hero = css`
  min-height: 360px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 14px;
  padding: 72px 80px;
  color: #fff;
  background:
    linear-gradient(115deg, rgba(0, 0, 0, 0.88), rgba(0, 0, 0, 0.62)),
    url("/aboutSecPic.jpg") center/cover;

  p {
    margin: 0;
    color: #f5a623;
    font-size: 15px;
    font-weight: 800;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  h1 {
    margin: 0;
    max-width: 760px;
    font-size: clamp(44px, 7vw, 82px);
    line-height: 0.95;
    text-transform: uppercase;
  }

  @media (max-width: 768px) {
    min-height: 300px;
    padding: 56px 24px;
  }
`;

export const breadcrumbs = css`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 1.5px;

  a {
    color: #fff;
    text-decoration: none;
  }

  span {
    color: #f5a623;
  }
`;

export const intro = css`
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(280px, 0.9fr);
  gap: 56px;
  align-items: end;
  padding: 86px 80px 42px;

  h2 {
    margin: 10px 0 0;
    max-width: 720px;
    font-size: clamp(30px, 4vw, 54px);
    line-height: 1.08;
    text-transform: uppercase;
  }

  p {
    margin: 0;
    color: #424242;
    font-size: 18px;
    line-height: 1.8;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 24px;
    padding: 64px 24px 28px;
  }
`;

export const eyebrow = css`
  color: #b26d08;
  font-size: 13px;
  font-weight: 900;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

export const serviceGrid = css`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
  padding: 28px 80px 90px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    padding: 24px 24px 64px;
  }
`;

export const card = css`
  min-height: 260px;
  padding: 30px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.06);
  transition:
    transform 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease;

  h3 {
    margin: 22px 0 12px;
    font-size: 22px;
    text-transform: uppercase;
  }

  p {
    margin: 0;
    color: #4b4b4b;
    line-height: 1.75;
  }

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(245, 166, 35, 0.5);
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.12);
  }
`;

export const icon = css`
  width: 54px;
  height: 54px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #000;
  background: #f5a623;
  border-radius: 8px;
  font-size: 24px;
`;

export const process = css`
  display: grid;
  grid-template-columns: minmax(280px, 0.85fr) minmax(0, 1.15fr);
  gap: 56px;
  padding: 84px 80px;
  color: #fff;
  background: #101010;

  h2 {
    margin: 10px 0 0;
    font-size: clamp(28px, 4vw, 48px);
    line-height: 1.1;
    text-transform: uppercase;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 64px 24px;
  }
`;

export const steps = css`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

export const step = css`
  min-height: 132px;
  padding: 24px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.04);

  span {
    color: #f5a623;
    font-size: 14px;
    font-weight: 900;
  }

  h3 {
    margin: 18px 0 0;
    font-size: 24px;
    text-transform: uppercase;
  }
`;

export const cta = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  padding: 70px 80px;
  background: #fff;

  h2 {
    margin: 10px 0 0;
    max-width: 760px;
    font-size: clamp(28px, 4vw, 46px);
    line-height: 1.12;
    text-transform: uppercase;
  }

  a {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 54px;
    padding: 0 28px;
    color: #000;
    background: #f5a623;
    font-weight: 900;
    letter-spacing: 1px;
    text-decoration: none;
    text-transform: uppercase;
    clip-path: polygon(0 0, 88% 0, 100% 50%, 88% 100%, 0 100%);
  }

  a:hover{
  background:black;
  color:white;
  }

  @media (max-width: 820px) {
    align-items: flex-start;
    flex-direction: column;
    padding: 60px 24px;
  }
`;
