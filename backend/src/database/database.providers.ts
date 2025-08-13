/* eslint-disable prettier/prettier */
import { ConfigService } from '@nestjs/config';
import * as mongoose from 'mongoose'

export const databaseProvider = [{
    provide:'DATABASE_CONNECTION',
    useFactory:async(configService:ConfigService):Promise<typeof mongoose> =>{
        try{
            const uri =process.env.URL_DATABASE
            //const uri = configService.get<string>("URL_DATABASE");
            console.log(uri)
            if(uri){
                const connect = await mongoose.connect(uri)
                console.log("Base de datos Conectada exitosamente con URI principal!")
                return connect
            }
            else{
                const uri_2=configService.get<string>('URL_DATABASE_2')
                if(uri_2){ 
                    const connect = await mongoose.connect(uri_2)
                    console.log("Base de datos Conectada exitosamente con URI secundaria!")
                    return connect
                }
                else{
                throw new Error("Conexión BD indefinida")
                }
            }
        }
        catch(error){
            console.log("Error al conectarse a la base de datos", error)
            throw error
        }
    },
    inject:[ConfigService],
}]