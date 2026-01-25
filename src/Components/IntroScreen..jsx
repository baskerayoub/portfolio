'use client';

import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import "./Introscreen.css"
export default function IntroScreen({ onComplete }) {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const progressRef = useRef(null);
  const [currentTime, setCurrentTime] = useState("");
  const [index, setIndex] = useState(0);

const greetings = [
  "Hello",
  <span id="loader">مــرحــبا</span>,
  "Bonjour",
  "ⴰⵣⵓⵍ",
];
  // Time effect
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleString("en-US", {
        month: "short", day: "numeric", hour: "2-digit", minute: "2-digit", hour12: true,
      }) + " UTC");
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const FIRST_WORD_DURATION = 1.0; 
    const FAST_WORD_DURATION = 0.4;  
    const TRANSITION_TIME = 0.2;     

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.5,
          ease: "power4.inOut",
          onComplete,
        });
      },
    });

    gsap.set(textRef.current, { opacity: 0, y: 40, filter: "blur(10px)" });
    gsap.set(progressRef.current, { scaleX: 0 });

    let currentTimeTrack = 0;

    greetings.forEach((_, i) => {
      const isFirst = i === 0;
      const duration = isFirst ? FIRST_WORD_DURATION : FAST_WORD_DURATION;

      tl.to(textRef.current, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: TRANSITION_TIME,
        ease: "power3.out",
        onStart: () => setIndex(i),
      }, currentTimeTrack);

      if (i < greetings.length - 1) {
        tl.to(textRef.current, {
          opacity: 0,
          y: -40,
          filter: "blur(10px)",
          duration: TRANSITION_TIME,
          ease: "power3.in",
        }, currentTimeTrack + duration - TRANSITION_TIME);
      }

      currentTimeTrack += duration;
    });

    tl.to(progressRef.current, {
      scaleX: 1,
      duration: currentTimeTrack,
      ease: "none",
    }, 0);

  }, [onComplete]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-[99999] flex flex-col justify-center items-center bg-[#05050f]/70 backdrop-blur-xl">
      <div className="relative z-10 w-full max-w-4xl px-8 flex flex-col items-center">
        
        {/* Time display positioned on top of the words */}
        <div className="mb-4 text-gray-300/60 font-mono text-sm tracking-widest uppercase">
          {currentTime}
        </div>

        <div className="relative h-48 flex items-center justify-center mb-16">
          <div
            ref={textRef}
            className="text-center text-8xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-[#66a1e4] via-[#96b8df] to-blue-200"
          >
            {greetings[index]}
          </div>
        </div>

        <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
          <div ref={progressRef} className="h-full w-full bg-blue-800" style={{ transformOrigin: "left" }} />
        </div>
      </div>
    </div>
  );
}