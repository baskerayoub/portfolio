import React from "react";
import "./TopArea.css";
import { useEffect, useState, useCallback } from "react";
import "./ticket.css";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";


gsap.registerPlugin(Draggable, InertiaPlugin);

function TopArea({
  MouseEnterInCart,
  MouseLeaveInCart,
  softMouseEnter,
  softMouseLeave,
}) {

  const [ticket, setticket] = useState(5);
  const [textTicket , settextTicket] = useState()
  const RealeseDrag = useCallback(
    function () {
      gsap.to(this.target, {
        opacity: 0,
        ease: "power3.out",
        display: "none",
        onComplete: () => setticket((prev) => prev - 1),
      });
    },
    []
  );

  const OnDrag = useCallback(function () {
    let rt = this.y * 0.31;
    let x = this.y * 0.05;
    gsap.to(this.target, {
      rotate: rt,
      x: Math.abs(x),
      duration: 0.2,
    });
  }, []);

  useEffect(() => {
    Draggable.create("#tickett" + ticket, {
      bounds: "#bigcontainergrag",
      type: "y",
      edgeResistance: 0.7,
      dragResistance: 0.1,
      inertia: true,
      snap: {
        y: [-200, 400],
      },
      onRelease: RealeseDrag,
      onDrag: OnDrag,
      trigger: ["#text" + ticket, "#tickett" + ticket],
    });

    return () => {
      Draggable.get("#tickett" + ticket)?.kill();
    };
  }, [ticket, RealeseDrag, OnDrag]);

  useEffect(() => {
    Draggable.create("#flexibleAdaptability", {
      bounds: "#bigcontainergrag",
      type: "x,y",
      edgeResistance: 0.7,
      dragResistance: 0.1,
      inertia: true,
      trigger: ["#flexibleAdaptability", "#textflex"],
      onRelease: function () {
        gsap.to(this.target, {
          x: 0,
          y: 0,
          duration: 1,
          ease: "elastic.out(1, 0.3)",
        });
      },
    });

    return () => {
      Draggable.get("#flexibleAdaptability")?.kill();
    };
  }, []);

  const softText = ["I can quickly adapt to changes in projects and workflows, finding effective solutions in dynamic environments."
                    ,"I am always improving my skills and learning new technologies to stay up to date."
                    ,"I approach problems logically, analyze root causes, and implement practical solutions."
                    ,"I write clean, well-structured code that follows best practices and is easy to maintain."
                    ,"I quickly understand new concepts and apply them efficiently in real projects."]
  useEffect(()=>{
    gsap.fromTo("#softskillstext",{
      text : "",
    },{
      text:softText[ticket - 1],
      duration : 1,


    }
  
  
  
  
  
  )





  },[ticket])










  return (
    <div className="flex flex-col justify-evenly h-screen">
      <div>
        <h1 className="allskils text-center lg:block md:block hidden">Soft Skills</h1>
      </div>
      <div>
        <div>
              <div
                id="bigcontainergrag"
                className="border border-black rounded-xl p-20 flex justify-center items-center"
              >
    <div id="tck" className="flex relative">
      <div id="lhamich" className="">
        {ticket}
      </div>

      <div
        className="relative text-center"
        onMouseEnter={MouseEnterInCart}
        onMouseLeave={MouseLeaveInCart}
      >
        <div id="flexibleAdaptability" className="relative w-[380px]">
          <p id="textflex">Flexible Adaptability</p>
        </div>

        <div id="tickett2" className="absolute top-0 left w-[373px]">
          <p id="text2">Continuous Learning</p>
        </div>
        <div id="tickett3" className="absolute top-0 left w-[366px]">
          <p id="text3">Problem Solving</p>
        </div>
        <div id="tickett4" className="absolute top-0 left w-[359px]">
          <p id="text4">Code Discipline</p>
        </div>
        <div id="tickett5" className="absolute top-0 left w-[352px] select-none cursor-pointer">
          <p id="text5">Fast Learning</p>
        </div>
      </div>
    </div>
              </div>
            </div>
      </div>
      <div className="flex justify-around items-center h-[100px]">
        <p className="font-bold">&raquo;</p>
        <p
          className="w-lg text-center text-lg"
          onMouseEnter={softMouseEnter}
          onMouseLeave={softMouseLeave}
          id="softskillstext"

          >

        </p>
      </div>
    </div>
  );
}

export default React.memo(TopArea);
