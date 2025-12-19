import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
export default function ContactText({ContactTextHoverOn , ContactTextHoverOff}) {
  useEffect(() => {
    gsap.registerPlugin(SplitText, ScrollToPlugin, ScrollTrigger);

    const split = new SplitText("#Contact-Text", { type: "chars" });
    const chars = split.chars;

    gsap.set(chars, { opacity: 0.1 }); 

    gsap.to(chars, {
      opacity: 1,
      scale : 1.15,
      stagger: 1,
      scrollTrigger: {
        trigger: "#page4",
        start: "top-=550px top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    return () => {
      split.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div>
      <h1 id="Contact-Text" className="hover:cursor-none lg:block md:block hidden lg:text-[100px] md:text-[20px]" onMouseEnter={ContactTextHoverOn} onMouseLeave={ContactTextHoverOff}>
        <span className="text-indigo-500 ">
            Let’s get in touch 
        </span><br />
        whether you have a project in mind, <br />
        a question, or just want to say hello.
      </h1>
    </div>
  );
}
