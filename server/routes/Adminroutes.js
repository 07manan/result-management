import express from "express";
import { addAdmin,addstudent,addData } from "../controllers/insert.js";
import { authAdmin } from "../controllers/result.js";
const router = express.Router();

router.get('/addadmindata', addAdmin);
router.get('/authadmin/:username',authAdmin);
router.get('/addstudent',addstudent);
router.get('/adddata',addData);


export default router;