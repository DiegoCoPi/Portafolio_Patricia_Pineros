import {FormData} from "./type_form";

export const DemoForm :React.FC<FormData>=({name,lastname,document_type,document_number})=>{
    return(
        <div>
            <p>{name}</p>
            <p>{lastname}</p>
            <p>{document_type}</p>
            <p>{document_number}</p>
        </div>
    )
}