import styled from "styled-components";

export const ChooseContainer = styled.div`
  width: 1104px;
  height: 579px;
  position: relative;
  border: 4px solid transparent;
  border-radius: 40px;
  background-image: linear-gradient(#fff, #fff),
    linear-gradient(90deg, #10c500 0%, #003bad 65.63%);
  background-origin: border-box;
  background-clip: content-box, border-box;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .des {
    margin-top: 59px;
    width: 723px;
    border-bottom: 3px solid black;
    text-align: center;
    padding-bottom: 9px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 800;
    font-size: 30px;
    line-height: 36px;
    text-align: center;

    color: #000000;
  }
  .button-con {
    width: 723px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 47px;
  }
  button {
    background: #e9eaef;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    width: 189px;
    cursor: pointer;
    height: 144px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
    transition: 0.5s;
  }
  button:hover {
    background: #d9dadf;
    font-size: 17px;
  }
`;
