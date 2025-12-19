import React, { useEffect, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin, ScrollTrigger);

function TitleMainPage({ hoveron, hoveroff }) {
  useEffect(() => {
    gsap.to(".TitleMainPage", {
      scale: 0.5,
      opacity: 0.1,
      scrollTrigger: {
        trigger: "#body",
        scrub: true,
        start: "center top",
        end: "bottom top",
      },
    });
  }, []);

  const MouseEnterOnBasker = useCallback(() => {
    gsap.to("#Ayoub", {
      text: "BasKer",
      duration: 1.5,
    });
  }, []);

  const MouseLeaveOnBasker = useCallback(() => {
    gsap.to("#Ayoub", {
      text: "Ayoub.",
      duration: 1,
    });
  }, []);

  return (
    <div id="ayoub" className="flex flex-col ">
      <span onMouseEnter={hoveron} onMouseLeave={hoveroff} className="text-center lg:text-8xl md:text-8xl text-8xl">
        It's{" "}
        <span
          id="Ayoub"
          onMouseLeave={MouseLeaveOnBasker}
          onMouseEnter={MouseEnterOnBasker}
        >
          Ayoub.
        </span>
      </span>
      <br />
      <span id="span2"  onMouseEnter={hoveron} onMouseLeave={hoveroff} className="lg:text-4xl md:text-3xl">
        Front-End Developer & Designer
      </span>
    </div>
  );
}

export default React.memo(TitleMainPage);
