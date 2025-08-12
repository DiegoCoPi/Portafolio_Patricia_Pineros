/* eslint-disable prettier/prettier */
export interface User extends Document{
    readonly _id:number;
    readonly name: string;
    readonly lastname: string;
    readonly phone: number;
    readonly email: string;
    readonly comment: string;
}