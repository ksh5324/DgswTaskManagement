import React, { useCallback, useState } from "react";
import TableHeader from "./TableHeader";
import { TableContainer } from "./tableStyle";
import TimeTable from "./TimeTable";

const Table = () => {
  const [choose, setChoose] = useState<number>(1);
  const changeChoose = useCallback(
    (number: number) => {
      setChoose(number);
    },
    [choose]
  );

  return (
    <TableContainer>
      <TableHeader choose={choose} changeChoose={changeChoose} />
      {choose === 1 ? <TimeTable /> : <div></div>}
    </TableContainer>
  );
};

export default Table;
