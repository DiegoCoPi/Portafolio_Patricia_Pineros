import axios from 'axios'
import {formInterface} from "../form_indicator/interface_form"

const api_url = 'https://loaclahost:3000/user'

export const userClickCreate= async(userData:formInterface)=>{
    
    try{
        const response = await axios.post(api_url, userData)
        return response.data
    }
    catch(error){
        if(axios.isAxiosError(error)&& error.response){
            throw new Error(error.response.data.message || 'An error occurred.');
        }
        else{
            throw new Error('Error inesperado por favor intente de nuevo')
        }   
        
    }
}