import "../App.css"

export default function footer () {
    return (
        <>
        <section className="h-24 w-full"></section>
        <div className="flex justify-center">
            <div id="footer" className="w-full md:w-3/4 h-16 bg-slate-800 fixed bottom-0 flex items-center p-4">
                <div className="flex flex-1">
                    <h1 className="text-white font-thin">Futurecom & FiberHome</h1>
                </div>
                <div className="flex  justify-end gap-8">
                    <a href="https://www.linkedin.com/company/fiberhomedobrasil/posts/?feedView=all" target="_blank" >
                        <img id="icon-footer" className="h-8 " src="Linkedin.png" alt="LinkedIn da FiberHome" />
                    </a>
                    <a className="flex  justify-end" href="https://fiberhomebrasil.com.br/" target="_blank" >
                        <img id="icon-footer" className="h-8 " src="google.png" alt="Site da FiberHome" />
                    </a>
                </div>
            </div>
        </div>
        </>
    )
} 