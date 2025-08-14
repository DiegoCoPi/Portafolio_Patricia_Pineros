import Image from "next/image"
import {Footer} from "../components/footer/footer"
import UserForm from "../components/form_indicator/form_indicators"

const Home=()=>{
  return (
    <div className="min-h-screen flex flex-col">
      <div style={{color:'rgba(250, 5, 5, 0.93)'}} className="text-center md:text-center text-6xl my-8" >
        <h1>Te Ayudamos con tu Declaración de Renta</h1>
      </div>
      <br/>
      <div style={{backgroundColor: 'rgba(32, 30, 30, 0.61)'}} className="text-2xl mx-12 text-white rounded-lg border-2 border-black py-4 px-4 mx-12">
          <p>
            Mi nombre es Sandra patricia Piñeros soy contadora pública con conocimiento y experiencia en preparación de impuestos para personas naturales en el cual cree este espacio
            para poner a su disposición y poderle colaborar, ayudar y guiar con su declaración anual, ya que se encuantra en este espacio he habilitado un formulario en donde puede dejar
            sus datos junto con un archivo descargable para consultar su fecha limite de declaración, requisitos y documentación que se debe enviar <strong>¡Bienvenido nuevamente a este espacio!.</strong>  
          </p>
      </div>
      <br/>
      <br/>
      <div style={{backgroundColor: 'rgba(32, 30, 30, 0.61)'}} className="text-2xl mx-12 text-white rounded-lg border-2 border-black py-4 px-4 mx-12">
          <p>
            Datos para tener en cuenta para el diligeciamiento del fomulario, es un formulario sencillo de diligenciar, consiste en diligenciar su(s) nombre(s) y apellido(s), con su número 
            telefónico preferiblemente que tenga whatsapp, número de cédula ciudadana o documento autorizado como recomendación <strong>En ambas casillas NO debe insertar ni simbolos ni dejar
            espacios</strong>,y finalmente proporcionar un correo electrónico se utilizara como medio de envio de documentos y hacerme saber de que llego su solicitud,<strong>preferible tener 
            correo personal y en caso de no tenerlo puede proporcinar uno de una persona de su plena confianza o crear uno nuevo. </strong> Sin más dejo al final de la pagina mi número de contacto
            por si tene alguna inquietud.
          </p>
          <br/>
          <div className="flex space-x-40">
            <div className="flex flex-col items-center gap-6 ml-20">
              <a href="/Calendario_Impuesto.pdf" download="Calendario_Impuesto.pdf">
                <Image src="/PDF.png" alt="PDF" height={100} width={100}/>
                <h2>Calendario_Impuesto.pdf</h2>
              </a>
            </div>
            <div className="mr-200">
              <UserForm/>
            </div>  
          </div>  
      </div>      
      <br/>
      <Footer/>
    </div>
  )
}
export default Home


/*export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}*/
