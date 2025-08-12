/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
//import { DatabaseModule } from "../database/database.module";
import {UserService} from "./service/user.service"
//import { UserProviders } from "./user.providers";
import { UserController } from "./controller/user.controller";
import { UserSchema } from "./schemas/user.schema";


@Module({
    imports:[
        MongooseModule.forFeature([{name:'User',schema:UserSchema}])
    ],
    controllers:[UserController],
    providers:[UserService],
    exports:[UserService]
})

export class UserModule{}