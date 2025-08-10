/* eslint-disable prettier/prettier */
import { IsEmail, IsInt, IsString, Max, Min } from "class-validator";

export class CreateUserDto {

    //Número documentación
    @IsInt({message:"Número Telefónico"})
    @Min(7,{message:"Minímo 7 números"})
    @Max(10,{message:"Hasta 10 números"})
    readonly _id:number
    
    //Nombres
    @IsString({message:'Nombre bien claro'})
    readonly name:string

    //Apellidos
    @IsString({message:"Apellidos bien claros"})
    readonly lastname:string

    //Telefóno
    @IsInt({message:"Numero de telefono"})
    @Max(10,{message: "Máximo 10 digitos"})
    readonly phone: number

    //Correo Electrónico
    @IsEmail({},{message:"Correo electrónico"})
    readonly email: string

    //Comentarios
    @IsString({message: "Ingrese aqui sus comentarios"})
    readonly comments:string
}