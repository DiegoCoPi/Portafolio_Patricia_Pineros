"use client";
import {useState}  from "react"
import { formInterface } from "./interface_form"
import Send_Button from "../buttons/send_buton"
import {createUser} from "../api/user_api_service"

export const DecForm=()=>{
    
    const[formData, setFormData]=useState<formInterface>({
        _id:"",
        name: "",
        lastname:"",
        phone:"",
        email:"",
        comment:"",
    })

    const[error, setError] = useState({})

    const handleChange =(e: React.FormEvent)=>{
        const {name, value} = e.target;
        setFormData((prevData)=>({...prevData,[name]:value}))
    }


    //Submit button function

    const handleSubmit = async (e: React.FormEvent)=>{
        e.preventDefault();
        try{


            //Validación de los campos
            if(!formData.name){
                newErrors.name="Dato obligatorio"
            }
            if(!formData.lastname){
                newErrors.lastname="Dato obligatorio"
            }
            if(!formData.phone){
                newErrors.phone="Dato obligatorio"
            }
            if(!formData.email){
                newErrors.phone="Dato necesario"
            }
            if(!formData._id){
                newErrors._id="Dato obligatorio"
            }

            //Verifica si hay casilla vacia
            if(Object.keys(newErros).lenght>0){
                setErrors(newErrors);
                return
            }
            setError({})

            await createUser(formData);
            alert('¡Formularió enviado con éxito!')
            setFormData({
                _id:"",
                name: "",
                lastname:"",
                phone:"",
                email:"",
                comment:"",
            })
        }
        catch(error){
            alert('Hubo un error al enviar el formulario.'+error)
        }
    }

    

    return (
       <form className="space-y-3" onSubmit={handleSubmit}>
            {/* Casilla de nombre(s)*/}
            <div className="flex items-left gap-6">
                <h2>Nombre(s)</h2>
                <input
                    type="text"
                    className="bg-blue-600 w-50"
                    placeholder="Ingrese nombre(s)"
                    value={formData.name}
                    onChange={(e)=>{setFormData({...formData, name:e.target.value})}}
                />
            </div>

            {/* Casilla de apellido(s)*/}
            <div className="flex items-left gap-6">
                <h2>Apellido(s)</h2>
                <input
                    type="text"
                    className="bg-blue-600 w-50"
                    placeholder="Ingrese apellido(s)"
                    value={formData.lastname}
                    onChange={(e)=>{setFormData({...formData, lastname:e.target.value})}}
                    />
            </div>
            {/* Casilla de telefono*/}
            <div className="flex item-left gap-11.5">
                <h2>Telefóno</h2>
                <input
                type="number"
                className="bg-blue-600 w-50"
                placeholder="numero telefonico"
                value={formData.phone}
                onChange={(e)=>setFormData({...formData, phone:e.target.value})}
                />
            </div>
            {/* Casilla de correo electrónico*/}
            <div className="flex item-left gap-10.5">
                <h2>Correo E</h2>
                <input
                type="string"
                className="bg-blue-600 w-50"
                placeholder="tu_mail@mail.com"
                value={formData.email}
                onChange={(e)=>setFormData({...formData, email:e.target.value})}
                />
            </div>
                
            {/* Casilla de numero de documento*/}
            <div className="flex items-left gap-14">
                <h2>N° C.C.</h2>
                <input
                    type="number"
                    className="bg-blue-600 w-50"
                    placeholder="1234567890"
                    value={formData._id}
                    onChange={(e)=>{setFormData({...formData, _id:e.target.value})}}
                />
            </div>
            {/*Comentarios*/}
            <div className="flex flex-col">
                <h2>Comentarios (Opcional)</h2>
                <input
                    type="string"
                    placeholder="Comente aqui"
                    className="bg-blue-600 w-85 l-400"
                    value={formData.comment}
                    onChange={(e)=>{setFormData({...formData, comment:e.target.value})}}
                />
            </div>
            <br/>
            <div className="flex items-center justify-center">
                <Send_Button/>
            </div>
       </form>
    )
}