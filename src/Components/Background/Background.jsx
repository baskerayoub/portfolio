import "./Background.css"
import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

export default function Background({children}) {
  gsap.registerPlugin(ScrollTrigger,TextPlugin);
  gsap.to("#stars3:after",{
    width : "1px",
    scrollTrigger : {
      trigger: "#body",
      markers : true,
      start : "top top",
      end : "+300px",
      scrub : true,
    }
  })


  return (
    <div id='back'>
          <div id="body">

        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="title" >
            {children}
        </div>
      </div>





    </div>
  )
}
