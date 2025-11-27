import React, { useEffect } from "react";
import Elastic from "../elastic";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ThirdRight.css";

import { FaBootstrap , FaReact , FaNode , FaPython , FaJs  , FaGitAlt , FaCss3  } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiJqueryLogo , DiMysql , DiMongodb , DiPhp ,  } from "react-icons/di";


gsap.registerPlugin(SplitText, ScrollTrigger);
  const Icons = [
              <FaCss3 />,
              <RiTailwindCssFill />,
              <FaBootstrap />,
              <FaJs />,
              <DiJqueryLogo />,
              <FaNode />,
              <FaReact />,
              <FaGitAlt />,
              <FaPython />,
              <DiMysql />,
              <DiMongodb />,
              <DiPhp />



  ]
function ThirdRight() {



  return (
    <div className="flex flex-col justify-evenly h-screen">
      <div>
        <h1 className="allskils text-center">Hard Skills</h1>
      </div>

      <div id="lngsicons" className="border border-black rounded-lg  text-5xl h-[260px] overflow-hidden">

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


      </div>
      <div className="w-lg h-[100px] text-center text-lg">sd</div>
    </div>
  );
}

export default React.memo(ThirdRight);
