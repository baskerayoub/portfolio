import React, { useEffect } from "react";
import "./Background.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

function Background({ children }) {
  useEffect(() => {
    gsap.to("#body", {
      scale: 1,
      transformOrigin: "center center",
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: "#body",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div id="back">
      <div id="body">
        <div className="starsparent">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
        </div>
      </div>
      <div id="title">{children}</div>
    </div>
  );
}

export default React.memo(Background);
