/* eslint-disable prettier/prettier */
import { User } from "../interface/user.interface";
import { Controller, HttpCode, Post, Body } from "@nestjs/common";
import { UserService } from "../service/user.service";
//import { ApiResponse } from "@nestjs/swagger";
import { CreateUserDto } from "../create-user.dto";

//@ApiTags(User)
@Controller('User')
export class UserController{
    constructor (private readonly userService: UserService) { }

    @Post()
    @HttpCode(201)
    async create(@Body() createUserDto: CreateUserDto):Promise<User> {
        return this.userService.create(createUserDto)
    }
   
}