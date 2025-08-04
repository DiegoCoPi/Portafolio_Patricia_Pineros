/* eslint-disable prettier/prettier */
import { ConfigService } from '@nestjs/config';
import * as mongoose from 'mongoose'

export const dataBaseProvider = [{
    provide:'DATABASE_CONNECTION',
    useFactory:async(configService:ConfigService):Promise<typeof mongoose> =>{
        try{
            const uri=configService.get<string>('URL_DATABASE | URL_DATABASE_2')
            if(uri){
                const connect = await mongoose.connect(uri)
                console.log("Base de datos Conectada exitosamente!")
                return connect
            }
            else{
                throw new Error("Conexión BD indefinida")
            }
        }
        catch(error){
            console.log("Error al conectarse a la base de datos", error)
            throw error
        }
    },
    inject:[ConfigService],
}]
