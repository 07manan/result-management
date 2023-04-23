import React, { useState } from "react";
import axios from "axios";
import Marks from "../components/Marks";
import "../components/styles.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  const [details, setDetails] = useState({ en_no: "", dob: "" });
  const [authstdnt, setAuthstdnt] = useState("");
  const [error, setError] = useState("");

  const Login = async (details) => {
    if (details.en_no !== "") {
      axios
        .get(
          `${process.env.REACT_APP_BACKEND_URL}/student/authstudent/${details.en_no}`
        )
        .then((Response) => {
          if (Response.data.dob === parseInt(details.dob)) {
            setAuthstdnt(details.en_no);
          } else {
            setError("Incorrect Enrollment No. or DOB");
          }
        });
    } else {
      setError("Enter Enrollment No.");
    }
  };
  const Logout = () => {
    setAuthstdnt("");
    setError("");
    setDetails("");
  };

  const submitHandler = (e) => {
    e.preventDefault();

    Login(details);
  };

  return (
    <>
      <Navbar en_no={authstdnt} Logout={Logout} admin={""} />
      {authstdnt === "" ? (
        <div className="row" id="form">
          <div className="col-md-3 col-lg-4"></div>
          <form
            onSubmit={submitHandler}
            className="form col-sm-12 col-md-6 col-lg-4 my-5 py-5 px-5 "
          >
            {error !== "" ? <div className="error">{error}</div> : ""}
            <div className="mb-3 form-field">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Enrollment No.:
              </label>
              <input
                type="text"
                className="form-control"
                id="en_no"
                placeholder="UIXXECXX"
                name="en_no"
                onChange={(e) =>
                  setDetails({ ...details, en_no: e.target.value })
                }
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
                onChange={(e) =>
                  setDetails({ ...details, dob: e.target.value })
                }
                value={details.dob}
              />
            </div>
            <input type="submit" value="LOGIN" id="btn" />
          </form>
          <div className="col-md-6 col-lg-4"></div>
        </div>
      ) : (
        <Marks en_no={authstdnt} />
      )}
      <Footer />
    </>
  );
}

export default Home;
