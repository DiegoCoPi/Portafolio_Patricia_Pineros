"use client";
import {useState}  from "react"
import {formInterface} from "./interface_form"
import Send_Button from "../buttons/send_buton"
import {createUser} from "../api/user_api_service"

const DecForm=()=>{
    
    const[formData, setFormData]=useState<formInterface>({
        _id:"",
        name: "",
        lastname:"",
        phone:"",
        email:"",
    })

    const[error, setError] = useState<Record<string, string>>({})

    const handleChange =(e: React.ChangeEvent<HTMLInputElement>)=>{
        const {name, value} = e.target;
        setFormData((prevData)=>({...prevData,[name]:value}))
    }


    //Submit button function

    const handleSubmit = async (e: React.FormEvent)=>{
        e.preventDefault();
        
            const newErrors:Record<string,string>={}
            //Validación de los campos
            if(!formData.name){newErrors.name="Dato obligatorio"}

            if(!formData.lastname){newErrors.lastname="Dato obligatorio"}

            if(!formData.phone){newErrors.phone="Dato obligatorio"}

            if(!formData.email){newErrors.email="Dato necesario"}

            if(!formData._id){newErrors._id="Dato obligatorio"}

            //Verifica si hay casilla vacia
            if(Object.keys(newErrors).length>0){
                setError(newErrors);
                return
            }
            setError({});
        try{
            await createUser(formData);
            alert('¡Formularió enviado con éxito!')
            setFormData({
                _id:"",
                name: "",
                lastname:"",
                phone:"",
                email:"",
            })
        }
        catch{
            alert('Diligencie todos los campos requeridos')
        }
    }

    

    return (
       <form className="space-y-3" onSubmit={handleSubmit}>
            {/* Casilla de nombre(s)*/}
            <div className="flex items-left gap-6">
                <h2>Nombre(s)</h2>
                <div>
                    <input
                        type="text"
                        name="name"
                        className={`bg-blue-600 w-50 ${error.name?'input-error':''}`}
                        placeholder="Ingrese nombre(s)"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {error.name && <p className="error-message text-red-500">{error.name}</p>}
                </div>
            </div>
            <br/>
            {/* Casilla de apellido(s)*/}
            <div className="flex items-left gap-6">
                <h2>Apellido(s)</h2>
                <div>
                    <input
                    type="text"
                    name="lastname"
                    className={`bg-blue-600 w-50 ${error.lastname?'input-error':''}`}
                    placeholder="Ingrese apellido(s)"
                    value={formData.lastname}
                    onChange={handleChange}
                    />
                    {error.lastname && <p className="error-message text-red-500">{error.lastname}</p>}
                </div>
            </div>
            <br/>
            {/* Casilla de telefono*/}
            <div className="flex item-left gap-11.5">
                <h2>Telefóno</h2>
                <div>
                    <input
                    type="number"
                    name="phone"
                    className={`bg-blue-600 w-50" ${error.phone? 'input-error':""}`}
                    placeholder="numero telefonico"
                    value={formData.phone}
                    onChange={handleChange}
                    />
                    {error.phone && <p className="error-message text-red-500">{error.phone}</p>}
                </div>
            </div>
            <br/>
            {/* Casilla de correo electrónico*/}
            <div className="flex item-left gap-10.5">
                <h2>Correo E</h2>
                <div>
                    <input
                    type="string"
                    name="email"
                    className={`bg-blue-600 w-50 ${error.email? 'input-error':""}`}
                    placeholder="tu_mail@mail.com"
                    value={formData.email}
                    onChange={handleChange}
                    />
                    {error.email && <p className="error-message text-red-500">{error.email}</p>}
                </div>
            </div>
            <br/>    
            {/* Casilla de numero de documento*/}
            <div className="flex items-left gap-14">
                <h2>N° C.C.</h2>
                <div>
                    <input
                        type="number"
                        name="_id"
                        className={`bg-blue-600 w-50 ${error._id? 'input-error':""}`}
                        placeholder="1234567890"
                        value={formData._id}
                        onChange={handleChange}
                    />
                    {error._id && <p className="error-message text-red-500">{error._id}</p>}
                </div>
            </div>
            <br/>
            <div className="flex items-center justify-center">
                <Send_Button/>
            </div>
       </form>
    )
}
export default DecForm