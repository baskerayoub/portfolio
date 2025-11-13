import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin, ScrollTrigger);

export default function TitleMainPage({ hoveron, hoveroff }) {
  
  useEffect(() => {
    gsap.to(".TitleMainPage", {
      scale: 0.5,
      opacity: 0.1,
      scrollTrigger: {
        trigger: "#body",
        scrub: 0.1,
        start: "center top",
        end: "bottom top",
      },
    })

  }, []);

  const MouseEnterOnBasker = () => {
    gsap.to("#Ayoub", {
      text: "BasKer",
      duration: 1.5,
      ease: "power2.inOut",
    });
  };

  const MouseLeaveOnBasker = () => {
    gsap.to("#Ayoub", {
      text: "Ayoub.",
      duration: 1,
      ease: "power2.inOut",
    });
  };

  return (
    <div id="ayoub">
      <span onMouseEnter={hoveron} onMouseLeave={hoveroff}>
        Hi, I'm{" "}
        <span
          id="Ayoub"
          onMouseLeave={MouseLeaveOnBasker}
          onMouseEnter={MouseEnterOnBasker}
        >
          Ayoub.
        </span>
      </span>
      <br />
      <span id="span2" onMouseEnter={hoveron} onMouseLeave={hoveroff}>
        Front-End Developer & Designer
      </span>
    </div>
  );
}
