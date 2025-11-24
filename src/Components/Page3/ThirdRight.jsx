import React, { useEffect } from "react";
import Elastic from "../elastic";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

function ThirdRight() {
  const icons = [
    "fa-brands fa-react hover:text-[#61DBFB]",
    "fa-brands fa-css hover:text-[#264de4]",
    "fa-brands fa-sass hover:text-[#cd6799]",
    "fa-brands fa-bootstrap hover:text-[#7952b3]",
    "fa-brands fa-python hover:text-[#306998]",
    "fa-brands fa-laravel hover:text-[#ff2d20]",
    "fa-brands fa-php hover:text-[#777bb3]",
  ];

  useEffect(() => {
    gsap.to(".fa-brands", {
      filter: "blur(0px)",
      stagger: 0.5,
      scrollTrigger: {
        trigger: "#page3",
        start: "top-=400px top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="flex flex-col justify-evenly h-screen">
      <div>
        <h1 className="allskils text-center">Hard Skills</h1>
      </div>

      <div className="border border-black p-5 rounded-lg flex flex-row justify-center items-center gap-4 text-5xl h-[260px] overflow-hidden">
        {icons.map((iconItem, index) => (
          <Elastic xvalue={0.5} yvalue={0.5} key={index}>
            <i
              style={{ filter: "blur(5px)" }}
              className={iconItem}
            ></i>
          </Elastic>
        ))}
      </div>
      <div className="w-lg h-[100px] text-center text-lg">sd</div>
    </div>
  );
}

export default React.memo(ThirdRight);
