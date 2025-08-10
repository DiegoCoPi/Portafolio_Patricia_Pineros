/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
//import { UserSchema } from "./user/schemas/user.schema";
//import { MongooseModule } from "@nestjs/mongoose";
import { DatabaseModule } from "../database/database.module";
import {UserService} from "./service/user.service"
import { UserProviders } from "./user.providers";
import { UserController } from "./controller/user.controller";


@Module({
    imports:[DatabaseModule],
    controllers:[UserController],
    providers:[UserService, ...UserProviders],
    exports:[UserService]
})

export class UserModule{}