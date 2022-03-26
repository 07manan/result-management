import React, { useEffect, useState } from "react";
import "./styles.css";

function Form({ Login, error}) {

  // const [studentData, setstudentData] = useState([]);

  // useEffect(() => {
  //   axios.get("http://localhost:5000/student/authstudent").then((Response) => {
  //     setstudentData(Response.data);
  //   });
  // }, []);

  const [ details, setDetails] = useState({ en_no:"", dob:""});

  const submitHandler = e => {
    e.preventDefault();

    Login(details);
  }

  return (
    <div className="row" id="form">
      <div className="col-md-3 col-lg-3"></div>
      <form onSubmit={submitHandler} className="form col-md-6 col-lg-6">
        {(error !="")?( <div className="error">{error}</div> ):""}
        <div className="mb-3 form-field">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Enrollment No.:
          </label>
          <input
            type="text"
            className="form-control"
            id="en_no"
            placeholder="eg.UIXXECXX"
            name="en_no"
            onChange={e=> setDetails({...details, en_no: e.target.value})}
            value={details.en_no}
          />
        </div>
        <div className="mb-3 form-feild">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Date of Birth:
          </label>
          <input
            type="password"
            className="form-control"
            placeholder="DDMMYYYY"
            id="password"
            name="password"
            onChange={e=> setDetails({...details, dob: e.target.value})}
            value={details.dob}
          />
        </div>
        <input type="submit" value="LOGIN" id="btn" />
      </form>
      <div className="col-md-6 col-lg-3"></div>
    </div>
  );
}

export default Form;
