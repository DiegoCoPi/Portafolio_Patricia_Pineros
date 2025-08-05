/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { UserSchema } from "./schema/user.schema";
import {MongooseModule} from "@nestjs/mongoose"

@Module({
    imports:[
        MongooseModule.forFeature([{
            name:'User', 
            schema:UserSchema,
         }])
    ],
    providers:[UserService],
    controllers:[UserController],
    exports:[UserService]
})

export class UsersModule{}