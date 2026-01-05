import React, { useEffect, useCallback } from "react";
import "./leftside.css";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(TextPlugin, ScrollTrigger);

function LeftSide({ HoverOn, HoverOff }) {
  useEffect(() => {
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top+=800px top",
        end: "bottom+=600px top",
        scrub: true,
      },
    });

    tl1.to("#leftsideContainer", {
      scale: 1,
      left: "0px",
      opacity: 1,
      rotate: "0deg",
      duration: 2,
      filter: "blur(0px)",
    });

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#page3",
        start: "top-=300 center",
        end: "bottom bottom",
        scrub: 0.5,
      },
    });

    tl2.to("#leftsideContainer", {
      position: "relative",
      left: "-780px",
      rotate: "30deg",
      filter: "blur(10px)",
      scale: 0.1,
    });

    return () => {
      tl1.kill();
      tl2.kill();
    };
  }, []);

  const plustobasker = useCallback(() => {
    gsap.to("#plustobasker",{
      rotate : "360deg",
      duration : 1,
      onComplete : ()=>{
        gsap.to("#plustobasker", {
          text: "BASKER",
          duration: .5,
          ease: "power2.inOut",
        });


      }
    })
  }, []);

  const baskertoplus = useCallback(() => {
   gsap.to("#plustobasker", {
          text: "+",
          duration: .5,
          ease: "power2.inOut",
      onComplete : ()=>{
        gsap.to("#plustobasker",{
        rotate : "-360deg",
        duration : .5,
        });


      }
    })
  }, []);

  return (
    <div className="md:hidden lg:block sm:hidden hidden">
      <div

        id="leftsideContainer"
        className="mt-15 "
        style={{
          scale: 0.5,
          opacity: 0.1,
          rotate: "10deg",
          filter: "blur(20px)",
        }}
      >
        <div className="Picture rounded-2xl" onMouseLeave={HoverOff} onMouseEnter={HoverOn}>
          <img
            onMouseEnter={plustobasker}
            onMouseLeave={baskertoplus}
            src="BaskerPicture.webp"
            alt="Basker"
            className="w-lg border border-black scale-140 hover:scale-130 duration-500 delay-100 ease-in-out"
          />
        </div>
        <div>
          <h1 id="plustobasker" className="text-xl text-center -top-9 relative text-white">
            +
          </h1>
        </div>
      </div>
    </div>
  );
}

export default React.memo(LeftSide);
