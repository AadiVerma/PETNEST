import { randomUUID } from 'crypto';
import mongoose from 'mongoose';
const userSchema=new mongoose.Schema({
    userId:{
        type:String,
        default:randomUUID()
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    
})
const  usermodel=mongoose.model('user',userSchema);
export default usermodel;