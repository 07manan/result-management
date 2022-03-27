import ResultModel from "../models/Result.js"
import Studentdata from "../models/Studentdata.js";

export const getResult =  async (req,res)=>{

  const en_no = req.params.en_no;
  
    ResultModel.find({ en_no:en_no }  ,(error,result)=>{
      if(error){
        res.send(error);
      }
      res.send(result);
    })
  };

  export const authstudent =  async (req,res)=>{
    
    const en_no = req.params.en_no

    Studentdata.findOne( { en_no:en_no },(error,student)=>{
      if(error){
        res.send(error);
      }
      res.send(student);
    } );
  };