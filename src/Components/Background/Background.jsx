import "./Background.css"
import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { use, useEffect } from "react";

export default function Background({children}) {
  gsap.registerPlugin(ScrollTrigger,TextPlugin);


  useEffect(() => {
  


  gsap.fromTo(
  "#body",
  {
    scale: 2.5, 
    transformOrigin: "center center", 
  },
  {
    scale: 1, 
    transformOrigin: "center center",
    ease: "none",
    scrollTrigger: {
      trigger: "#body",
      start: "top top",
      end: "+=650px",
      scrub: true,
      markers: true,
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
