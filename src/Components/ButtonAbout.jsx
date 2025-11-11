import Elastic from "./elastic"

export default function ButtonAbout({ColorBtn , ColorBtnTx, text}) {
  return (<>
      <Elastic>
    <div>

      <button id="btnab" className='font-bold p-4 rounded-lg relative'
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
