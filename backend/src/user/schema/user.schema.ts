/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose'

export const UserSchema=new mongoose.Schema({
    name:{type:String, required:true},
    lastname:{type:String, required:true},
    phone:{type:Number, required:true},
    email:{type:String, required:true, unique:true},
    document_number:{type:Number, required:true, unique:true},
    comments:{type:String,required:false}
},{
    timestamps:true,
});