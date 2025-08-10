/* eslint-disable prettier/prettier */
export interface User extends Document{
    readonly id_:number;
    readonly name: string;
    readonly lastname: string;
    readonly phone: number;
    readonly email: string;
    readonly comments: string;
}