// import conn from "../Models/conn"
import UsersSchema from "../Models/conn.js"

const authsignup=async (req,res)=>{

try{
        const {userName, userEmail,password}=req.body

        if (password.length < 8) return res.status(400).json({
            status: false,
            message: "Password length should be minimum 8 characters"
        })
        const user = {
            userName: userName,
            email: userEmail,
            password: password
        }

        const UsersSchemaCheck=new UsersSchema(user)
        const userCheck=await UsersSchemaCheck.save()
        if(userCheck){
        res.json({
            status: true,
            message: "Users Signed Up Successfully"
        })}

    }
    catch(err){
        res.json({
            status: false,
            message: err.message
        })

    }
    // res.json({
    //     status:true,
    //     message:'signup window'
    // })
}
const authLogin=async(req,res)=>{



    const {userEmail,password}=req.body

    try{
        if(userEmail==''|| password=='' ){
            return res.json({status:false ,message:  'all field required'})
                
            
        }

        const userCheck=await UsersSchema.findOne({email:userEmail})
        if(userCheck){
            if(userCheck.password==password){
                return(
                res.json({
                    status:true,
                    message:'User Login Succefully'
                }))
                
            }
            return(res.json({
                status:false,
                message:"invalid Credintials"
            }))
        }

        return(
            res.json({
                status:false,
                message:'User Not Found'
            })
        )



    }
catch(err){
    return(
        
    res.json({
        status:false,
        message:err.message
    })

    )
}








    // res.json({
    //     status:true,
    //     message:'Login window'
    // })
}
const authForgetPassword=(req,res)=>{
    

    res.json({
        status:true,
        message:'forget password window'
    })
}
const authHome=(req,res)=>{

    res.json({
        status:true,
        message:'Home winodow'
    })
}

export{authHome,authLogin,authsignup,authForgetPassword}