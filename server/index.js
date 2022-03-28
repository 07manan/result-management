import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import resultRoutes from "./routes/Result.js";
import adminRoutes from "./routes/Adminroutes.js";

const app = express();
app.use(cors());

app.use(express.json());
app.use('/student', resultRoutes);
app.use('/admin',adminRoutes);



const CONNECTION_URL =
  "mongodb+srv://resultmanagement:resultmanagement123@cluster0.amyk3.mongodb.net/Results?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
  

