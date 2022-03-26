import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";

export default function Marks({en_no}) {
  const [marksList, setmarkslist] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/student/read").then((Response) => {
      setmarkslist(Response.data);
    });
  }, []);

  return (
    <div className="marks">
      <h1>Your Marks</h1>

      <ul>
        {marksList.map((val, key) => {
          if (val.en_no === en_no) {
            return (
              <li key={key} >
                {val.marks} marks in {val.exam_name}
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}
