import React, { useState } from "react";
import "./styles.css";

export default function Addusers() {
    const [detailS, setDetailS] = useState({ en_no:"" , dob:"" ,confirmdob:"" });
    const [detailA, setDetailA] = useState({ username:"" , pass:"" ,confirmpass:"" });
    const [error, setError] = useState("");


    const Addstudent =() => {
        if(detailS.dob !== detailS.confirmdob){
            setError("DOBs do not match!!")
        } else{
            console.log(detailS);
            document.getElementById("dismiss").click();
            setError("");
        }
    }
    const Addadmin =() => {
        if(detailA.pass !== detailA.confirmpass){
            setError("Passwords do not match!!");
        } else {
            console.log(detailA);
            setError("");
        }
    }
    const Cancel =() =>{
      setDetailA({ username:"" , pass:"" ,confirmpass:"" });
      setDetailS({ en_no:"" , dob:"" ,confirmdob:"" });
      setError("");
    }

    const ValidateDOB = () => {
      if(detailS.dob !== detailS.confirmdob){
        setError("DOBs do not match!");
      } else {
        setError("")
      }
    }

  return (
    <>
      <div className="add-student">
        <h2>Add students</h2>
        <button
          className="button btn"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          + Add students
        </button>
        <div>
          <div
            className="modal fade "
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex={-1}
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog ">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabel">
                    Add Student
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <label>Enrollment No.:</label>
                  <input
                    type="text"
                    placeholder="UIXXECXX"
                    onChange={(e) =>
                        setDetailS({ ...detailS, en_no: e.target.value })
                      }
                    className="form-control"
                  />
                  <label>DOB:</label>
                  <input
                    type="number"
                    placeholder="DDMMYYYY"
                    className="form-control"
                    onChange={(e) =>
                        setDetailS({ ...detailS, dob: e.target.value })
                      }
                  />
                  <label>Confirm DOB:</label>
                  <input
                    type="number"
                    placeholder="DDMMYYYY"
                    className="form-control"
                    onChange={(e) =>{
                      setDetailS({ ...detailS, confirmdob: e.target.value });
                      ValidateDOB();
                    }}
                  />
                  <div className="error" >{error}</div>
                </div>
                <div className="modal-footer">
                  <button type="button" id="dismiss" className="hidden" data-bs-dismiss="modal" >dismiss</button>
                  <button
                    type="button"
                    className="btn cancel"
                    data-bs-dismiss="modal"
                    onClick={Cancel}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={Addstudent}
                    className="btn add"
                    // data-bs-dismiss="modal"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="add-admin">
        <h2>Add Admin</h2>
        <button
          className="button btn"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop2"
        >
          + Add Admin
        </button>
        <div>
          <div
            className="modal fade "
            id="staticBackdrop2"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex={-1}
            aria-labelledby="staticBackdropLabel2"
            aria-hidden="true"
          >
            <div className="modal-dialog ">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabel2">
                    Add Admin
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal2"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <label>Username:</label>
                  <input
                    type="text"
                    placeholder="Username"
                    className="form-control"
                    onChange={(e) =>
                        setDetailA({ ...detailA, username: e.target.value })
                      }
                  />
                  <label>Password:</label>
                  <input
                    type="password"
                    placeholder="Password"
                    className="form-control"
                    onChange={(e) =>
                        setDetailA({ ...detailA, pass: e.target.value })
                      }
                  />
                  <label>Confirm Password:</label>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="form-control"
                    onChange={(e) =>
                        setDetailA({ ...detailA, confirmpass: e.target.value })
                      }
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn cancel"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={Addadmin}
                    className="btn add"
                    data-bs-dismiss="modal"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
