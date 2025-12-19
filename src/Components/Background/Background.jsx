import React, { useEffect } from "react";
import "./Background.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

function Background({ children }) {
useEffect(() => {
  const stars = document.querySelectorAll("#stars, #stars2, #stars3");
  let scrollTimeout = null;

  gsap.to("#body", {
    scale: 1,
    transformOrigin: "center center",
    scrollTrigger: {
      trigger: "#body",
      start: "top top",
      end: "bottom top",
      scrub: true,

      onUpdate: (self) => {
        const isScrolling = Math.abs(self.getVelocity()) > 5;

        if (isScrolling) {
          // وقف الأنيميشن ملي كتسكرول
          stars.forEach((s) => (s.style.animationPlayState = "paused"));

          clearTimeout(scrollTimeout);

          // ملي كتحبس السكرول بشوية الأنيميشن يرجع يخدم
          scrollTimeout = setTimeout(() => {
            stars.forEach((s) => (s.style.animationPlayState = "running"));
          },100);
        }
      },
    },
  });

  return () => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    clearTimeout(scrollTimeout);
  };
}, []);






  return (
    <div id="back">
      <div id="body">
        <div className="starsparent">
          <div id="stars" className="str"></div>
          <div id="stars2" className="str"></div>
          <div id="stars3" className="str"></div>
        </div>
      </div>
      <div id="title">{children}</div>
    </div>
  );
}

export default React.memo(Background);
