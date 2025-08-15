import axios from 'axios'
import {formInterface} from "../form_indicator/interface_form"

const api_url = 'https://portafolio-patricia-pineros.onrender.com/user'

export const createUser= async(userData:formInterface)=>{
    
    try{
            const response = await axios.post(api_url, userData)
            return response.data
      
    }
    catch(error){
       throw Error('Error alcrear usuario: '+error)
    }
}