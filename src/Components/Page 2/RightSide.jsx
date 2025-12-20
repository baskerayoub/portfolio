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
    1: "I am <b id='AyoubBousskryIn2'>Ayoub Bousskry</b>, and I studied at <b>CMC(Cité des Métiers et des Compétences ) Laayoune</b>, where I followed a professional training program focused on digital development and modern technical solutions.",
    2: "After completing this program, I graduated as a <b>Full Stack Developer</b>, gaining the ability to work on both <b>front-end</b> and <b>back-end</b> development with a solid understanding of how complete web applications are built.",
    3: "Over time, I discovered a strong interest and natural talent in Front-End Development, especially in creating user interfaces that combine logic, creativity, and usability.",
    4: "Alongside web development, I have solid skills in <b>Python</b>, which I use for problem-solving, automation, and building efficient technical solutions that complement my web projects.",
    5: "Thats it for now :)",
  };

  useEffect(() => {
    gsap.fromTo("#FirstParagraphhe", {
      duration: 0.7,
      text: "",
      color : "orange",
      filter : "blur(1px)",
      
    }, {
      duration: 2.5,
      filter : "blur(0px)",
      stagger: 0.1,
      color : "black",
      text: paragraphs[pagescounter],
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
        start: "top-=300 center",
      end: "bottom bottom",
      scrub: true,
    }



    })

    
  }, []);
  return (
    <div className="">
        <div className="RightSideContainer mt-10 gap-12 scale-110 flex flex-col justify-between text-center">
          <div>
          <Elastic xvalue={0.15} yvalue={0.15} >
            <h1 id="TitleRs" onMouseEnter={whoveron} onMouseLeave={whoveroff}>Who the hell am i ?</h1>
          </Elastic>
          </div>




            <div id="paragraphes" className="flex gap-15 lg:flex-row md:flex-row flex-col justify-between items-center h-[250px]">
          <Elastic xvalue={0.1} yvalue={0.1} >
              <div className="lg:mr-1 md:mr-15 mt-5">

              <ArrowButton onck={PreviousPage} counter={pagescounter + "/5"} Direction="left" BorderColor={pagescounter <= 1 ? "gray" : ""}/>
            </div>

            </Elastic>


              <p className="mt-15 text-lg leading-8 w-lg " id="FirstParagraphhe"
              onMouseEnter={parahoveron} onMouseLeave={parahoveroff}
              >

              </p>
              <Elastic xvalue={0.1} yvalue={0.1} >
              <div className="lg:ml-1 md:ml-15 mt-14">
                <ArrowButton onck={NextPage} counter={pagescounter + "/5"} Direction="right" BorderColor={pagescounter >= 5 ? "gray" : ""}/>
              </div>
              </Elastic >



            </div>

            <div id="BtnSkills" className="lg:mt-20 md:mt-20 mt-75 inline-block">
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
