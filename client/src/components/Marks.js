import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";

export default function Marks({ en_no }) {
  const [marksList, setmarkslist] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/student/read/${en_no}`)
      .then((Response) => {
        setmarkslist(Response.data);
      });
  }, [en_no]);

  return (
    <div className="marks">
      <h1>Your Marks</h1>

      <ul>
        {marksList.map((val, key) => {
          return (
            <li key={key}>
              {val.marks} marks in {val.exam_name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
