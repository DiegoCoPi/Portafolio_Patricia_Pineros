import React, { useState } from "react";
import { formInterface } from "./interface_form";

export const MyForm=()=>{
    const[formData, setFormData]=useState<formInterface>({
        name:"",
        lastname:"",
        document_type:"",
        document_number:1234567890,
    });

    return(
        <form>
            <input
                type="text"
                placeholder="Ingrese su(s) nombre(s)"
                value={formData.name}    
                onChange={(e)=>setFormData({...formData, name:e.target.value})}
            />

            <input
                type="text"
                placeholder="Ingrese su(s) apellido(s)"
                value={formData.lastname}
                onChange={(e)=>setFormData({...formData, lastname:e.target.value})}
            />
            <label htmlFor="documentType">Tipo de documento</label>
            <select
                id="documentType"
                value={formData.document_type}
                onChange={(e)=>setFormData({...formData, document_type:e.target.value as formInterface["document_type"]})}
            >
                <option value="">Seleccione el tipo de documento</option>
                <option value="Cedula cuidadana">Cédula cuidadana</option>
                <option value="Cedula Extranjera">Cédula Extranjera</option>
            </select>
            <input
                type="number"
                placeholder="Ingrese numero de documento sin comas ni espacio ej 1234567890"
                value={formData.document_number}
                onChange={(e)=>setFormData({...formData, document_number: parseInt(e.target.value)})}
            />

        </form>
    )

}

