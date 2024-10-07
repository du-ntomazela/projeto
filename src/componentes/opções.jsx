import "../App.css"
import options from "../data/content.json"

export default function opt () {
    return (
        <>
        <div className="flex justify-center p-4">
    <div className="w-full sm:w-5/6 lg:w-3/4 h-auto bg-black p-6 rounded-xl">
        <h1 className="text-white font-bold text-lg sm:text-xl md:text-2xl">Temas:</h1>
        
        <section className="h-4 sm:h-8"></section>
        
        <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8">
            {options.map((data) => {
                const elemento = `#${data.id}`;
                return (
                    <a key={data.id} href={elemento}>
                        <h1 className="text-white text-sm sm:text-base md:text-lg hover:text-gray-600 transition duration-300">
                            {data.tema}
                        </h1>
                    </a>
                );
            })}
        </div>
    </div>
</div>
        </>
    )
}