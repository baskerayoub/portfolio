import React, { useEffect } from "react";
import Elastic from "../elastic";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ThirdRight.css";

import { FaBootstrap , FaReact , FaNode , FaPython , FaJs  , FaGitAlt , FaCss3  } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiJqueryLogo , DiMysql , DiMongodb , DiPhp ,  } from "react-icons/di";
import { SiGreensock } from "react-icons/si";


gsap.registerPlugin(SplitText, ScrollTrigger);

function ThirdRight({HoverOnHardSkils ,HoverOffHardSkils }) {



  return (
    <div className="flex flex-col justify-evenly h-screen">
      <div>
        <h1 className="allskils text-center lg:block md:block hidden">Hard Skills</h1>
      </div>

      <div id="lngsicons" className="border border-black rounded-lg text-5xl h-[260px] overflow-hidden">

       <b className="hover:text-[#1572B6]" id="iconsLng"><FaCss3 /></b>
        <b className="hover:text-[#06B6D4]" id="iconsLng"><RiTailwindCssFill /></b>
        <b className="hover:text-[#7952B3]" id="iconsLng"><FaBootstrap /></b>
        <b className="hover:text-[#F7DF1E]" id="iconsLng"><FaJs /></b>

        <b className="hover:text-[#0769AD]" id="iconsLng"><DiJqueryLogo /></b>
        <b className="hover:text-[#339933]" id="iconsLng"><FaNode /></b>
        <b className="hover:text-[#61DAFB]" id="iconsLng"><FaReact /></b>
        <b className="hover:text-[#F05032]" id="iconsLng"><FaGitAlt /></b>

        <b className="hover:text-[#3776AB]" id="iconsLng"><FaPython /></b>
        <b className="hover:text-[#4479A1]" id="iconsLng"><DiMysql /></b>
        <b className="hover:text-[#47A248]" id="iconsLng"><DiMongodb /></b>
        <b className="hover:text-[#777BB4]" id="iconsLng"><DiPhp /></b>
        <b className="hover:text-[#47A248]" id="iconsLng"><SiGreensock /></b>


      </div>
      <div className="lg:flex md:flex md:justify-center lg:justify-center items-center h-[100px] hidden ">
        <b
          className="w-lg text-center text-lg"
          onMouseEnter={HoverOnHardSkils}
          onMouseLeave={HoverOffHardSkils}
          >
                Full stack development skills {" "}
              <span className="opacity-60" >
                   with continuous daily learning
                </span>
        </b>
      </div>
    </div>
  );
}

export default React.memo(ThirdRight);
