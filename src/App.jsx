import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

import "./App.css";
import "./cursor.css";

import Baskerinfo from "./Components/baskerinfo";
import Navbar from "./Components/Navbar";
import ButtonAbout from "./Components/ButtonAbout";
import TitleMainPage from "./Components/TitleMainPage";
import Background from "./Components/Background/Background";

function App() {
  const [info, setinfo] = useState(false);
  const followerRef = useRef(null);
  const cursorChild = useRef(null);




  useEffect(() => {
  const move = (e) => {
    gsap.to(followerRef.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.2,
      ease: "power3.out"
    });
  };

  const click = () => {
    gsap.to(followerRef.current, {
      scale : 1.5,
      duration: 0.2,
      ease: "power3.out"
    });

    // shrink back after
    gsap.to(followerRef.current, {
      scale : 1,
      duration: 0.2,
      delay: 0.2,
      ease: "power3.out"
    });
  };

  window.addEventListener("mousemove", move);
  window.addEventListener("click", click);

  return () => {
    window.removeEventListener("mousemove", move);
    window.removeEventListener("click", click);
  };
}, []);
  function HoverON(scale) {
      gsap.to(cursorChild.current, {
      scale : 0,
      duration: 0.5,
      ease: "power3.out"
    });
      gsap.to(followerRef.current, {
      scale : scale,
      duration: 0.5,
      ease: "power3.out"
    });
  }
  function HoverOFF() {
      gsap.to(cursorChild.current, {
      scale : 1,
      duration: 0.5,
      ease: "power3.out"
    });
      gsap.to(followerRef.current, {
      scale : 1,
      duration: 0.5,
      ease: "power3.out"
    });
  }
  
  return (
    <>
    
      <div className="cursor" ref={followerRef}>
        <span className="cursorChild" ref={cursorChild}></span>
      </div>


            <div id="nav" onMouseEnter={()=>{HoverON(1)}} onMouseLeave={HoverOFF}>
              <Navbar hoveroff={() => setinfo(true)} hoveron={() => setinfo(false)} />
            </div>
    <div id="page1">
        <Background>

            <div
              className="z-150 absolute left-[39.8%] flex justify-center mt-20"
              style={{ display: info ? "" : "none" }}
              >
              <Baskerinfo />
            </div>

            <div className="TitleMainPage">
              <div className="Tiitle text-center" >
                <TitleMainPage hoveron={()=>{HoverON(5)}} hoveroff = {HoverOFF}/>
              </div>
              <div className="buttonTitle mt-20"  onMouseEnter={()=>{HoverON(1)}} onMouseLeave={HoverOFF}>
                <ButtonAbout ColorBtn="azure"
                              ColorBtnTx = "#11334e"
                              text="More About Me"
                              />
              </div>
            </div>
          </Background>
    </div>


    <div id="page2" className="mt-5" >
      <div className="flex justify-around items-center text-black h-full">

      <div>sdssssssssss <br />sdsd</div>
      <div>sdssssssssss <br />sdsd</div>

      </div>

    </div>
    </>
  );
}

export default App;
