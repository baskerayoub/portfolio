import { useState , useEffect } from "react"
import ButtonAbout from "../ButtonAbout"
import "./ContactForm.css"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
export default function ContactForm() {
    const [send , setsend] = useState("Send ?")
    const [sended , setSented] = useState(false)
    function SubmitForm(e) {
      e.preventDefault();
      setSented(true);
    }
useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo("#form",
    {
      filter: "blur(5px)",
      rotate: "10deg",
    },
    {
      filter: "blur(0px)",
      rotate: "0deg",
      scrollTrigger: {
        trigger: "#page4",
        start: "top-=550px top",
        end: "bottom-=300px bottom",
        scrub: true,
      },
    }
  );

  return () => {
    ScrollTrigger.getAll().forEach(t => t.kill());
  };
}, []);


  



    return (
    <div>
        <form action="" id="form" onSubmit={SubmitForm} className="relative text-lg border px-9 py-15 rounded-3xl lg:border md:border">
            <input type="text"  className="m-4 mt-9 border-b-2 border-white/50 focus:outline-0 focus:border-indigo-500" placeholder="Full Name" />
            <input type="text" className="m-4  border-b-2 border-white/50 focus:outline-0 focus:border-indigo-500" placeholder="Phone Number" />
            <br /><input type="email" required className="mt-9 m-3 w-2/2 border-white/50 border-b-2 focus:outline-0 focus:border-indigo-500" placeholder="Email" />
            <br /><textarea className="m-3 mt-9 w-2/2 border-white/50 border-b-2 focus:outline-0 focus:border-indigo-500" placeholder="Your Message Here :) " />
                <div className="inline-block text-xl mt-9 ml-3" onMouseEnter={()=>{setsend("Send !")}} onMouseLeave={()=>{setsend("Send ?")}}>

                    <ButtonAbout text={send} ColorBtn={"white"} ColorBtnTx={"black"}/>
                </div>
                <div className="text-center mt-12 text-white/50" style={{color : sended ? "#8FBC8F" : ""}}>
                  <p>{sended ? "I’ll get back to you soon.":"Use the form to send a message. "}</p>
                </div>


             

        </form>












    </div>
  )
}
