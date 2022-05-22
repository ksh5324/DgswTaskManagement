import styled from "styled-components";

export const TableContainer = styled.div`
  width: 772px;
  height: 579px;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 40px;

  .button-wrapper {
    border-bottom: 1px solid #c9ccda;
    background: #ffffff;
    border-radius: 40px 40px 0px 0px;
    width: 772px;
    height: 100px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
`;

export const ButtonUnder = styled.div`
  position: absolute;
  top: 0;
  left: ${(props) => props.slot};
  background: #003aad;
  border-radius: 40px;
  width: 386px;
  height: 100px;
  transition: 0.6s cubic-bezier(0.455, 0.03, 0.515, 0.955);
`;

export const Button = styled.div`
  border-radius: 40px;
  width: 386px;
  height: 100px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  transition: 1s;
`;

export const TimeTableContainer = styled.div`
  position: relative;
  width: 703px;
  height: 410px;
  margin: 0 auto;
  transform: translateY(34px);

  .head {
    position: absolute;
    top: 0;
    right: 0;
    width: 604px;
    height: 59px;
    background: #003aad;
    border-radius: 0px 20px 0px 0px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 4px;
    padding-right: 4px;
    padding-top: 3px;
    padding-bottom: 3px;

    .week {
      width: 115px;
      height: 53px;
      background: #ffffff;
      border-radius: 17px;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;

      color: #000000;
    }
  }
  .left {
    position: absolute;
    top: 0;
    left: 0;
    width: 99px;
    height: 410px;
    background: #003aad;
    border-radius: 20px 0px 0px 20px;
    padding-top: 3px;
    padding-bottom: 8px;
    padding-left: 5px;
    padding-right: 3px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    .d {
      width: 91px;
      height: 53px;
      background: #ffffff;
      border-radius: 17px;

      display: flex;
      justify-content: center;
      align-items: center;
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;

      color: #000000;
    }

    .time {
      width: 91px;
      height: 42px;
      background: #ffffff;
      border-radius: 17px;

      display: flex;
      justify-content: space-evenly;
      align-items: center;

      .name {
        font-family: "Inter";
        font-style: normal;
        font-weight: 600;
        font-size: 15px;
        line-height: 18px;

        color: #000000;
      }
      .t {
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;

        color: #000000;
      }
    }
  }
  .main {
    box-sizing: border-box;
    position: absolute;
    top: 56px;
    left: 99px;
    width: 604px;
    height: 354px;
    background: #e6ecf7;
    border: 1px solid #003aad;
    border-radius: 0px 0px 20px 0px;
  }
`;

export const TaskContainer = styled.div``;
