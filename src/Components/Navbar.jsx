import { useState } from "react"
import Elastic from "./elastic"
export default function Navbar({hoveroff , hoveron}) {
  return (
    <div className="flex justify-center">
        <div id="navbarchild" className="flex justify-around items-center mt-8 border-b-amber-100 border rounded-xl w-lg p-2 ">
            <div>
                <Elastic>
                <h1 className="text-2xl cursor-help" onMouseEnter={hoveroff} onMouseLeave={hoveron}>
                    Basker
                </h1>
                
                </Elastic>
            </div>
            <div id="navv" className="list-none flex gap-8 cursor-pointer">
                <li className="hover:scale-110">Home</li>
                <li className="hover:scale-110">About</li>
                <li className="hover:scale-110">Contact</li>
            </div>
        </div>
                





    </div>
  )
}
