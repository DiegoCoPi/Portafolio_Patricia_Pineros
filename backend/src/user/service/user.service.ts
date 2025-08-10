/* eslint-disable prettier/prettier */
import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from '../interface/user.interface';
import { CreateUserDto } from '../dto/user.dto';
//import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {
    constructor(@Inject('USER_MODEL') private readonly userModel:  Model<User>) {}

    //Crear Usuario
    async create(createUserDto:CreateUserDto):Promise<User | undefined>{
        const createuser = await this.userModel.create(createUserDto)
        return createuser.save();
    }

}
