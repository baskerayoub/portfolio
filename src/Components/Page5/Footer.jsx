import "./footer.css";
import { FaInstagram , FaGithub , FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { gsap } from "gsap";
import TextPlugin from "gsap/TextPlugin";
import Elastic from "../elastic"
import { useEffect, useState } from "react";
export default function Footer() {
  const [textsocialcounter, setTextsocialcounter] = useState(1);



  useEffect(() => {
    gsap.registerPlugin(TextPlugin);


  }, []);
  let textsocial = ["MY SOCIAL SPACES","CONNECT WITH ME","FIND ME ONLINE","LET'S BE SOCIAL","FOLLOW ME"];
  function FooterHover() {
    gsap.fromTo("#social", { text: "X".repeat(textsocial[textsocialcounter].length) }
    , { text: textsocial[textsocialcounter],
      duration: 1 } 

    );
    setTimeout(() => {
      setTextsocialcounter(textsocialcounter >= textsocial.length - 1 ? 0 : textsocialcounter + 1);
    }, 1000);
  }


  


  return (
    <div id="footer" onMouseEnter={()=>FooterHover()} className="flex flex-col justify-around items-center h-full p-4 gap-4">
        <div>
          <h1 id="social" className="h-[30px] text-center tracking-[5px] font-bold text-3xl" >MY SOCIAL SPACES</h1>

        </div>
        <div className="flex justify-center items-center gap-8 text-4xl text-white/80">

            <Elastic xvalue={0.35} yvalue={0.35}>
              <a href="https://www.instagram.com/basker_ayoub/" target="_blank" rel="noopener noreferrer">

              <FaInstagram id="instagram"/>
              </a>
            </Elastic>
            <Elastic xvalue={0.35} yvalue={0.35}>
              <span>
                <a href="https://www.linkedin.com/in/baskerayoub/" target="_blank" rel="noopener noreferrer">
                <CiLinkedin className="text-[120%]" id="linkedin"/>
                </a>
              </span>
            </Elastic>
            <Elastic xvalue={0.35} yvalue={0.35}>
              <a href="https://github.com/baskerayoub" target="_blank" rel="noopener noreferrer">
              <FaGithub id="github"/>

              </a>
            </Elastic>
            <Elastic xvalue={0.35} yvalue={0.35}>
              <a href="https://discord.com/users/661288528197451805" target="_blank" rel="noopener noreferrer">
              <FaDiscord id="discord"/>

              </a>
            </Elastic>
            <Elastic xvalue={0.35} yvalue={0.35}>
              <FaXTwitter id="twitter"/>
            </Elastic>


        </div>
        <h1 className="text-white/60">
          &copy;{" "} <span id="year">{new Date().getFullYear()}</span> BasKer. All rights reserved.
          </h1>
    </div>
  )
}
