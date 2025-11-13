import Elastic from "./elastic"
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { gsap } from "gsap";
export default function ButtonAbout({ColorBtn , ColorBtnTx, text}) {
  gsap.registerPlugin(ScrollToPlugin);
  

    function scroToPage2() {
      gsap.to(window ,{
        duration : 3,
        scrollTo :{
          y : "#page2",
          autoKill : true
        } ,
        ease : "power3.inOut",
        autokill : true
      })

    }



  
  return (<>
      <Elastic xvalue={0.35} yvalue={0.35} >
    <div>

      <button onClick={scroToPage2} id="btnab" className='font-bold p-4 rounded-lg relative'
      style={{"--colorbutton" : ColorBtn,
              "--colorbuttontx" : ColorBtnTx
      }}
      
      >
                 {text}
      </button>



    </div>
      </Elastic>
  </>
  )
}
