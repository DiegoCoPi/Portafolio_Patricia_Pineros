import DecForm from "@/components/form_indicator/form_indicators"



const UserForm=()=>{
    return(
        <div style={{backgroundColor:"rgba(159, 152, 152, 0.7)"}} className="p-8 border-4 border-blue-800 rounded-xl">
            <div>
                <h2 className="text-center text-blue-800 text-5xl">Formulario</h2>
                <DecForm/>
            </div>
        </div>
    )
}

export default UserForm