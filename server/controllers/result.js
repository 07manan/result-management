import ResultModel from "../models/Result.js"
import Studentdata from "../models/Studentdata.js";

export const getResult =  async (req,res)=>{
    ResultModel.find({  }  ,(error,result)=>{
      if(error){
        res.send(error);
      }
      res.send(result);
    })
  };

  export const authstudent =  async (req,res)=>{
    const {en_no , dob} = req.body;
    // const student = await 
    Studentdata.findOne( { en_no:"UI20EC48" },(error,student)=>{
      if(error){
        res.send(error);
      }
      res.send(student);
    } );

    // if(student){
    //   console.log(student);
    // }
  };