import { useEffect, useState } from "react";

export default function TimeZone({ TimeHover , TimeHoverOff }) {
  const [time, setTime] = useState("");
  const [hoverit, sethoverit] = useState(false);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();

      const formatter = new Intl.DateTimeFormat("fr-FR", {
        timeZone: "Africa/Casablanca",
        hour: "2-digit",
        minute: "2-digit",
        second: hoverit ? "2-digit" : undefined,
      });

      setTime(formatter.format(now));
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, [hoverit]);

  return (
    <div
      style={{ fontWeight: "bold", mixBlendMode: "difference" , padding : "3px"}}
      onMouseEnter={() => {
        TimeHover();      // trigger HoverON(8)
        sethoverit(true); // show seconds
      }}
      onMouseLeave={() => {
        sethoverit(false);
        TimeHoverOff();
        // hide seconds
      }}
    >
      <span style={{ marginRight: "5px" }}>{time}</span>
      GMT+1
    </div>
  );
}
