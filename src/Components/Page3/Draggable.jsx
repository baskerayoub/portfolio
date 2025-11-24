import React from "react";
import Ticket from "./Ticket";

function Draggable({ MouseEnterInCart, MouseLeaveInCart }) {
  return (
    <div>
      <div
        id="bigcontainergrag"
        className="border border-black rounded-xl p-20 flex justify-center items-center"
      >
        <Ticket
          MouseEnterInCart={MouseEnterInCart}
          MouseLeaveInCart={MouseLeaveInCart}
        />
      </div>
    </div>
  );
}

export default React.memo(Draggable);
