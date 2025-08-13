/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from '../interface/user.interface';
import { CreateUserDto } from '../dto/user.dto';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import { Transporter } from 'nodemailer';
import { InjectModel } from '@nestjs/mongoose'; // Usa InjectModel

@Injectable()
export class UserService {
    private transporter: Transporter;

    constructor(
        // Usa @InjectModel para una inyección estándar
        @InjectModel('User') private readonly userModel: Model<User>,
        private readonly configService: ConfigService
    ) {
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: this.configService.get<string>('EMAIL_DESTINATION'),
                pass: this.configService.get<string>('PASS_DESTINATION'), 
            },
        });
    }

    // Método corregido para crear un usuario
    async create(createUserDto: CreateUserDto): Promise<User | undefined> {
        // `create` ya guarda el documento, no necesitas `save()`
        const newUser = await this.userModel.create(createUserDto);

        // Envía los correos después de la creación
        await this.sendConfirmationEmail(newUser);
        await this.sendNotificationEmail(newUser);

        return newUser;
    }

    // Correo de confirmación para el usuario
    sendConfirmationEmail = async (user: User) => {
        const emailOptions = {
            from: this.configService.get<string>('EMAIL_USER'),
            to: user.email,
            subject: '¡He recibido tu solicitud!',
            html: `
            <h1>Hola ${user.name} ${user.lastname},</h1>
            <p>He recibido tu solicitud para empezar el proceso de declaración de renta, recuerde que la decha limite para presentar la declaración
             <strong>NO</strong> debe ser despues de la fecha estipulada por el calendario para evmuchas gracias por confiar en mí.</p>
            <h2>Atentamente Patricia Piñeros</h2>`,
        };
        try {
            await this.transporter.sendMail(emailOptions);
        } catch (error) {
            throw new Error('Error al enviar correo: ' + error);
        }
    };

    // Correo de notificación para Patricia Piñeros
    sendNotificationEmail = async (user: User) => {
        // Usa la variable correcta para el correo de destino
        const destinationEmail = this.configService.get<string>('EMAIL_DESTINATION');
        const emailOptions = {
            from: this.configService.get<string>('EMAIL_USER'),
            to: destinationEmail,
            subject: `Nuevo formulario de contacto de ${user.name}`,
            html: `
                <h1>¡NUEVA ASESORIA DE CONTRIBUYENYE!</h1>
                <p>Se ha registrado un nuevo contribuyente con los siguientes datos:</p>
                <ul>
                <li><b>Nombre:</b> ${user.name}</li>
                <li><b>Apellido:</b> ${user.lastname}</li>
                <li><b>Teléfono:</b> ${user.phone}</li>
                <li><b>Correo:</b> ${user.email}</li>
                <li><b>Número de documento:</b> ${user._id}</li>
                </ul>`,
        };
        try {
            await this.transporter.sendMail(emailOptions);
            console.log('Correo de notificación enviado a:', destinationEmail);
        } catch (error) {
            console.error('Error al enviar el correo de notificación:', error);
        }
    };
}