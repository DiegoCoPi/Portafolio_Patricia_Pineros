/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';

export const dataBase_Providers = [{
    provide: 'DATABASE_CONNECTION',
    useFactory:async():Promise<typeof mongoose>=>{
        try{
            const connection = await mongoose.connect('mongodb://localhost/nest');
            console.log('DataBase conected sucessfully');
            return connection;
        }
        catch(error){
            console.log('DataBase_Error: ',error)
            throw error
        }
    }
}];
