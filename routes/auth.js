import express  from "express";
import { authForgetPassword, authHome, authLogin, authsignup, userdata } from "../Controller/authcontroller.js";

const authRouter=express.Router()
authRouter.post("/Signup",authsignup)
authRouter.post("/Login",authLogin)
authRouter.post("/ForgetPassword",authForgetPassword)
authRouter.post("/Home",authHome)
authRouter.get("/userdata",userdata)

export{authRouter}