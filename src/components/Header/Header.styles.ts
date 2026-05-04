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
`;

export const logoSection = css`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-self: start;

  img {
    height: 70px;
  }
`;

export const logoText = css`
  font-size: 16px;
  color: yellow;
`;

export const detailing = css`
  font-weight: bold;
  letter-spacing: 1px;
`;

export const navWrapper = css`
  justify-self: center;
`;

export const navBars = css`
  display: flex;
  list-style: none;
  gap: 60px;

  li a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    transition: 0.3s;
  }

  li a:hover {
    color: #e5ff00;
  }
`;

 export const rightSection = css`
   justify-self: end;
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
`;

export const icon = css`
  font-size: 18px;
`;