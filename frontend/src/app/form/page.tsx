import { DecForm } from "../../components/form_indicator/form_indicators"

export const UserForm:React.FC=()=>{
    return(
        <div className="bg-blue-500 ml-12 mr-180 p-8">
            <h2 className="text-center text-blue text-5xl">Formulario</h2>
            <br/>
            <p>
                Para diligenciar el formulario por favor tener presente que el número de documento debe tener el valor 
                sin puntos, comas ni espacios es decir solo los digitos, por favor diligenciar bien la direccion del correo 
                electrónico, número de telefóno este debe ser el suyo y el que tiene a la mano para comunicarse y/c recibir 
                mensajes de manera inmediata.
            </p>
            <br/>
            <DecForm/>
        </div>
    )
}