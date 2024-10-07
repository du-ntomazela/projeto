import "../App.css"
import content from "../data/content.json"
import Options from "./opções"

export default function cards () {
    return (
        <>
        <Options />
    
        {content.map((data)=>{
            return (
                <>
                <section className="w-full h-8"></section>

                <div className="flex justify-center">
                    <div id={data.id} className="w-full sm:w-4/5 lg:w-3/4 h-auto bg-sky-700 border-black rounded-lg p-6 shadow-md">
                        <h1 className="font-bold text-lg sm:text-xl md:text-2xl text-white">{data.tema}</h1>

                        <section className="w-full h-4"></section>

                        <p className="text-white text-sm sm:text-base md:text-lg">{data.conteudo}</p>

                        <section className="w-full h-4"></section>

                        <h1 className="font-semibold text-sm sm:text-base md:text-lg text-white">Encarregado(s): {data.responsavel}</h1>
                    </div>
                </div>
                </>
            )
        })}
        
   
        </> )
}