/* eslint-disable prettier/prettier */
export {Document} from 'mongoose'

export interface User extends Document {
    readonly name: string,
    readonly lastname: string,
    readonly phone: number,
    readonly email: string,
    readonly number_document : number,
    readonly comments?: string,
}