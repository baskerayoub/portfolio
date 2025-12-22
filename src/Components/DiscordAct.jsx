import { useEffect, useState } from "react";
import { FaDiscord } from "react-icons/fa";

export default function DiscordActivity({DsAct}) {
  
  const [data, setData] = useState(null);
  const getAssetUrl = (act) => {
  // 1. Safety check: If there's no image, return a fallback or null
  if (!act.assets || !act.assets.large_image) return 'https://archive.org/download/discord_202403/discord.png';

  const { large_image } = act.assets;

  // 2. Logic for Spotify
  if (large_image.includes("spotify:")) {
    const spotifyId = large_image.split(":")[1];
    return `https://i.scdn.co/image/${spotifyId}`;
  }

  // 3. Logic for External/Proxy images (common in some custom RPCs)
  if (large_image.startsWith("mp:external/")) {
    return `https://media.discordapp.net/${large_image.replace("mp:", "")}`;
  }

  // 4. Logic for standard Discord Applications (Games/Apps)
  return `https://cdn.discordapp.com/app-assets/${act.application_id}/${large_image}.png`;
};

  useEffect(() => {
    fetch("https://api.lanyard.rest/v1/users/661288528197451805")
      .then(res => res.json())
      .then(json => setData(json.data));
  }, [DsAct]);

  if (!data) return <p>No Discord activity</p>;

  return (
    <div style={{ color: "white" , mixBlendMode : "darken"  }}>
      <h3 className="mb-5 w-48"><span className="mr-2">{data.discord_user.global_name} </span>



      <span className="text-xs">
        {data.discord_status === "online" ? "🟢 online" : data.discord_status === "idle" ? "🟡 idle" : "⚫ offline"}
      </span>
      
      
      
      
      </h3>
      <a href="https://discord.com/users/661288528197451805" target="_blank" rel="noopener noreferrer">
        <FaDiscord className="absolute right-5 top-3.5 text-lg"/>
      </a>        

      {data.activities.map((act, i) => (
        <div key={i} className="flex justify-center items-center text-sm" style={{ marginBottom: 20 }}>
          
          {act.name && <p className=" w-55"> Playing {act.name} <br />{act.state && <span className="text-white/50 text-xs">{act.state.split(" ").splice(0, 3).join(" ")}</span>}</p>}
          

          {act.assets?.large_image && (
            <img
            className="mix-blend-difference"
            id="imageAct"
            src={getAssetUrl(act)} 
            alt={act.assets?.large_text || "Activity Asset"}
            style={{ borderRadius: '8px', width: '58px', height: '58px',     mixBlendMode: 'normal',
    isolation: 'isolate' }}
/>
          )}

        </div>
      ))}
    </div>
  );
}
