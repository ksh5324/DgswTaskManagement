import styled from "styled-components";

export const ChooseContainer = styled.div`
  width: 750px;
  display: flex;
  justify-content: space-between;

  button {
    width: 325px;
    height: 125px;
    background: #ffffff;
    box-shadow: 4px 4px 15px rgba(1, 0, 0, 0.15);
    border-radius: 15px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 36px;
    color: #000000;
    transition: 0.15s;
    cursor: pointer;

    &:hover {
      background: #1556f7;
      color: white;
      transition: 0.15s;
      transform: scale(1.05);
    }
  }
`;
