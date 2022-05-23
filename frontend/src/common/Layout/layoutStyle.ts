import styled, { keyframes } from "styled-components";

const show = keyframes`
  0% {
    /* opacity: 0.5; */
    /* top: -500px; */
    height: 0px;
    /* right: -30px; */
    /* transform-origin: top right;
    transform: scale(0.1); */
  }
  100% {
    height: 385px;
    /* opacity: 1; */
  }
`;

export const LayoutConatiner = styled.div`
  width: 100%;
  height: 44px;
  background: #f4f4f4;
  position: absolute;
  top: 0;
  left: 0;

  svg {
    position: absolute;
    top: 50%;
    right: 17px;
    transform: translate(-50%, -50%);
    z-index: 2;
  }

  .title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    font-family: "Nico Moji";
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 40px;

    background: linear-gradient(90deg, #10c500 0%, #003bad 64.3%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .alert {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 8px;
    line-height: 10px;
    /* identical to box height */

    color: #ff0000;
    position: absolute;
    top: calc(100% + 6px);
    right: 10px;

    svg {
      right: 160px;
      z-index: 0;
    }
  }
`;

export const LoginContainer = styled.div`
  width: 300px;
  height: ${(props: { show: number }) => (props.show === 1 ? "385px" : "0px")};
  transition: 0.6s;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  position: absolute;
  right: 10px;
  top: 6px;
  /* animation: ${show} 0.6s cubic-bezier(0.165, 0.84, 0.44, 1); */

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .title2 {
    transition: 0.5s;
    font-family: "Inter";
    opacity: ${(props: { show: number }) => (props.show === 1 ? 1 : 0)};
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
    width: 216px;
  }
  label {
    transition: 0.5s;
    opacity: ${(props: { show: number }) => (props.show === 1 ? 1 : 0)};
    width: 216px;
    height: 32px;
    border: 1px solid #c9ccda;
    border-radius: 5px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 9px;
  }
  input {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    width: 80%;
    /* identical to box height */
    color: #000;
  }

  input::placeholder {
    color: #c9ccda;
    font-weight: 300;
  }
  input::-webkit-input-placeholder {
    color: #c9ccda;
    font-weight: 300;
  }
  input:-ms-input-placeholder {
    color: #c9ccda;
    font-weight: 300;
  }

  .icon {
  }

  button {
    opacity: ${(props: { show: number }) => (props.show === 1 ? 1 : 0)};
    width: 216px;
    height: 32px;
    background: #003aad;
    border-radius: 10px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 16px;
    /* identical to box height */
    cursor: pointer;

    color: #ffffff;
    transition-delay: 0.2s;
    transition: 0.3s;
    margin-top: 35px;
  }
  button:hover {
    transform: scale(1.02);
    font-size: 14px;
    transition: 0.3s;
  }
`;
