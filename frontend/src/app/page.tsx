import Image from "next/image"
import {Footer} from "../components/footer/footer"
import {UserForm} from "../app/form/page"


export default function Home(){
  return (
    <div className="min-h-screen flex flex-col">
      <div className="text-center md:text-center text-6xl my-8" >
        <h1>Bienvenidos a mi pagina web</h1>
      </div>
      <br/>
      <div style={{backgroundColor: 'rgba(159, 152, 152, 0.7)'}} className="text-2xl mx-12 text-white rounded-lg border-2 border-black py-4 px-4 mx-12">
          <p>
            Hola, soy Sandra Patricia Piñeros, contadora pública. Cuento con amplia experiencia en temas tributarios y quiero ayudarte a que tu declaración 
            de renta como persona natural sea fácil y sin complicaciones.Aquí encontrarás información útil y el formulario que puedes diligenciar para iniciar 
            tu proceso. ¡Será un gusto acompañarte! 
          </p>
      </div>
      <br/>
      <br/>
      <div style={{backgroundColor: 'rgba(159, 152, 152, 0.7)'}} className="text-2xl mx-12 text-white rounded-lg border-2 border-black py-4 px-4 mx-12">
          <p>
           Aqui encuentra el formulario en el cual yo le puedo colaborar con su declaración de renta, para esto deberá llenar sus datos personales como nombre(s)
           y apellidos(s) completos, telefono en donde pueda estar contacto con usted al igual correo electrónico suyo y encaso de no tenerlo se recomienda crear uno
           o si tiene alguien de plena confianza puede dar el correo electrónico de esa persona y finalmente el numero de cedula <strong>se debe digitar solo los 
           los números, es decir en el formulario no poner ni punto, comas o dejar espacio entre digitos</strong>
          </p>
          <br/>
          <div className="flex space-x-4">
            <div className="flex flex-col items-center gap-6 ml-10">
              <Image src="/PDF.svg" alt="PDF" height={100} width={100}/>
              <h2>Calendario_Impuesto.pdf</h2>
            </div>
            <div>
              <UserForm/>
            </div>  
          </div>  
      </div>      
      <br/>
      <Footer/>
    </div>
  )
}


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
