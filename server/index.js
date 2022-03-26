import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import resultRoutes from "./routes/Result.js"
import ResultModel from "./models/Result.js"
import StudentModel from "./models/Studentdata.js"
// const ResultModel = require("./models/Result.js");

const app = express();
app.use(cors());

app.use(express.json());
app.use('/student', resultRoutes);




const CONNECTION_URL =
  "mongodb+srv://resultmanagement:resultmanagement123@cluster0.amyk3.mongodb.net/Results?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server runnind on port: ${PORT}`);
    });
  })
  .catch((error) => console.log(error));

  app.get("/insertstudent", async (req,res)=>{
    const result = new StudentModel({en_no:"UI20EC48", dob:"06042001"});
    try {
      await result.save();
      res.send("data inserted");
    } catch (error) {
      console.log(error);
    }
  });
  

app.get("/insert", async (req,res)=>{
  const result = new ResultModel({en_no:"UI20EC45", marks:"7",exam_name:"classtest"});
  try {
    await result.save();
    res.send("data inserted");
  } catch (error) {
    console.log(error);
  }
});
