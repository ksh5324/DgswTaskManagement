import React from "react";
import { TaskContainer } from "./tableStyle";

const Task = () => {
  return (
    <TaskContainer>
      <div className="main">
        <details>
          <summary>
            국어
            <div className="summary-chevron-up">
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 3L0 3V0L21 0V3ZM10.5 21L20.505 6L0.494999 6L10.5 21Z"
                  fill="#003AAD"
                />
              </svg>
            </div>
          </summary>
          <ul>
            <li>ppt 제작</li>
            <li>발표</li>
          </ul>
        </details>
      </div>
      <div className="but">
        <button>과목추가</button>
      </div>
    </TaskContainer>
  );
};

export default Task;
