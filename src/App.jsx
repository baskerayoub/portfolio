import { useState, useRef, useEffect, useCallback } from "react";
import gsap from "gsap";

import "./App.css";
import "./cursor.css";

import Navbar from "./Components/Navbar";
import ButtonAbout from "./Components/ButtonAbout";
import TitleMainPage from "./Components/TitleMainPage";
import Background from "./Components/Background/Background";
import LeftSide from "./Components/Page 2/LeftSide";
import RightSide from "./Components/Page 2/RightSide";
import ThirdLeft from "./Components/Page3/ThirdLeft";
import ThirdRight from "./Components/Page3/ThirdRight";

function App() {
  const [info, setinfo] = useState(false);
  const followerRef = useRef(null);
  const cursorChild = useRef(null);
  const animationRef = useRef(null);
  const lastTimeRef = useRef(0);

  // Throttle mouse move to 16ms (60fps)
  const handleMouseMove = useCallback((e) => {
    const now = Date.now();
    if (now - lastTimeRef.current < 16) return;
    lastTimeRef.current = now;

    if (animationRef.current) animationRef.current.kill();
    animationRef.current = gsap.to(followerRef.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.2,
      ease: "power3.out"
    });
  }, []);

  const handleClick = useCallback(() => {
    gsap.fromTo(
      followerRef.current,
      { scale: 1 },
      {
        scale: 1.5,
        duration: 0.2,
        yoyo: true,
        repeat: 1,
        ease: "power3.out"
      }
    );
  }, []);

  const HoverON = useCallback((scale) => {
    gsap.to(cursorChild.current, {
      scale: 0,
      duration: 0.5,
      ease: "power3.out",
      overwrite: "auto"
    });
    gsap.to(followerRef.current, {
      scale: scale,
      duration: 0.5,
      ease: "power3.out",
      overwrite: "auto"
    });
  }, []);

  const HoverOFF = useCallback(() => {
    gsap.to(cursorChild.current, {
      scale: 1,
      duration: 0.5,
      ease: "power3.out",
      overwrite: "auto"
    });
    gsap.to(followerRef.current, {
      scale: 1,
      duration: 0.5,
      ease: "power3.out",
      overwrite: "auto"
    });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
      if (animationRef.current) animationRef.current.kill();
    };
  }, [handleMouseMove, handleClick]);

  return (
    <>
      <div className="cursor" ref={followerRef}>
        <span className="cursorChild" ref={cursorChild}></span>
      </div>

      <div id="nav" onMouseEnter={() => HoverON(1)} onMouseLeave={HoverOFF}>
        <Navbar hoveroff={() => setinfo(true)} hoveron={() => setinfo(false)} />
      </div>

      <div id="page1">
        <Background>
          <div className="TitleMainPage">
            <div className="Tiitle text-center">
              <TitleMainPage hoveron={() => HoverON(5)} hoveroff={HoverOFF} />
            </div>
            <div className="buttonTitle mt-20" onMouseEnter={() => HoverON(1)} onMouseLeave={HoverOFF}>
              <ButtonAbout
                ColorBtn="azure"
                ColorBtnTx="#11334e"
                text="More About Me"
                scrolto="#page2"
              />
            </div>
          </div>
        </Background>
      </div>

      <div id="page2" className="mt-5">
        <div className="flex justify-evenly items-center text-black h-full">
          <LeftSide HoverOn={() => HoverON(3)} HoverOff={HoverOFF} />
          <RightSide
            whoveron={() => HoverON(4)}
            whoveroff={HoverOFF}
            parahoveron={() => HoverON(2.5)}
            parahoveroff={HoverOFF}
          />
        </div>
      </div>

      <div id="page3" className="text-black">
        <div className="flex flex-row text-4xl h-full justify-evenly items-center">
          <ThirdLeft
            MouseEnterInCart={() => HoverON(0)}
            MouseLeaveInCart={HoverOFF}
            softMouseEnter={() => HoverON(4)}
            softMouseLeave={HoverOFF}
          />
          <ThirdRight />
        </div>
      </div>
    </>
  );
}

export default App;
