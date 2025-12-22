import { useEffect, useRef , useState } from "react"
import Elastic from "./elastic"
import gsap from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import DiscordAct from ".//DiscordAct"
export default function Navbar() {
  const navRef = useRef(null)
  const menuRef = useRef(null)
  const [DsAct , setDsAct] = useState (false) ;
  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)

    let hidden = false

    ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate(self) {
        if (self.direction === 1 && !hidden) {
          hidden = true
          gsap.to(navRef.current, {
            y: -80,
            opacity: 0,
            scale: 0.98,
            duration: 0.35,
            ease: "expo.out",
          })
        }

        if (self.direction === -1 && hidden) {
          hidden = false
          gsap.to(navRef.current, {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.35,
            ease: "expo.out",
          })
        }
      },
    })

    // initial state menu
    gsap.set(menuRef.current, {
      opacity: 0,
      y: -10,
      pointerEvents: "none",
    })
  }, [])

  const showMenu = () => {
    setDsAct(!DsAct)
    gsap.to(menuRef.current, {
      opacity: 1,
      y: 0,
      pointerEvents: "auto",
      duration: 0.3,
      ease: "power3.out",
    })
  }

  const hideMenu = () => {
    gsap.to(menuRef.current, {
      opacity: 0,
      y: -10,
      pointerEvents: "none",
      duration: 0.25,
      ease: "power3.in",
    })
  }

  return (
    <div
      id="navchiild"
     className="fixed top-0 w-full flex justify-center z-50 pointer-events-none">
      <div
        ref={navRef}
        className="pointer-events-auto flex justify-around items-center mt-6
        border border-white/10 rounded-2xl
        backdrop-blur-xl bg-white/5
        lg:w-lg md:w-2xs px-6 py-3 shadow-lg
        scale-110"
      >
        {/* LOGO + DROPDOWN */}
        <div
          className="relative font-bold lg:block md:hidden hidden mr-15"
          onMouseEnter={showMenu}
          onMouseLeave={hideMenu}
        >
          <Elastic xvalue={0.35} yvalue={0.35}>
            <h1 className="text-xl cursor-pointer">BasKer</h1>
          </Elastic>

          {/* DROPDOWN MENU */}
          <div
            ref={menuRef}
            className="absolute top-full left-0 mt-5
            bg-white/5 backdrop-blur-xl
            border border-white/10
            rounded-xl px-4 py-3
            

            "
          >
              <DiscordAct DsAct={DsAct} />
          </div>
        </div>

        {/* LINKS */}
        <ul className="flex gap-8 text-sm cursor-pointer">
          <Elastic xvalue={0.35} yvalue={0.35}>
          
          <li onClick={() => gsap.to(window, { scrollTo: 0, duration: 1 })}>
            Home
          </li>
          </Elastic>
          <Elastic xvalue={0.35} yvalue={0.35}>

          <li
            onClick={() =>
              gsap.to(window, { scrollTo: "#page2", duration: 1 })
            }
            >
            About
          </li>
            </Elastic>
          <Elastic xvalue={0.35} yvalue={0.35}>

          <li
            onClick={() =>
              gsap.to(window, { scrollTo: "#page4", duration: 1 })
            }
            >
            Contact
          </li>
            </Elastic>
        </ul>
      </div>
    </div>
  )
}
