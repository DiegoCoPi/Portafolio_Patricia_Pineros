/* eslint-disable prettier/prettier */
import { Injectable, Inject } from "@nestjs/common";
import { Model } from "mongoose";
import {User} from "../interface/user.interface"
import { CreateUserDto } from "../create-user.dto";

@Injectable()
export class UserService{
    constructor(@Inject('User') private readonly userModel: Model<User>) { }
    //Creador del Contribuyente
    async create (createUserDto:CreateUserDto):Promise<User>{
        const newUser = new this.userModel({...createUserDto})
        try{return newUser.save()}
        catch(error){throw new Error('Error al crear el usuario: '+error) }    
    }

}