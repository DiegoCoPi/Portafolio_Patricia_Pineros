/* eslint-disable prettier/prettier */
import { ConfigModule, ConfigService } from "@nestjs/config";
//import {databaseProvider} from "./database/database.providers";
//import * as path from 'path';
import {Module} from '@nestjs/common'
import { UserModule } from "./user/user.module";
import { MongooseModule } from "@nestjs/mongoose";


@Module({
    imports:[
        ConfigModule.forRoot({
            isGlobal:true,
            envFilePath:'.env',
        }),
        MongooseModule.forRootAsync({
            imports:[ConfigModule],
            useFactory:(configService:ConfigService)=>({
                uri:configService.get<string>('URL_DATABASE'),
            }),
            inject:[ConfigService]
        }),
        UserModule,
    ],
    controllers:[],
    providers:[],
})

export class AppModule {}