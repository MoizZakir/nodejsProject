import express  from "express";
import { home } from "../Controller/home.js";
const windowRouter=express.Router()
windowRouter.get("/",home)
export {windowRouter}