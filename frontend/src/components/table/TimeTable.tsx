import React from "react";
import { week, time } from "../../../model/time";
import { TimeTableContainer } from "./tableStyle";

const TimeTable = () => {
  return (
    <TimeTableContainer>
      <div className="head">
        {week.map((v) => (
          <div className="week">{v}</div>
        ))}
      </div>
      <div className="left">
        <div className="d">%d-%d</div>
        {time.map((v) => (
          <div className="time">
            <div className="name">{v.title}</div>
            <div className="t">
              <div className="start">{v.startTime}</div>
              <div className="end">{v.endTime}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="main"></div>
    </TimeTableContainer>
  );
};

export default TimeTable;
