import { DecForm } from "../../components/form_indicator/form_indicators"


export const UserForm:React.FC=()=>{
    return(
        <div style={{backgroundColor:"rgba(159, 152, 152, 0.7)"}} className="p-8 border-4 border-blue-800 rounded-xl">
            <div>
                <h2 className="text-center text-blue-800 text-5xl">Formulario</h2>
                <br/>
                <p>
                    Para diligenciar el formulario por favor tener presente que el número de documento debe tener el valor 
                    sin puntos, comas ni espacios es decir solo los digitos, por favor diligenciar bien la direccion del correo 
                    electrónico, número de telefóno este debe ser el suyo y el que tiene a la mano para comunicarse y/o recibir 
                    mensajes de manera inmediata.
                </p>
            </div>
            <br/>
            <div>
                <DecForm/>
            </div>
        </div>
    )
}