import React, { useState } from "react";
import { Marksexcel } from "./Marksexcel";
import * as xlsx from "xlsx";
import "./styles.css";

export default function Admindash() {
  const [excelFile, setExcelFile] = useState(null);
  const [excelFileError, setExcelFileError] = useState(null);
  const [excelData, setExcelData] = useState(null);

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

  const Cancelupload = (e) =>{
    e.preventDefault();
    setExcelData(null);
  }

  const Upload = (e) =>{
    e.preventDefault();

    console.log(excelData);
    setExcelData(null);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (excelFile !== null) {
      const workbook = xlsx.read(excelFile, { type: "buffer" });
      const worksheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[worksheetName];
      const rawdata = xlsx.utils.sheet_to_json(worksheet);
      const data = xlsx.utils.sheet_to_json(worksheet);
      let i=0;

      while(i<data.length){
        data[i].en_no = rawdata[0].en_no.toUpperCase();
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
        <div className="col-8 result ">
          <form
            className="form-group"
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <div className="rows" id="uploadform">
              <div className="col-6">
                <input
                  type="file"
                  className=" uploadfile"
                  onChange={handleFile}
                  required
                />
              </div>
              <div className="col-6">
                <label>Exam Name:</label>
                <input
                  className="form-control"
                  id="exam-name"
                  type="text"
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
            {(excelData!==null) ? (
              <div className="upload-ctrl">
              <button onClick={Cancelupload} className="btn" id="cancel-upload">
                Cancel
              </button>
              <button onClick={Upload} className="btn" id="confirm-upload">
                Upload
              </button>
            </div>
            ) : ("")}
          </div>
        </div>
        <div className="col-2"></div>
      </div>
    </>
  );
}
