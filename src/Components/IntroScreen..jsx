import React, { useRef, useEffect } from "react";
import gsap from "gsap";

export default function IntroScreen({ onComplete }) {
  const textRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        onComplete();
      },
    });

    const greetings = [
      "Hello", 
      "مـرحـبــا", 
      "Bonjour", 
      "ⴰⵣⵓⵍ" 
    ];

    greetings.forEach((word) => {
      tl.set(textRef.current, { textContent: word });
      
      tl.fromTo(
        textRef.current,
        { opacity: 0, scale: 0.9, filter: "blur(10px)" },
        { 
            opacity: 1, 
            scale: 1, 
            filter: "blur(0px)", 
            duration: 0.2, 
            ease: "power2.out" 
        }
      );

      tl.to(textRef.current, { 
          duration: 0.2 
      });

      tl.to(textRef.current, {
        opacity: 0,
        filter: "blur(10px)",
        scale: 1.1,
        duration: 0.2,
        ease: "power2.in",
      });
    });

    tl.to(containerRef.current, {
      duration: 1,
      opacity: 0,
      ease: "power2.inOut",
    });

  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[99999] bg-black/60 backdrop-blur-xl flex justify-center items-center select-none"
    >
      <h1
        ref={textRef}
        className="text-white text-7xl font-bold tracking-widest"
        style={{ fontFamily: "'El Messiri', sans-serif",
         }}
      >
        Hello
      </h1>
    </div>
  );
}