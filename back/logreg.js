const db=require('./db')


const register=(email,username,password)=>{
    return db.User.findOne({email})
    .then(user=>{
        if(user){
            return{
                statusCode:404,
                status:false,
                message:"User Alreday Exist"
            }
        }
       else{
        const newdata= new db.User({
            email,
            username,
            password

        })
        newdata.save()

        return{
            statusCode:200,
            status:true,
            message:"Register Successfully"
        }
        
       }
    })
}


login=(email,password)=>{
    return db.User.findOne({"email":email,"password":password})
    .then(user=>{
        if(user){
            currentmail=user.email
            return{
                statusCode:200,
                status:true,
                message:'login successfully',
                currentmail
            }

        }
        else{
            return{
                statusCode:402,
                status:false,
                message:"Incorrect Username or Password "
            }
        }
    })
}


module.exports={register,login}