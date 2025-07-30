
import mongoose from "mongoose";

const userschema=new mongoose.Schema({
    profilepic:{type:String},
    username:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    phoneNumber:{type:Number},
    resume:{type:String},
    highestdegree:{type:String},
    skills:[],
    experience:{type:String},
    cuurentcompany:{type:String},
    cuurentlocation:{type:String},
    cuurentrole:{type:String},
    cuurentctc:{type:String},
    noticeperiod:{type:Number},
    prefferedlocation:{type:String},
    expextedctc:{type:String},
    isadmin:{type:Boolean,default:false},
    createdAt:{type:Date,default:Date.now},
    updatedAt:{type:Date,default:Date.now},
})
const usermodel=mongoose.model("user",userschema);
export default usermodel; 