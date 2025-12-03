export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-b from-black via-[#040b17] to-[#02060f] text-white relative overflow-hidden">

      {/* BIG AURA SPHERE (background) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-40 blur-3xl pointer-events-none">
        <div className="w-[900px] h-[900px] rounded-full bg-gradient-to-br from-[#0ff] to-[#8f00ff] animate-pulse" />
      </div>

      {/* MAIN PANEL */}
      <div className="backdrop-blur-2xl bg-white/10 border border-white/20 shadow-2xl rounded-3xl p-10 max-w-lg w-full relative z-10">

        {/* SMALL AURA SPHERE */}
        <div className="mx-auto mb-8 w-40 h-40 rounded-full bg-gradient-to-br from-[#00eaff] to-[#c400ff] animate-ping shadow-[0_0_40px_#7f00ff]" />

        {/* TEXT */}
        <h1 className="text-4xl font-bold text-center mb-3">AuraScan AI</h1>
        <p className="text-center text-lg text-gray-300 mb-8">
          See how others really see you.
        </p>

        {/* INPUT */}
        <input
          type="text"
          placeholder="Paste your photo link..."
          className="w-full p-4 rounded-xl bg-black/30 border border-white/20 focus:outline-none"
        />

        {/* SCAN BUTTON */}
        <button className="w-full mt-6 p-4 rounded-xl bg-gradient-to-r from-[#00eaff] to-[#c400ff] text-black font-semibold shadow-xl hover:opacity-90 transition">
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
      </div>
    </div>
  );
}
