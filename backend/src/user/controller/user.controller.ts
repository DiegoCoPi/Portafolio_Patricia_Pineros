/* eslint-disable prettier/prettier */
import { Body, Controller, HttpCode, Post } from "@nestjs/common";
import { UserService } from "../service/user.service";
import { CreateUserDto } from "../dto/user.dto";
import { User } from "../interface/user.interface";

@Controller('user')
export class UserController{    
    constructor(private readonly userService: UserService) { }

    @Post()
    @HttpCode(201)
    async create(@Body() createUserDto:CreateUserDto):Promise< User| undefined>{
        return this.userService.create(createUserDto)
        
    }
}