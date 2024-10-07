import "../App.css"
import Navbar from "./nav.jsx"
import Logo from "./logo.jsx"

export default function header (){
    return ( 
        <>
        <div className="flex justify-center">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center w-2/3 fixed top-0 bg-transparent p-4 z-50">
            <Logo />
            <Navbar/>
        </div>
        </div>
        <section className="h-24 w-full"></section>
        </>
    )
}