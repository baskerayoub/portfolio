import "./RightSide.css"
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import ButtonAbout from "../ButtonAbout";
import Elastic from "../elastic"
import { useState } from "react";
import ArrowButton from "./ArrowButton";



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


      

    gsap.to(".RightSideContainer",{
    position: "relative",
    left: "780px",
    rotate: "-30deg",
    filter: "blur(20px)",
    scale : .1,
    scrollTrigger: {
      trigger: "#page3",
      start: "top center",
      end: "bottom bottom",
      scrub: true,
    }



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




            <div id="paragraphes" className="flex flex-row justify-between items-center h-[250px]">
          <Elastic xvalue={0.1} yvalue={0.1} >
              <div className="mr-11">

              <ArrowButton onck={PreviousPage} counter={pagescounter + "/5"} Direction="left" BorderColor={pagescounter <= 1 ? "gray" : ""}/>
            </div>

            </Elastic>


              <p className="mt-15 text-lg leading-8 w-lg" id="FirstParagraphhe"
              onMouseEnter={parahoveron} onMouseLeave={parahoveroff}
              >

              </p>
              <Elastic xvalue={0.1} yvalue={0.1} >
              <div className="ml-11">
                <ArrowButton onck={NextPage} counter={pagescounter + "/5"} Direction="right" BorderColor={pagescounter >= 5 ? "gray" : ""}/>
              </div>
              </Elastic >



            </div>

            <div id="BtnSkills" className="mt-15">
              <ButtonAbout ColorBtn="black"
                            ColorBtnTx = "azure"
                            text="Let's Check Skills"
                            scrolto="#page3"
              />
            </div>




          
        </div>

    </div>
  )
}
