import React from "react";
import { Button, ButtonUnder } from "./tableStyle";

const TableHeader = ({ choose, changeChoose }: any) => {
  return (
    <>
      <div className="button-wrapper">
        <ButtonUnder slot={choose === 2 ? "386px" : "0px"} />
        <Button
          color={choose === 1 ? "white" : "black"}
          onClick={() => changeChoose(1)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 1C17 0.448 16.553 0 16 0C15.447 0 15 0.448 15 1V3C15 3.552 15.447 4 16 4C16.553 4 17 3.552 17 3V1ZM5 3C5 3.552 4.553 4 4 4C3.447 4 3 3.552 3 3V1C3 0.448 3.447 0 4 0C4.553 0 5 0.448 5 1V3ZM18 8V18H2V8H18ZM20 2H18V3C18 4.103 17.103 5 16 5C14.897 5 14 4.103 14 3V2H6V3C6 4.103 5.103 5 4 5C2.897 5 2 4.103 2 3V2H0V20H20V2ZM8.354 16C7.036 16 6.162 15.239 6.186 13.795H7.431C7.453 14.435 7.711 14.902 8.338 14.902C8.753 14.902 9.17 14.655 9.17 14.103C9.17 13.403 8.685 13.352 7.87 13.352V12.375C8.443 12.425 9.066 12.343 9.066 11.767C9.066 11.312 8.697 11.104 8.355 11.104C7.78 11.104 7.562 11.526 7.573 12.107H6.317C6.369 10.706 7.219 10 8.346 10C9.314 10 10.315 10.613 10.315 11.64C10.315 12.172 10.081 12.585 9.677 12.787C10.205 12.99 10.524 13.468 10.524 14.08C10.523 15.281 9.531 16 8.354 16ZM13.814 16H12.508V12.252H11.095V11.225C11.992 11.249 12.62 10.992 12.752 10.112H13.814V16ZM24 5V24H2V22H22V5H24Z"
              fill="white"
            />
          </svg>
          시간표
        </Button>
        <Button
          color={choose === 2 ? "white" : "black"}
          onClick={() => changeChoose(2)}
        >
          과제
        </Button>
      </div>
    </>
  );
};

export default TableHeader;
