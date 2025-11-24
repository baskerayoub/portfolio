import React from "react";

function ArrowButton({ onck, counter, Direction, BorderColor }) {
  return (
    <div
      onClick={onck}
      className="rounded-full border border-black p-4 flex flex-col items-center justify-center cursor-pointer hover:bg-black hover:text-white transition"
      style={{
        border: `solid 1px ${BorderColor}`,
        color: BorderColor,
      }}
    >
      <i className={`fa-solid fa-arrow-${Direction}`}></i>
      <b>{counter}</b>
    </div>
  );
}

export default React.memo(ArrowButton);
