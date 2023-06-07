const mongoose=require('mongoose')

//state connection string

mongoose.connect('mongodb://127.0.0.1:27017/BOOK',{
    useNewUrlparser:true}) // node=>mongodb

    //model creation collections
const User=mongoose.model('User',{
   email:String,
    username:String,
    password:String,
   

  
});

  
module.exports={User}