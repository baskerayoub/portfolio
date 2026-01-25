import React, { useEffect, useState, useCallback } from "react";
import "./TopArea.css";
import "./ticket.css";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import { BiReset } from "react-icons/bi";

gsap.registerPlugin(Draggable, InertiaPlugin, TextPlugin);

function TopArea({ MouseEnterInCart, MouseLeaveInCart, softMouseEnter, softMouseLeave }) {
  const [ticket, setticket] = useState(5);
  // NEW: Track if the current card has been moved
  const [isMoved, setIsMoved] = useState(false);

  const softText = [
    "I can quickly adapt to changes in projects and workflows, finding effective solutions in dynamic environments.",
    "I am always improving my skills and learning new technologies to stay up to date.",
    "I approach problems logically, analyze root causes, and implement practical solutions.",
    "I write clean, well-structured code that follows best practices and is easy to maintain.",
    "I quickly understand new concepts and apply them efficiently in real projects."
  ];

  const resetTickets = () => {
    Draggable.get("#tickett" + ticket)?.kill();
    setticket(5);
    setIsMoved(false); // Reset the moved status

    gsap.set("[id^='tickett'], #flexibleAdaptability", {
      display: "block",
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
      clearProps: "all"
    });
  };

  const RealeseDrag = useCallback(function () {
    if (Math.abs(this.y) > 50) { 
      gsap.to(this.target, {
        opacity: 0,
        ease: "power3.out",
        display: "none",
        onComplete: () => {
          setticket((prev) => prev - 1);
          setIsMoved(false); // Reset for the next card in the stack
        },
      });
    } else {
      gsap.to(this.target, { y: 0, x: 0, rotate: 0, duration: 0.5 });
      // If it snaps back to start, we consider it "not moved" enough to reset
      if (this.y === 0) setIsMoved(false);
    }
  }, [ticket]);

  useEffect(() => {
    if (ticket >= 1) {
      gsap.to("#softskillstext", {
        text: softText[ticket - 1],
        duration: 0.8,
        ease: "power2.out"
      });
    }
  }, [ticket]);

  useEffect(() => {
    if (ticket < 1) return;

    const ctx = gsap.context(() => {
      Draggable.create("#tickett" + ticket, {
        bounds: "#bigcontainergrag",
        type: "y",
        edgeResistance: 0.7,
        dragResistance: 0.1,
        inertia: true,
        minimumMovement: 6, 
        snap: { y: [0, -200, 400] },
        // NEW: Detect when the user starts dragging
        onDragStart: () => setIsMoved(true),
        onDrag: function() {
          if (Math.abs(this.y) > 2) {
            gsap.to(this.target, {
              rotate: this.y * 0.31,
              x: Math.abs(this.y * 0.05),
              duration: 0.1,
              overwrite: "auto"
            });
          }
        },
        onRelease: RealeseDrag,
        trigger: ["#text" + ticket, "#tickett" + ticket],
      });
    });

    return () => ctx.revert();
  }, [ticket, RealeseDrag]);

  // Static card logic
  useEffect(() => {
    Draggable.create("#flexibleAdaptability", {
      bounds: "#bigcontainergrag",
      type: "x,y",
      onDragStart: () => setIsMoved(true), // Also enable reset if the base card moves
      onRelease: function () {
        gsap.to(this.target, { x: 0, y: 0, duration: 1, ease: "elastic.out(1, 0.3)" });
      },
    });
  }, []);

  return (
    <div className="flex flex-col justify-evenly h-screen">
      <h1 className="allskils text-center lg:block md:block hidden">Soft Skills</h1>
      
      <div className="relative">
        <div id="bigcontainergrag" className="border border-black rounded-xl p-20 flex justify-center items-center">
          <div id="tck" className="flex relative">
             <div id="lhamich">{ticket}</div>
             <div className="relative text-center" onMouseEnter={MouseEnterInCart} onMouseLeave={MouseLeaveInCart}>
                <div id="flexibleAdaptability" className="relative w-[380px]"><p id="textflex">Flexible Adaptability</p></div>
                <div id="tickett2" className="absolute top-0 left w-[373px]"><p id="text2">Continuous Learning</p></div>
                <div id="tickett3" className="absolute top-0 left w-[366px]"><p id="text3">Problem Solving</p></div>
                <div id="tickett4" className="absolute top-0 left w-[359px]"><p id="text4">Code Discipline</p></div>
                <div id="tickett5" className="absolute top-0 left w-[352px] cursor-pointer"><p id="text5">Fast Learning</p></div>
             </div>
          </div>
        </div>

        <button 
          onClick={resetTickets}
          // DISABLED LOGIC: Disable if on Card 5 AND it hasn't moved
          disabled={ticket === 5 && !isMoved}
          className={`absolute flex justify-center items-center gap-2 top-2 left-2 border rounded-full px-3 py-2 text-sm transition-all z-50 
            ${ticket === 5 && !isMoved 
              ? "opacity-30 cursor-not-allowed bg-gray-100" 
              : "opacity-100 hover:bg-gray-100 bg-white shadow-sm"}`}
        >
          <BiReset /> Reset
        </button>
      </div>

      <div className="flex justify-around items-center h-[100px]">
        <p className="font-bold">&raquo;</p>
        <p className="w-lg text-center text-lg" id="softskillstext"></p>
      </div>
    </div>
  );
}

export default React.memo(TopArea);