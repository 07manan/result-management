import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import resultRoutes from "./routes/Result.js";
import adminRoutes from "./routes/Adminroutes.js";
import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import

dotenv.config();

const app = express();
app.use(cors());

app.use(express.json());
app.use("/student", resultRoutes);
app.use("/admin", adminRoutes);

mongoose
  .connect(process.env.CONNECTION_URL, { useNewUrlParser: true })
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server running on port: ${process.env.PORT || 5000}`);
    });
  })
  .catch((error) => console.log(error));
