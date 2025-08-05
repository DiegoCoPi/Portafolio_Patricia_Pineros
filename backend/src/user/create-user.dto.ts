/* eslint-disable prettier/prettier */

import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString, Min, Max, IsEmail, IsOptional } from "class-validator";

export class createUserDto {
    
    //Nombre del declarante
    @ApiProperty({
        required:true,
        description:'Nombres Completos',
        example:"Sandra Milena",
    })

    @IsString({message:'Nombre(s) bien claros'})
    readonly name:string

    //Apellidos del declarante

    @ApiProperty({
        required: true,
        description:'Nombres Completos',
        example:"Sandra Milena",
    })
    @IsString({message:"Apellidos bien claros"})
    readonly lastname:string

    //Telefono del declarante
    @ApiProperty({
        required:true,
    })
    @IsInt({message:"Digitar sin signos ni espacios"})
    @Max(10, {message:"Hasta máximo 10 digitos"})
    readonly phone:number

    //Correo del declarante
    @ApiProperty({
        required:true,
        description:"por favor digite un dominio valido",
        example:"mi_email@mail.com"
    })
    @IsEmail({},{message:"formato correo invalido"})
    readonly email:string

    //# documento del declarante
     @ApiProperty({
        required:true,
    })
    @IsInt({message:"Digitar sin signos ni espacios"})
    @Min(7,{message:"Debe tener minimo 7 digitos"})
    @Max(10, {message:"Hasta máximo 10 digitos"})
    readonly number_document:number

    //Comentarios declarante
    @ApiProperty({
        required:false
    })
    @IsOptional()
    @IsString({message:"Peticion consisa y clara"})
    @Max(2000,{message:"Escriba un comentario max 2000 caracteres"})
    readonly comment: string
}