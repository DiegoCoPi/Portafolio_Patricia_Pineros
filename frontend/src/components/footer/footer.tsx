import React from "react";
import Image from "next/image";

export const Footer:React.FC=()=>{
    return (
        <footer style={{backgroundColor:"rgba(10, 4, 99, 0.7)"}}className="w-full">
            <div className="flex justify-between items-center flex-wrap gap-6 text-yellow-500 p-4">
                <div className="ml-50 ">
                    <h2 className="text-4xl font-semibold">Sandra Patricia Piñeros</h2>
                </div>
                <div className="space-y-3 mr-50">
                    <div className="flex items-center gap-2">
                        <Image src="/telefono.svg" alt="telefono" height={30} width={30}  style={{filter:"invert(81%) sepia(94%) saturate(748%) hue-rotate(2deg) brightness(100%) contrast(97%)"}}/>
                        <p>+57 3187119386</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Image src="/whatsapp.svg" alt="whatsapp" height={30} width={30}  style={{filter:"invert(81%) sepia(94%) saturate(748%) hue-rotate(2deg) brightness(100%) contrast(97%)"}} />
                        <p>+57 3187119386</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Image src="/email.svg" alt="email" height={30} width={30} style={{filter:"invert(81%) sepia(94%) saturate(748%) hue-rotate(2deg) brightness(100%) contrast(97%)"}}/>
                        <p>patriciapineros@gmail.com</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}