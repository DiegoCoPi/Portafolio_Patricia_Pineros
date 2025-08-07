/* eslint-disable prettier/prettier */
import {Connection } from "mongoose";
import { UserSchema } from "./user.schema";

export const userProvidiers=[{
    provide: 'USER_MODEL',
    useFactory:(connection: Connection) => connection.model('user',UserSchema),
    inject:['DATABASE_CONNECTION']
}]