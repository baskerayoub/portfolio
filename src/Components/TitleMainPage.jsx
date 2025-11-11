import { gsap } from "gsap";
    
import { TextPlugin } from "gsap/TextPlugin";



export default function TitleMainPage({hoveron , hoveroff}) {
    
    gsap.registerPlugin(TextPlugin);
    
    function MouseEnterOnBasker() {
        gsap.to("#Ayoub",{
            text:"BasKer",
            duration:1.5,
        })
    }
    function MouseLeaveOnBasker() {
        gsap.to("#Ayoub",{
            text:"Ayoub.",
            duration:1
        })
    }
    
  return (
    <div id="ayoub">
        <span onMouseEnter={hoveron} onMouseLeave={hoveroff}>Hi, I'm <span id="Ayoub" onMouseLeave={MouseLeaveOnBasker} onMouseEnter={MouseEnterOnBasker}>Ayoub.</span></span><br />
        <span id="span2" onMouseEnter={hoveron} onMouseLeave={hoveroff} >Front-End Developer & Designer</span>



    </div>
  )
}
