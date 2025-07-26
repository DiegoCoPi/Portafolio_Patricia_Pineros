"use client";
import {useState}  from "react"
import { formInterface } from "./interface_form"
import Send_Button from "../buttons/send_buton"


export const DecForm=()=>{
    
    const[formData, setFormData]=useState<formInterface>({
        name: "",
        lastname:"",
        phone:"",
        email:"",
        document_number:"",
    })

    //Convert the string data to number

    return (
       <form className="space-y-3" >
        
            {/* Casilla de nombre(s)*/}
           <div className="flex items-left gap-6">
                <h2>Nombre(s)</h2>
                <input
                    type="text"
                    className="bg-gray-200 w-50"
                    placeholder="Ingresa sus(s) nombre(s)"
                    value={formData.name}
                    onChange={(e)=>{setFormData({...formData, name:e.target.value})}}
                />
            </div>

            {/* Casilla de apellido(s)*/}
            <div className="flex items-left gap-6">
                <h2>Apellido(s)</h2>
                <input
                    type="text"
                    className="bg-gray-200 w-50"
                    placeholder="Ingresa su(s) apellido(s)"
                    value={formData.lastname}
                    onChange={(e)=>{setFormData({...formData, lastname:e.target.value})}}
                />
            </div>
            {/* Casilla de telefono*/}
            <div className="flex item-left gap-9.5">
                <h2>Telefóno</h2>
                <input
                type="number"
                className="bg-gray-200 w-32"
                placeholder="numero de telefóno"
                value={formData.phone}
                onChange={(e)=>setFormData({...formData, phone:e.target.value})}
                />
            </div>
            {/* Casilla de correo electrónico*/}
            <div className="flex item-left gap-8.5">
                <h2>Correo E</h2>
                <input
                type="string"
                className="bg-gray-200 w-48"
                placeholder="tu_mail@mail.com"
                value={formData.email}
                onChange={(e)=>setFormData({...formData, email:e.target.value})}
                />
            </div>
            {/* Casilla de numero de documento*/}
            <div className="flex items-left gap-11">
                <h2>N° C.C.</h2>
                <input
                    type="number"
                    className="bg-gray-200 w-32"
                    placeholder="Ingrese el numero del documento sin puntos ni espacios"
                    value={formData.document_number}
                    onChange={(e)=>{setFormData({...formData, document_number:e.target.value})}}
                />
            </div>
            <div className="flex items-center justify-center">
                <Send_Button/>
            </div>
       </form>
    )
}