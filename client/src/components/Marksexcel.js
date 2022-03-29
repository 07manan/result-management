import React from "react";

export const Marksexcel = ({ excelData }) => {
  return (
    <>
      {excelData.map((val, key) => {
        return (
          <tr key={key}>
            <th>{val.en_no}</th>
            <th>{val.marks}</th>
          </tr>
        );
      })}
    </>
  );
};
