import { css } from "@emotion/css";

export const header = css`
  width: 100%;
  background: rgb(0, 0, 0);
  backdrop-filter: blur(10px);
  color: white;
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const container = css`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  padding: 12px 80px;

  @media (max-width: 1100px) {
    padding: 12px 32px;
  }

  @media (max-width: 820px) {
    grid-template-columns: 1fr auto;
    gap: 14px;
    padding: 10px 18px;
  }
`;

export const logoSection = css`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-self: start;

  img {
    height: 70px;
    width: 70px;
    object-fit: cover;
  }

  @media (max-width: 820px) {
    img {
      height: 54px;
      width: 54px;
    }
  }
`;

export const logoText = css`
  font-size: 16px;
  color: yellow;

  @media (max-width: 520px) {
    font-size: 13px;
  }
`;

export const detailing = css`
  font-weight: bold;
  letter-spacing: 1px;
`;

export const navWrapper = css`
  justify-self: center;

  @media (max-width: 820px) {
    grid-column: 1 / -1;
    width: 100%;
    display: none;
  }
`;

export const navOpen = css`
  @media (max-width: 820px) {
    display: block;
  }
`;

export const navBars = css`
  display: flex;
  list-style: none;
  gap: 60px;
  margin: 0;
  padding: 0;

  li a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    transition: 0.3s;
  }

  li a:hover {
    color: #e5ff00;
  }

  @media (max-width: 1100px) {
    gap: 28px;
  }

  @media (max-width: 820px) {
    flex-direction: column;
    gap: 0;
    padding: 8px 0 4px;

    li a {
      display: block;
      padding: 14px 0;
      border-top: 1px solid rgba(255, 255, 255, 0.12);
    }
  }
`;

 export const rightSection = css`
   justify-self: end;

   @media (max-width: 820px) {
     display: none;
   }
 `;
export const navItem = css`
  position: relative;
`;

export const underline = css`
  position: absolute;
  bottom: -6px;
  left: 0;
  width: 100%;
  height: 2px;
  background: #e5ff00;
  border-radius: 2px;
`;

export const menuButton = css`
  display: none;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border: 1px solid rgba(255, 255, 255, 0.28);
  background: transparent;
  color: white;
  font-size: 19px;
  cursor: pointer;

  @media (max-width: 820px) {
    display: inline-flex;
  }
`;

export const contactbtn = css`
  display: inline-flex;
  align-items: center;
  gap: 10px;

  padding: 12px 26px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #fff;

  border: 2px solid #f5a623;
  text-decoration: none;

  position: relative;
  overflow: hidden;
  clip-path: polygon(0 0, 88% 0, 100% 50%, 88% 100%, 0 100%);

  transition: all 0.3s ease;

  &:hover {
    color: #000;
    background: #f5a623;
  }
  &:hover {
    box-shadow: 0 0 15px rgba(245, 166, 35, 0.6);
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -120%;
    width: 100%;
    height: 100%;
    background: rgba(255,255,255,0.2);
    transform: skewX(-20deg);
    transition: 0.5s;
  }

  &:hover::before {
    left: 120%;
  }

  @media (max-width: 1100px) {
    padding: 10px 18px;
    font-size: 13px;
  }
`;

export const icon = css`
  font-size: 18px;
`;
