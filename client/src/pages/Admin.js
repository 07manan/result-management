import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Admindash from "../components/Admindash";

const Admin = () => {
  const [detailsA, setDetailsA] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [Adminauth, setAdminauth] = useState("");

  const LoginA = async (detailsA) => {
    if (detailsA.en_no !== "") {
      axios
        .get(
          `${process.env.REACT_APP_BACKEND_URL}/admin/authadmin/${detailsA.username}`
        )
        .then((Response) => {
          if (Response.data.password === detailsA.password) {
            setAdminauth(detailsA.username);
          } else {
            setError("Incorrect Username or Password");
          }
        });
    } else {
      setError("Enter Username");
    }
  };

  const submitHandlerA = (e) => {
    e.preventDefault();
    LoginA(detailsA);
  };

  const LogoutA = () => {
    setAdminauth("");
    setError("");
    setDetailsA("");
  };

  return (
    <div>
      <Navbar en_no={""} admin={Adminauth} LogoutA={LogoutA} />
      {Adminauth === "" ? (
        <div className="row" id="form">
          <div className="col-md-3 col-lg-4"></div>
          <form
            onSubmit={submitHandlerA}
            className="form col-sm-12 col-md-6 col-lg-4 my-5 py-5 px-5 "
          >
            {error !== "" ? <div className="error">{error}</div> : ""}
            <div className="mb-3 form-field">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Admin Username:
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
                Password:
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="Admin Password"
                id="password"
                name="password"
                onChange={(e) =>
                  setDetailsA({ ...detailsA, password: e.target.value })
                }
                value={detailsA.password}
              />
            </div>
            <input type="submit" value="LOGIN" id="btn" />
          </form>
          <div className="col-md-6 col-lg-4"></div>
        </div>
      ) : (
        <Admindash />
      )}

      <Footer />
    </div>
  );
};
export default Admin;
