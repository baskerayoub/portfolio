import React from "react";
import "./TopArea.css";
import Draggable from "./Draggable";

function TopArea({
  MouseEnterInCart,
  MouseLeaveInCart,
  softMouseEnter,
  softMouseLeave,
}) {
  return (
    <div className="flex flex-col justify-evenly h-screen">
      <div>
        <h1 className="allskils text-center">Soft Skills</h1>
      </div>
      <div>
        <Draggable
          MouseEnterInCart={MouseEnterInCart}
          MouseLeaveInCart={MouseLeaveInCart}
        />
      </div>
      <div className="flex justify-center items-center">
        <p
          className="w-lg h-[100px] text-center text-lg"
          onMouseEnter={softMouseEnter}
          onMouseLeave={softMouseLeave}
        >
          I learn new things fast and write clean, organized code. I keep
          improving my programming skills, solve problems easily, and adapt
          quickly to changes.
        </p>
      </div>
    </div>
  );
}

export default React.memo(TopArea);
