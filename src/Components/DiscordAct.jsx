import { useEffect, useState, useCallback } from "react";
import { FaDiscord } from "react-icons/fa";
import { CgGames } from "react-icons/cg";
import { FaSpotify } from "react-icons/fa";

export default function DiscordActivity({ DsAct }) {
  const [data, setData] = useState(null);

  // Memoize the fetch function to keep it clean
  const fetchDiscordData = useCallback(() => {
    fetch("https://api.lanyard.rest/v1/users/661288528197451805")
      .then((res) => res.json())
      .then((json) => {
        if (json.success) {
          setData(json.data);
        }
      })
      .catch((err) => console.error("Discord Fetch Error:", err));
  }, []);

  // Effect runs on mount AND whenever DsAct (isMobileOpen) becomes true
  useEffect(() => {
    if (DsAct) {
      fetchDiscordData();
    }
  }, [DsAct, fetchDiscordData]);

  // Initial fetch for Desktop hover
  useEffect(() => {
    fetchDiscordData();
  }, [fetchDiscordData]);

  const getAssetUrl = (act) => {
    if (!act.assets || !act.assets.large_image) 
      return 'https://archive.org/download/discord_202403/discord.png';

    const { large_image } = act.assets;
    if (large_image.includes("spotify:")) {
      return `https://i.scdn.co/image/${large_image.split(":")[1]}`;
    }
    if (large_image.startsWith("mp:external/")) {
      return `https://media.discordapp.net/${large_image.replace("mp:", "")}`;
    }
    return `https://cdn.discordapp.com/app-assets/${act.application_id}/${large_image}.png`;
  };

  if (!data) return <p className="text-white/50 text-xs">Connecting...</p>;

  return (
    <div className="text-white min-w-[220px] md:min-w-60 animate-in fade-in duration-500">
      <div className="flex justify-between items-start mb-4 border-b border-white/10 pb-2">
        <div>
          <h3 className="font-bold text-sm md:text-base leading-tight">
            {data.discord_user.global_name}
          </h3>
          <span className="text-[10px] uppercase tracking-wider font-semibold opacity-70">
            {data.discord_status === "online" ? "🟢 online" : 
             data.discord_status === "idle" ? "🟡 idle" : "⚫ offline"}
          </span>
        </div>
        <a href={`https://discord.com/users/${data.discord_user.id}`} target="_blank" rel="noopener noreferrer">
          <FaDiscord size={20} className="hover:text-indigo-400 transition-colors cursor-pointer" />
        </a>
      </div>

      <div className="space-y-3">
        {data.activities.length > 0 ? (
          data.activities.map((act, i) => (
            <div key={i} 
                  //  {act.type === 2 ? <FaSpotify size={15} color=""/> : <CgGames size={20}/>}
              style={
                act.type === 2
                  ? { backgroundImage: "linear-gradient(to right, #1fcc6250, transparent  , transparent)" }
                  : { backgroundImage: "linear-gradient(to right, #cc9e1f50, transparent  , transparent)" }
              }           
className="flex items-center justify-between gap-3 bg-white/5 p-2 rounded-lg border border-white/5">
              <div className="flex-1 min-w-0">
                <p className="text-[11px] font-bold truncate flex gap-2">
                   {act.type === 2 ? <FaSpotify size={15} color=""/> : <CgGames size={20}/>}
                   {act.type === 2 ? "Listening" : "Playing"}
                </p>
                <p className="text-xs text-zinc-300 truncate">{act.name}</p>
              </div>
              {act.assets?.large_image && (
                <img
                  src={getAssetUrl(act)} 
                  alt="Activity"
                  className="rounded-md object-cover w-10 h-10"
                />
              )}
            </div>
          ))
        ) : (
          <p className="text-white/30 text-[10px] italic">No active status</p>
        )}
      </div>
    </div>
  );
}