"use client";
import {useState}  from "react"
import { formInterface } from "./interface_form"
//import Butons from "../buttons/send_buton"


export const DecForm=()=>{
    
    
    const[formData, setFormData]=useState<formInterface>({
        name: "",
        lastname:"",
        document_number:0,
    })

    
    return (
       <form className="space-y-3">
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
            <div className="flex items-left gap-11.5">
                <h2>N° C.C.</h2>
                <input
                    type="number"
                    className="bg-gray-200 w-32"
                    placeholder="Ingrese el numero del documento sin puntos ni espacios"
                    value={formData.document_number}
                    onChange={(e)=>{setFormData({...formData, document_number:Number(e.target.value)})}}
                />
            </div>
       </form>
    )
}