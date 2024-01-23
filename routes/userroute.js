import express  from "express";
import { userdata } from "../Controller/userdata.js";
const userRouter=express.Router()
userRouter.get("/userdata",userdata)
export{userRouter}

