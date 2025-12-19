import Elastic from "./elastic"
import gsap from "gsap"
import {ScrollToPlugin} from "gsap/ScrollToPlugin"


export default function Navbar() {
    gsap.registerPlugin(ScrollToPlugin)
    



    return (
    <div className="flex justify-center">
        <div id="navbarchild" className="flex justify-around items-center mt-8 border-b-amber-100 border rounded-xl lg:w-lg sm:px-9 md:w-2xs p-4 lg:p-3 ">
            <div className="font-bold text-3xl lg:block md:hidden hidden" >
                <Elastic xvalue={0.35} yvalue={0.35}>
                <h1 className="text-2xl cursor-help">
                    BasKer
                </h1>
                
                </Elastic>
            </div>
            <div id="navv" className="list-none flex gap-8 cursor-pointer text-[95%] mt-0.5">
                <li onClick={() => gsap.to(window, { scrollTo: {y : 0}, duration: 1 })} className="hover:scale-110">Home</li>
                <li onClick={() => gsap.to(window, { scrollTo: {y : "#page2"}, duration: 1 })} className="hover:scale-110">About</li>
                <li onClick={() => gsap.to(window, { scrollTo: "#page4", duration: 1 })} className="hover:scale-110">Contact</li>
            </div>
        </div>
                





    </div>
  )
}
