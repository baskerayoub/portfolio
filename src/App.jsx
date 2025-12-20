import { useState, useRef, useEffect, useCallback } from "react";
import gsap from "gsap";

import "./App.css";
import "./cursor.css";
// Import the new component
import IntroScreen from "./Components/IntroScreen."; 

import Navbar from "./Components/Navbar";
import ButtonAbout from "./Components/ButtonAbout";
import TitleMainPage from "./Components/TitleMainPage";
import Background from "./Components/Background/Background";
import LeftSide from "./Components/Page 2/LeftSide";
import RightSide from "./Components/Page 2/RightSide";
import ThirdLeft from "./Components/Page3/ThirdLeft";
import ThirdRight from "./Components/Page3/ThirdRight";
import ContactText from "./Components/Page4/ContactText"
import ContactForm from "./Components/Page4/ContactForm"
import Footer from "./Components/Page5/Footer";

import { ScrollToPlugin } from "gsap/ScrollToPlugin";


function App() {
  gsap.registerPlugin(ScrollToPlugin);

  // State to control the Intro Screen
  const [showIntro, setShowIntro] = useState(true);

  const followerRef = useRef(null);
  const cursorChild = useRef(null);
  const animationRef = useRef(null);
  const lastTimeRef = useRef(0);

  // ... (Keep all your existing Cursor Logic here: handleMouseMove, handleClick, HoverON, HoverOFF) ...
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
      overwrite: "auto",
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

  // If showing intro, we disable scrolling on the body to prevent users scrolling while screen is black
  useEffect(() => {
    if (showIntro) {
      document.body.style.overflowX = "hidden";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.overflowX = "hidden"; // maintain your original css
    }
  }, [showIntro]);

  return (
    <>
      {/* Render IntroScreen if showIntro is true */}
      {showIntro && <IntroScreen onComplete={() => setShowIntro(false)} />}

      <div className="cursor" ref={followerRef}>
        <span className="cursorChild" ref={cursorChild}></span>
      </div>

      <div id="nav" onMouseEnter={() => HoverON(1)} onMouseLeave={HoverOFF}>
        <Navbar/>
      </div>

      {/* Rest of your page content */}
      <div id="page1">
        <Background>
          <div className="TitleMainPage gap-20">
            <div className="Tiitle text-center mt-22 ">
              <TitleMainPage hoveron={() => HoverON(6)} hoveroff={HoverOFF} />
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
         {/* ... (Keep existing content for Page 2) ... */}
         <div className="flex lg:flex-row md:flex-col justify-center lg:scale-100 md:scale-120 scale-70 lg:justify-around md:justify-safe items-center text-black h-full">
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
         {/* ... (Keep existing content for Page 3) ... */}
         <div className="flex lg:flex-row md:flex-row flex-col lg:mb-0 md:mb-0 lg:scale-100 md:scale-120 scale-60 text-4xl h-full lg:justify-evenly md:justify-evenly justify-center items-center">
          <ThirdLeft
            MouseEnterInCart={() => HoverON(0)}
            MouseLeaveInCart={HoverOFF}
            softMouseEnter={() => HoverON(6)}
            softMouseLeave={HoverOFF}
          />
          <ThirdRight HoverOnHardSkils={() => HoverON(6)} HoverOffHardSkils={HoverOFF}/>
        </div>
      </div>

      <div id="page4" className="flex justify-around items-center">
         {/* ... (Keep existing content for Page 4) ... */}
         <div className="w-2/5 ml-5 lg:block md:block hidden lg:scale-100 md:scale-100 scale-50">
          <ContactText ContactTextHoverOn={()=>{HoverON(7)}} ContactTextHoverOff={HoverOFF}/>
        </div>
        <div className="w-3/5 flex justify-center">
          <ContactForm />
        </div>
      </div>

      <div id="page5">
        <Footer SocialTextOn={()=>{HoverON(5)}} SocialTextOff={HoverOFF}/>
          <button className="hover:cursor-pointer"
            onClick={() => gsap.to(window, { scrollTo: { y: "#page2" }, duration: 1 })}>return</button>
      </div>

    </>
  );
}

export default App;