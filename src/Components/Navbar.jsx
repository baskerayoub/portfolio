import { useEffect, useRef, useState } from "react";
import Elastic from "./elastic";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DiscordAct from "./DiscordAct";

export default function Navbar() {
  const navRef = useRef(null);
  const menuRef = useRef(null); 
  const mobileMenuRef = useRef(null); 
  
  const [dsAct, setDsAct] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

    let hidden = false;
    const trigger = ScrollTrigger.create({
      start: "top top", // Fixed start point
      onUpdate(self) {
        // Stop hiding/showing if the mobile menu is currently open
        if (isMobileOpen) return;

        if (self.direction === 1 && !hidden && self.scroll() > 100) {
          hidden = true;
          gsap.to(navRef.current, { y: -120, opacity: 0, duration: 0.4, ease: "power2.out" });
        } else if (self.direction === -1 && hidden) {
          hidden = false;
          gsap.to(navRef.current, { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" });
        }
      },
    });

    return () => trigger.kill();
  }, [isMobileOpen]);

  // Mobile Menu Animation
  useEffect(() => {
    if (isMobileOpen) {
      gsap.to(mobileMenuRef.current, { 
        height: "auto", 
        opacity: 1, 
        marginTop: 16,
        duration: 0.5, 
        ease: "expo.out" 
      });
    } else {
      gsap.to(mobileMenuRef.current, { 
        height: 0, 
        opacity: 0, 
        marginTop: 0,
        duration: 0.3, 
        ease: "expo.in" 
      });
    }
  }, [isMobileOpen]);

  const handleLinkClick = (target) => {
    setIsMobileOpen(false);
    gsap.to(window, { scrollTo: target, duration: 1, ease: "power4.inOut" });
  };

  return (
    // "pointer-events-none" on parent so it doesn't block the custom cursor
    <nav className="fixed top-0 left-0 w-full flex justify-center z-950 pointer-events-none p-4 md:p-6 ">
      <div
        ref={navRef}
        className={`
          pointer-events-auto flex flex-col items-center 
          bg-zinc-900/40 backdrop-blur-xl border border-white/10 shadow-2xl
          transition-all duration-500 ease-in-out
          ${isMobileOpen ? "w-full rounded-3xl p-6" : "w-auto rounded-2xl px-6 py-3"}
          max-w-[95%] md:max-w-4xl backdrop-blur-lg
        `}
      >
        <div className="flex justify-between items-center w-full md:gap-16">
          <div 
            className="relative group"
            onMouseEnter={() => setDsAct(true)}
            onMouseLeave={() => setDsAct(false)}
          >
            <Elastic xvalue={0.3} yvalue={0.3}>
              <h1 className="text-xl font-bold text-white cursor-pointer tracking-wider">
                BasKer
              </h1>
            </Elastic>

            <div className={`
              absolute top-full left-0 mt-4 p-4
              bg-zinc-950/30 backdrop-blur-2xl border border-white/10 rounded-2xl
              transition-all duration-300 origin-top-left hidden md:block
              ${dsAct ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"}
            `}>
              <DiscordAct DsAct={dsAct} />
            </div>
          </div>

          <ul className="hidden md:flex items-center gap-10 text-sm font-medium text-zinc-300">
            {['Home', 'About', 'Contact'].map((item) => (
              <li 
                key={item}
                onClick={() => handleLinkClick(item === 'Home' ? 0 : `#page${item === 'About' ? 2 : 4}`)}
                className="hover:text-white transition-colors cursor-pointer relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          <button 
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 focus:outline-none"
          >
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileOpen ? "opacity-0" : ""}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>
        </div>

          <div
            ref={mobileMenuRef}
            className="w-full overflow-hidden opacity-0 md:hidden"
          >
            <div className="flex flex-col items-center gap-6 pt-6 pb-2">
              <ul className="flex flex-col gap-5 text-xl font-semibold text-center text-white">
                <li onClick={() => handleLinkClick(0)}>Home</li>
                <li onClick={() => handleLinkClick("#page2")}>About</li>
                <li onClick={() => handleLinkClick("#page4")}>Contact</li>
              </ul>
              <div className="w-full pt-6 border-t border-white/5">
                <DiscordAct DsAct={isMobileOpen} />
              </div>
            </div>
          </div>
      </div>
    </nav>
  );
}