import React, {useState} from "react";
import Form from "../components/Form";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Marks from "../components/Marks";

function Home() {
  const adminUser = {
    en_no: "UI20EC48",
    dob: "06042001",
  };

  const [student, setStudent] = useState({ en_no: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    if (details.en_no == adminUser.en_no && details.dob == adminUser.dob){
        console.log(details);
        setStudent({
            en_no: details.en_no
        })
    } else {
        setError("Incorrect Enrollment No. or DOB");
    }
  };
  const Logout = () => {
    setStudent({ en_no:"" });
  };

  return (
    <>
      <Navbar Student={student.en_no} Logout={Logout} />
      {(student.en_no !="")? (
          <Marks en_no={student.en_no} />
      ):(
        <Form Login={Login} error={error} />
      )}
      <Footer />
    </>
  );
}


export default Home;
