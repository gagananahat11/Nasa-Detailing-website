import { css } from "@emotion/css";

export const header = css`
  width: 100%;
  background: black;
  color: white;
  border-radius: 5px;
  position: sticky;
  top: 0;              /* ⭐ important */
  z-index: 100;
`;

export const container = css`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  padding: 10px 80px;
`;

export const logoSection = css`
  display: flex;          /* ⭐ fix alignment */
  align-items: center;
  gap: 10px;
  justify-self: start;

  img {
    height: 70px;
  }
`;

export const logoText = css`
  font-size: 12px;
  line-height: 1.2;
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
  gap: 70px;

  li a {
    color: white;
    text-decoration: none;
    font-weight: 500;
  }

  li a:hover {
    color: #00bfff;
  }
`;

export const rightSection = css`
  justify-self: end;
`;