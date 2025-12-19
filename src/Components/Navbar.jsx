import { useEffect, useRef } from "react"
import Elastic from "./elastic"
import gsap from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function Navbar() {
  const navRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)

    let hidden = false

    ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate(self) {
        // self.direction: 1 = down, -1 = up
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
  }, [])

  return (
    <div className="fixed top-0 w-full flex justify-center z-50 pointer-events-none">
      <div
        ref={navRef}
        className="pointer-events-auto flex justify-around items-center mt-6
        border border-white/10 rounded-2xl
        backdrop-blur-xl bg-white/5
        lg:w-lg md:w-2xs px-6 py-3 shadow-lg
        scale-110
        "
      >
        <div className="font-bold lg:block md:hidden hidden mr-15">
          <Elastic xvalue={0.35} yvalue={0.35}>
            <h1 className="text-xl">BasKer</h1>
          </Elastic>
        </div>

        <ul className="flex gap-8 text-sm cursor-pointer">
          <li onClick={() => gsap.to(window, { scrollTo: 0, duration: 1 })}>
            Home
          </li>
          <li
            onClick={() =>
                gsap.to(window, { scrollTo: "#page2", duration: 1 })
            }
            >
            About
          </li>
          <li
            onClick={() =>
                gsap.to(window, { scrollTo: "#page4", duration: 1 })
            }
            >
            Contact
          </li>
        </ul>
      </div>
    </div>
  )
}
