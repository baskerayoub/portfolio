import "./leftside.css";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
export default function LeftSide({HoverOn , HoverOff}) {
  gsap.registerPlugin(TextPlugin,ScrollTrigger);

  useEffect(() => {
    gsap.to("#leftsideContainer",{
      scale : 1,
      left : "0px",
      opacity : 1,
      rotate : "0deg",
      duration : 2,
      filter : "blur(0px)",
      ease : "power2.out",
      scrollTrigger: {
        trigger : "body",
        start : "top+=800px top",
        end : "bottom+=600px top",
        scrub : 0.5,
        markers : true,
      },
      
      
    },

  )



  }, []);


  function plustobasker() {
    gsap.to("#plustobasker", {
      text: "BASKER",
      duration: 1,
      ease: "power2.inOut",
    });
  }
  function baskertoplus() {
    gsap.to("#plustobasker", {
      text: "+",
      duration: 1,
      ease: "power2.inOut",
    });
  }


  return (
    <div>
        <div id="leftsideContainer" className="mt-15" style={{scale : 0.5 , opacity : 0.1 , rotate : "10deg" , filter : "blur(20px)" }}>
            <div className="Picture rounded-2xl" onMouseLeave={HoverOff} onMouseEnter={HoverOn}>
                <img 
                onMouseEnter={plustobasker}
                onMouseLeave={baskertoplus}
                src="BaskerPicture.png" alt="" className="w-lg border border-black scale-130 hover:scale-110 duration-500 ease-in-out" />
            </div>
            <div>
                <h1 id="plustobasker" className="text-xl text-center -top-9 relative text-white">+</h1>
            </div>
        </div>


    </div>
  )
}
