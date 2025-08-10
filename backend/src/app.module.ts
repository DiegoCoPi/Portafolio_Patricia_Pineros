/* eslint-disable prettier/prettier */
import { ConfigModule } from "@nestjs/config";
import {databaseProvider} from "./database/database.providers";
//import * as path from 'path';
import {Module} from '@nestjs/common'
import { UserModule } from "./user/user.module";


@Module({
    imports:[
        ConfigModule.forRoot({
            isGlobal:true,
            envFilePath:'.env',
        }),
        UserModule,
    ],
    controllers:[],
    providers:[...databaseProvider],
})

export class AppModule {}