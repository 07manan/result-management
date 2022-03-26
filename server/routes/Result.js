import express from "express";
import { getResult,authstudent } from "../controllers/result.js";

const router = express.Router();

router.get('/read', getResult );
router.get('/authstudent',authstudent);

export default router;