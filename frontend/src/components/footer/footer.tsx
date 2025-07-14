import React from "react";
import Image from "next/image";

export const Footer:React.FC=()=>{
    return (
        <footer>
            <div>
                <h2>Sandra Patricia Piñeros</h2>
            </div>
            <div className="Column-3">
                <Image src="/telefono.svg" alt="telefono" height={30} width={30} />
                <p>+57 3187119386</p>
           
                <Image src="/whatsapp.svg" alt="whatsapp" height={30} width={30} />
                <p>+57 3187119386</p>
          
                <Image src="/email.svg" alt="email" height={30} width={30} />
                <p>patriciapineros@gmail.com</p>
            </div>
        </footer>
    )
}