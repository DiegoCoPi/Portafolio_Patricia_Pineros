/* eslint-disable prettier/prettier */
import { ConfigModule } from "@nestjs/config";
import {databaseProvider} from "./database/database.providers";
import * as path from 'path';
import {Module} from '@nestjs/common'


@Module({
    imports:[
        ConfigModule.forRoot({
            isGlobal:true,
            envFilePath:path.resolve(__dirname,'..','. .','.env'),
        })
    ],
    controllers:[],
    providers:[...databaseProvider],
})

export class AppModule {}