/* eslint-disable prettier/prettier */

import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class createUserDto {
    @ApiProperty({
        description:'Nombres Completos',
        example:"Sandra Milena",
    })

    @IsString({message:'Nombre claros y bien escritos'})
    readonly name:string
}