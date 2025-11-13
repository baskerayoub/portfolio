import "./RightSide.css"
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ButtonAbout from "../ButtonAbout";
import Elastic from "../elastic"
import { useState } from "react";




export default function RightSide({whoveron , whoveroff , parahoveron , parahoveroff}) {

  const [pagescounter , setpagescounter] = useState(1);

  function NextPage() {
    setpagescounter(pagescounter >= 5 ? 5 : pagescounter + 1);
  }

  function PreviousPage() {
    setpagescounter(pagescounter <= 1 ? 1 : pagescounter - 1);
  }
  console.log(pagescounter);
  
  const pgs = pagescounter
  gsap.registerPlugin(SplitText,ScrollTrigger);

  const paragraphs = {
    1: "I'm <b id='AyoubBousskryIn2'>Ayoub Bousskry</b>, a passionate web developer and designer. I create stunning and user-friendly websites using HTML, CSS, and JavaScript, focusing on responsive and interactive experiences across all devices.",
    2: "My journey in web development started with a love for technology and design. & This passion led me to pursue a career where I can combine creativity and coding.",
    3: "I thrive on challenges and continuous learning & I stay updated with the latest trends and technologies to improve my skills and deliver high-quality projects.",
    4: "When I'm not coding, I explore new design concepts and contribute to open-source projects. I love connecting with others to create innovative and meaningful digital experiences.",
    5: "Thats it for now :)",
  };

  useEffect(() => {
    gsap.fromTo("#FirstParagraphhe", {
      duration: 0.7,
      text: "",
      color : "orange",
      filter : "blur(1px)",
      
      ease: "power2.out",
    }, {
      duration: 2.5,
      filter : "blur(0px)",
      stagger: 0.1,
      color : "black",
      text: paragraphs[pagescounter],
      ease: "power2.out",
    }
  
  
  
  
  
  );
  }, [pagescounter]);






  useEffect(() => {
    const split = new SplitText("#TitleRs", { type: "words,chars" });
    gsap.from(split.chars, {
      opacity: 0,
      stagger: 0.1,
      ease: "power3.out",
      scale : 2,  
      scrollTrigger: {
        trigger : "body",
        start : "top+=800px top",
        end : "bottom+=400px top",
        scrub : 0.5,


      },
      
    })
    
  }, []);
  return (
    <div className="">
        <div className="RightSideContainer mt-10 gap-12 scale-110 flex flex-col justify-around text-center">
          <div>
          <Elastic xvalue={0.15} yvalue={0.15} >
            <h1 id="TitleRs" onMouseEnter={whoveron} onMouseLeave={whoveroff}>Who the hell am i ?</h1>
          </Elastic>
          </div>

            <div id="paragraphes" className="flex flex-row justify-between items-center">
          <Elastic xvalue={0.5} yvalue={0.5} >

            <div
              onClick={PreviousPage}
              className="relative left-[-38px] rounded-full border border-black p-4 flex flex-col items-center justify-center cursor-pointer hover:bg-black hover:text-white transition"
              >
              <i className="fa-solid fa-arrow-left"></i>
              <b>{pagescounter + "/5"}</b>
            </div>

              </Elastic>


              <p className="mt-15 text-lg leading-8 w-lg" id="FirstParagraphhe"
              onMouseEnter={parahoveron} onMouseLeave={parahoveroff}
              >

              </p>
              <Elastic xvalue={0.5} yvalue={0.5} >
              <div
                onClick={NextPage}
                className="relative right-[-38px] rounded-full border border-black p-4 flex flex-col items-center justify-center cursor-pointer hover:bg-black hover:text-white transition"
                >
                <i className="fa-solid fa-arrow-right"></i>
                <b>{pagescounter + "/5"}</b>
              </div>
              </Elastic >



            </div>

            <div id="BtnSkills" className="mt-15">
              <ButtonAbout ColorBtn="black"
                            ColorBtnTx = "azure"
                            text="Let's Check Skills"
              />
            </div>




          
        </div>

    </div>
  )
}
