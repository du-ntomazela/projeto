import "../App.css"
import { Link } from "react-router-dom"

export default function fh () {
    return (
        <>
        <section className="h-24 w-full"></section>


<div className="flex justify-center px-4">
    <div className="flex flex-col md:flex-row gap-6 md:gap-12 w-full md:w-3/4">
        <img className="h-40 md:h-80" src="FH.png" alt="Logo da empresa FiberHome" />

        <div className="flex flex-col">
            <div className="text-white flex flex-col md:flex-row gap-2 font-semibold">
                Bem-vindo ao 
                <h1 className="text-cyan-300"> Futurecom 2024 </h1> com a FiberHome!
            </div>

            <section className="h-8 w-full"></section>

            <div className="text-white font-semibold text-sm sm:text-base md:text-lg lg:text-xl">
                Estamos entusiasmados em participar do Futurecom 2024, o maior evento de transformação digital, tecnologia e telecomunicações da América Latina. Este ano, a FiberHome, líder global em soluções de redes ópticas e comunicações, traz ao evento o que há de mais inovador no mercado de telecomunicações.
            </div>

            <section className="h-8 w-full"></section>

            <div className="text-white font-semibold text-sm sm:text-base md:text-lg lg:text-xl">
                Nosso compromisso é acelerar a conectividade de alta performance, oferecendo soluções robustas para redes de fibra óptica, 5G, nuvem e muito mais. No Futurecom 2024, vamos explorar juntos as tendências que moldam o futuro digital, transformando a maneira como empresas e pessoas se conectam e evoluem no mundo hiperconectado.
            </div>

            <section className="h-8 w-full"></section>

            <div className="text-white font-semibold text-sm sm:text-base md:text-lg lg:text-xl">
                Venha nos visitar e descubra como a FiberHome está na vanguarda da revolução tecnológica, impulsionando a inovação e a eficiência em todas as camadas de conectividade. Este é o momento de pensar no futuro, e a FiberHome está aqui para guiá-lo nessa jornada.
            </div>

            <section className="h-8 w-full"></section>

            <div className="text-white flex flex-col md:flex-row gap-2 font-semibold">
                Para mais informações entre em: 
                <Link to={"/infos"}>
                    <h1 className="text-cyan-300"> Informações </h1>
                </Link>
            </div>

            <section className="h-8 w-full"></section>

            <div className="text-yellow-400 font-semibold text-sm sm:text-base md:text-lg lg:text-xl">
                FiberHome – Conectando o futuro, hoje.
            </div>
        </div>
    </div>
</div>
        </>
    )
}