import express from "express"
import dotenv from "dotenv"
import { authRouter } from "./routes/auth.js"
import { dbConnection } from "./utils/config.js"
import { windowRouter } from "./routes/home.js"
import { userdata } from "./Controller/authcontroller.js"
const app=express()
dotenv.config()
app.use(express.json())
const port=process.env.PORT||3000
app.use('/auth',authRouter)
app.use('/',windowRouter)
app.use('/userdata',userdata)
dbConnection()


app.listen(port,()=>{
    console.log("server started at port " +port);
})