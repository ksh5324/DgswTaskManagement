import { NextComponentType } from "next";
import Link from "next/link";
import React from "react";
import { ChooseContainer } from "./chooseStyle";

const Choose: NextComponentType = () => {
  return (
    <ChooseContainer>
      <Link href="class2">
        <a>
          <button>2-2</button>
        </a>
      </Link>
      <Link href="class3">
        <a>
          <button>2-3</button>
        </a>
      </Link>
    </ChooseContainer>
  );
};

export default Choose;
