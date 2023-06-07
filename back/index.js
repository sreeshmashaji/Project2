const express=require('express')
const cors=require ('cors')
const lr=require('./logreg')

const app=express()

app.use(express.json())
app.use(cors({
    origin:'http://localhost:4200'

}))


app.post('/register',(req,res)=>{
    lr.register(req.body.email,req.body.username,req.body.password)
    .then(user=>{
        if(user){
         res.status(user.statusCode).json(user)

        }
    })

})

app.post('/login',(req,res)=>{
    lr.login(req.body.email,req.body.password)
    .then(user=>{
        if(user){
            res.status(user.statusCode).json(user)


        }
    })
})








































app.listen(3004,()=>{
    console.log("Server listening to port number 3001");
})