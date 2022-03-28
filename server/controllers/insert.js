import Studentdata from "../models/Studentdata.js";
import Result from "../models/Result.js";
import Admindata from "../models/Admin.js";

export const addstudent =  async (req,res)=>{
    const result = new Studentdata({en_no:"UI20EC42", dob:"06422001"});
    try {
      await result.save();
      res.send("data inserted");
    } catch (error) {
      console.log(error);
    }
  };

  export const addData =  async (req,res)=>{
    const result = new Result({en_no:"UI20EC42", marks:"9",exam_name:"classtest3"});
    try {
      await result.save();
      res.send("data inserted");
    } catch (error) {
      console.log(error);
    }
  };

  export const addAdmin =  async (req,res)=>{
    const admin = new Admindata({username:"Admin", password:"Adminpass"});
    try {
      await admin.save();
      res.send("admin data inserted");
    } catch (error) {
      console.log(error);
    }
  };