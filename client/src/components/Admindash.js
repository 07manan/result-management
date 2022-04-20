import React, { useState } from "react";
import { Marksexcel } from "./Marksexcel";
import Addusers from "./Addusers";
import * as xlsx from "xlsx";
import "./styles.css";
import axios from "axios";

export default function Admindash() {
  const [excelFile, setExcelFile] = useState(null);
  const [excelFileError, setExcelFileError] = useState(null);
  const [excelData, setExcelData] = useState(null);
  const [examname, setExamName] = useState(null);
  var notifuploadPlaceholder = document.getElementById(
    "notifuploadPlaceholder"
  );

  const fileType = [
    "application/vnd.ms-excel",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  ];
  const handleFile = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      // console.log(selectedFile.type);
      if (selectedFile && fileType.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsArrayBuffer(selectedFile);
        reader.onload = (e) => {
          setExcelFileError(null);
          setExcelFile(e.target.result);
        };
      } else {
        setExcelFileError("Please select only excel file types");
        setExcelFile(null);
      }
    } else {
      setExcelFileError("Please select your file");
    }
  };

  const Cancelupload = (e) => {
    e.preventDefault();
    setExcelData(null);
  };

  const Upload = async (e) => {
    e.preventDefault();
    let i = 0;
    if (examname !== null) {
      while (i < excelData.length) {
        axios.post(
          `http://localhost:5000/admin/adddata/${excelData[i].en_no}/${excelData[i].marks}/${examname}`
        );
        i++;
      }
      notifUpload();
      setExcelData(null);
      setExcelFileError(null);
    } else {
      setExcelFileError("Pleasr write exam name.");
    }
  };

  function notifUpload() {
    var wrapper = document.createElement("div");
    wrapper.innerHTML =
      '<div class="alert alert-dismissible" role="alert">Result uploaded successfully!!<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';

    notifuploadPlaceholder.append(wrapper);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (excelFile !== null) {
      const workbook = xlsx.read(excelFile, { type: "buffer" });
      const worksheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[worksheetName];
      const rawdata = xlsx.utils.sheet_to_json(worksheet);
      const data = xlsx.utils.sheet_to_json(worksheet);
      let i = 0;

      while (i < data.length) {
        data[i].en_no = rawdata[i].en_no.toUpperCase();
        i++;
      }

      setExcelData(data);
    } else {
      setExcelData(null);
    }
  };

  return (
    <>
      <div className="rows admindash">
        <div className="col-lg-9  result ">
          <div id="notifuploadPlaceholder"></div>
          <form
            className="form-group"
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <div className="rows" id="uploadform">
              <div className="col-lg-md-6 col-md-6 col-sm-6">
                <input
                  type="file"
                  className=" uploadfile"
                  onChange={handleFile}
                  required
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <label>Exam Name:</label>
                <input
                  className="form-control"
                  id="exam-name"
                  type="text"
                  onChange={(e) => {
                    setExamName(e.target.value);
                  }}
                  placeholder="Exam name"
                />
              </div>
            </div>
            {excelFileError && (
              <div className="text-danger" style={{ marginTop: 5 + "px" }}>
                {excelFileError}
              </div>
            )}
            <button
              type="submit"
              className="btn button"
              style={{ marginTop: 5 + "px" }}
            >
              Submit
            </button>
          </form>
          <p>Please ensure that the Excel file is in following format.</p>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>en_no</th>
                  <th>marks</th>
                </tr>
              </thead>
              <tbody>
                {excelData !== null ? (
                  <Marksexcel excelData={excelData} />
                ) : (
                  <tr>
                    <th>UIXXECXX</th>
                    <th>XX</th>
                  </tr>
                )}
              </tbody>
            </table>
            {excelData !== null ? (
              <div className="upload-ctrl">
                <button
                  onClick={Cancelupload}
                  className="btn"
                  id="cancel-upload"
                >
                  Cancel
                </button>
                <button onClick={Upload} className="btn" id="confirm-upload">
                  Upload
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="col-lg-3 "><Addusers/></div>
      </div>
    </>
  );
}
