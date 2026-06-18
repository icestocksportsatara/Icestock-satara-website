import React, { useState } from "react";
import { medalTally } from "../mock";
import { MapPin } from "lucide-react";

const MEDAL_COLORS = {
  gold:   { bg: "#FFF8E1", border: "#F9A825", text: "#F57F17", emoji: "🥇", label: "Gold" },
  silver: { bg: "#F5F5F5", border: "#9E9E9E", text: "#616161", emoji: "🥈", label: "Silver" },
  bronze: { bg: "#FBE9E7", border: "#BF360C", text: "#BF360C", emoji: "🥉", label: "Bronze" },
};

const MedalBadge = ({ count, type }) => {
  if (count === 0) return null;
  const c = MEDAL_COLORS[type];
  return (
    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[13px] font-bold border"
      style={{ background: c.bg, borderColor: c.border, color: c.text }}>
      {c.emoji} {count} {c.label}
    </span>
  );
};

const totalMedals = (p) => p.gold + p.silver + p.bronze;

const PlayerCard = ({ player, rank }) => {
  const [imgError, setImgError] = useState(false);
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(20,58,85,0.07)] hover:shadow-[0_12px_40px_rgba(20,58,85,0.15)] transition-all duration-300 hover:-translate-y-1 flex flex-col">
      <div className="h-1.5 w-full" style={{ background: rank === 1 ? "linear-gradient(90deg,#F9A825,#FFD54F)" : rank === 2 ? "linear-gradient(90deg,#9E9E9E,#E0E0E0)" : rank === 3 ? "linear-gradient(90deg,#BF360C,#FF8A65)" : "#2e8bc0" }} />
      <div className="relative flex justify-center pt-6 pb-2">
        <div className="w-[110px] h-[110px] rounded-full overflow-hidden border-4 border-white shadow-md bg-[#eaf4fb]">
          {!imgError ? (
            <img src={player.photo} alt={player.name} className="w-full h-full object-cover object-top" onError={() => setImgError(true)} />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-[#2e8bc0] text-4xl font-bold select-none">
              {player.name.charAt(0)}
            </div>
          )}
        </div>
        {rank <= 3 && (
          <span className="absolute top-5 right-5 text-2xl">
            {rank === 1 ? "🥇" : rank === 2 ? "🥈" : "🥉"}
          </span>
        )}
      </div>
      <div className="px-5 pb-6 flex-1 flex flex-col items-center text-center">
        <h3 className="text-[17px] font-bold text-[#143a55] mb-1 leading-tight">{player.name}</h3>
        <p className="text-[12px] text-[#6b8294] mb-4 font-semibold uppercase tracking-wide">
          {totalMedals(player)} Medal{totalMedals(player) !== 1 ? "s" : ""}
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          <MedalBadge count={player.gold} type="gold" />
          <MedalBadge count={player.silver} type="silver" />
          <MedalBadge count={player.bronze} type="bronze" />
        </div>
      </div>
    </div>
  );
};

const MedalTallySection = () => {
  const sorted = [...medalTally.players].sort((a, b) => b.gold - a.gold || b.silver - a.silver || b.bronze - a.bronze);
  const totalGold   = medalTally.players.reduce((s, p) => s + p.gold, 0);
  const totalSilver = medalTally.players.reduce((s, p) => s + p.silver, 0);
  const totalBronze = medalTally.players.reduce((s, p) => s + p.bronze, 0);

  return (
    <section id="medals" className="bg-white py-20">
      <div className="relative mb-8">
        <div className="absolute left-0 right-0 top-[60%] h-[2px] bg-[#cfe4f2]" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10">
          <h2 className="inline-block text-[#143a55] font-bold text-[34px] md:text-[44px] bg-white pr-8">
            Medal Tally
          </h2>
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
        <div className="bg-[#f2f8fc] border border-[#cfe4f2] rounded-2xl px-6 py-5 mb-10 flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex-1">
            <p className="text-[12px] font-bold uppercase tracking-widest text-[#2e8bc0] mb-1">Tournament</p>
            <h3 className="text-[20px] md:text-[22px] font-bold text-[#143a55] leading-snug">{medalTally.tournament}</h3>
            <p className="flex items-center gap-1.5 text-[#385365] text-[14px] mt-2">
              <MapPin className="w-4 h-4 text-[#2e8bc0]" />{medalTally.venue}
            </p>
          </div>
          <div className="flex gap-4 shrink-0">
            {[
              { label: "Gold",   count: totalGold,   emoji: "🥇", color: "#F9A825" },
              { label: "Silver", count: totalSilver, emoji: "🥈", color: "#9E9E9E" },
              { label: "Bronze", count: totalBronze, emoji: "🥉", color: "#BF360C" },
            ].map((m) => (
              <div key={m.label} className="text-center bg-white rounded-xl px-4 py-3 shadow-sm border border-[#e6edf2] min-w-[72px]">
                <div className="text-2xl mb-1">{m.emoji}</div>
                <div className="text-[24px] font-extrabold leading-none" style={{ color: m.color }}>{m.count}</div>
                <div className="text-[11px] font-semibold text-[#6b8294] uppercase tracking-wide mt-0.5">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
          {sorted.map((player, i) => <PlayerCard key={player.id} player={player} rank={i + 1} />)}
        </div>
      </div>
    </section>
  );
};

export default MedalTallySection;
