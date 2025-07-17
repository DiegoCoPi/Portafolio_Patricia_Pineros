import React from "react";
import Image from "next/image";

export const Footer:React.FC=()=>{
    return (
        <footer className="flex-buttom-0 bg-indigo-800 bg-opacity-30">
            <div>
                <h2>Sandra Patricia Piñeros</h2>
            </div>
            <div className="column-2">
                <div className="flex justify-evenly items-center flex-wrap gap-4 mt-2">
                    <div className="flex items-center gap-2">
                        <Image src="/telefono.svg" alt="telefono" height={30} width={30} />
                        <p>+57 3187119386</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Image src="/whatsapp.svg" alt="whatsapp" height={30} width={30} />
                        <p>+57 3187119386</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Image src="/email.svg" alt="email" height={30} width={30} />
                        <p>patriciapineros@gmail.com</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}