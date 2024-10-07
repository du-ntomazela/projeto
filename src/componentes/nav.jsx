import "../App.css"
import { Link } from "react-router-dom"

export default function nav () {
    return(
        <>
            <div className="flex gap-4 md:gap-8 w-full md:w-full bg-sky-950 justify-center md:justify-center rounded-lg h-auto p-3">
        <Link to={"/"}>
            <h2 id="nav" className="text-blue-500 hover:text-blue-300 transition duration-300">Home</h2>
        </Link>
        <Link to={"/infos"}>
            <h2 id="nav" className="text-white hover:text-gray-300 transition duration-300">Informações</h2>
        </Link>
        </div>  
        </>
    )
}