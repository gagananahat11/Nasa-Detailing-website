import { css } from "@emotion/css";

export const footer = css`
  background: #000;
  color: #fff;
  padding: 25px 20px;
`;

export const container = css`
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 80px;
`;

export const col = css`
  display: flex;
  flex-direction: column;
  gap: 5px;

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    position: relative;
    padding-left: 15px;
    margin-bottom: 18px;
    color: #ccc;
  }

  li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 7px;
    width: 6px;
    height: 6px;
    background: #f5a623;
  }
`;

export const logo = css`
  width: 140px;
`;

export const support = css`
  color: #aaa;
`;

export const phone = css`
  font-size: 22px;
  color: #fff;
  text-decoration: none;
`;

export const whatsapp = css`
  background: #25d366;
  padding: 10px;
  color: white;
  text-decoration: none;
  margin-top: 15px;
`;

export const social = css`
  display: flex;
  gap: 10px;
`;

export const newsletter = css`
  display: flex;

  input {
    padding: 12px 45px 12px 21px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px 0 0 5px;
    margin-top: 40px;
  }
  button {
    background: #f55b23;
    padding: 5px 20px 5px 20px;
    border-radius: 0 5px 5px 0;
    color: white;
    font-weight: 600;
    margin-top: 40px;
  }
`;

export const bottom = css`
  text-align: center;
  margin-top: 10px;
  // background:#f5a623;
`;
