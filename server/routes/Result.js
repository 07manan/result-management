import express from "express";
import { getResult,authstudent } from "../controllers/result.js";

const router = express.Router();

router.get('/read/:en_no', getResult );
router.get('/authstudent/:en_no',authstudent);

export default router;