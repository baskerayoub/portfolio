import "./Background.css"
import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { use, useEffect } from "react";

export default function Background({children}) {
  gsap.registerPlugin(ScrollTrigger,TextPlugin);


  useEffect(() => {
  


  gsap.to(
  "#body",
  {
    scale: 1, 
    transformOrigin: "center center",
    ease : "power3.inOut",
    scrollTrigger: {
      trigger: "#body",
      start: "top top",
      end: "bottom top",
      scrub: .1,
    },
  }
);

}, [])

  return (
    <div id='back'>
        <div id="body">
          <div className="starsparent">
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
          </div>
    </div>
            <div id="title" >
                {children}
           </div>





    </div>
  )
}
