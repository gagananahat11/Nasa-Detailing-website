import { css } from "@emotion/css";

export const footer = css`
  background: #000;
  color: #fff;
  padding: 44px 24px 20px;
`;

export const container = css`
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 56px;

  @media (max-width: 1050px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 44px;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 34px;
  }
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
  height: 140px;
  object-fit: cover;
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
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: #25d366;
  padding: 10px;
  color: white;
  text-decoration: none;
  margin-top: 15px;
  width: fit-content;
`;

export const social = css`
  display: flex;
  gap: 10px;
`;

export const newsletter = css`
  display: flex;
  width: 100%;

  input {
    min-width: 0;
    flex: 1;
    padding: 12px 16px;
    border-radius: 5px 0 0 5px;
    margin-top: 40px;
    border: none;
  }
  button {
    background: #f55b23;
    padding: 5px 16px;
    border-radius: 0 5px 5px 0;
    border: none;
    color: white;
    font-weight: 600;
    margin-top: 40px;
    cursor: pointer;
    white-space: nowrap;
  }

  @media (max-width: 420px) {
    flex-direction: column;

    input,
    button {
      width: 100%;
      margin-top: 18px;
      border-radius: 5px;
    }
  }
`;

export const bottom = css`
  text-align: center;
  margin-top: 10px;
  // background:#f5a623;
`;
