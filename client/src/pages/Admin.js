import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Admindash from "../components/Admindash";

const Admin = () => {
  const [detailsA, setDetailsA] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [Adminauth, setAdminauth] = useState("");

  const submitHandlerA = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <Navbar />
      {Adminauth === "" ? (
        <form
          onSubmit={submitHandlerA}
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
              id="adminuser"
              placeholder="Admin Username"
              name="adminuser"
              onChange={(e) =>
                setDetailsA({ ...detailsA, username: e.target.value })
              }
              value={detailsA.username}
            />
          </div>
          <div className="mb-3 form-feild">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Date of Birth:
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Admin Password"
              id="password"
              name="password"
              onChange={(e) => setDetailsA({ ...detailsA, password: e.target.value })}
              value={detailsA.password}
            />
          </div>
          <input type="submit" value="LOGIN" id="btn" />
        </form>
      ) : (
        <Admindash />
      )}

      <Footer />
    </div>
  );
};
export default Admin;
