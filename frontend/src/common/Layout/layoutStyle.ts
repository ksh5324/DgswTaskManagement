import styled from "styled-components";

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
    right: 0;
    transform: translate(-50%, -50%);
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
    right: 6px;

    svg {
      right: 160px;
    }
  }
`;
