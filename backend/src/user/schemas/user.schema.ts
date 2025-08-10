/* eslint-disable prettier/prettier */
import * as mongoose from "mongoose"

export const UserSchema = new mongoose.Schema({
    _id:{type:Number,required:true},
    name: {type:String, requierd:true},
    lastname: {type:String, required:true},
    phone:{type:Number,required:true},
    email:{type:String,required:true},
    comments:{type:String, required:false}
}, {versionKey:false})