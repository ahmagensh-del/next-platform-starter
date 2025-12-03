import GlassPanel from "../components/GlassPanel";
import AuraSphere from "../components/AuraSphere";

export default function Page() {
  return (
    <div className="relative min-h-screen flex items-center justify-center p-6">

      {/* BACKGROUND BIG AURA SPHERE */}
      <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-50">
        <div className="aura-big w-[900px] h-[900px] rounded-full bg-gradient-to-br from-[#00eaff] to-[#7b00ff] blur-3xl" />
      </div>

      {/* MAIN PANEL */}
      <GlassPanel>
        
        {/* SMALL AURA */}
        <div className="flex justify-center mb-10">
          <AuraSphere size={180} />
        </div>

        {/* TEXT */}
        <h1 className="text-4xl font-bold text-center mb-3">AuraScan AI</h1>

        <p className="text-center text-lg text-gray-300 mb-10">
          See how others really see you.
        </p>

        {/* INPUT */}
        <input
          type="text"
          placeholder="Paste your photo link..."
          className="w-full p-4 rounded-xl bg-black/30 border border-white/20 text-white focus:outline-none mb-6"
        />

        {/* SCAN BUTTON */}
        <button
          className="btn-gradient w-full p-4 rounded-xl font-semibold shadow-xl hover:opacity-90 transition"
        >
          Scan Aura
        </button>

        {/* TELEGRAM BUTTON */}
        <a
          href="https://t.me/EmeraldCabinet"
          target="_blank"
          className="w-full mt-4 p-4 block rounded-xl bg-white/20 border border-white/30 text-center hover:bg-white/30 transition"
        >
          Open EmeraldCabinet
        </a>
      </GlassPanel>
    </div>
  );
}
