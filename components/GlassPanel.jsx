export default function GlassPanel({ children }) {
  return (
    <div
      className="glass fade-in"
      style={{
        padding: "32px",
        borderRadius: "28px",
        border: "1px solid rgba(255,255,255,0.25)",
        background: "rgba(255,255,255,0.08)",
        backdropFilter: "blur(30px) saturate(180%)",
        WebkitBackdropFilter: "blur(30px) saturate(180%)",
        boxShadow: "0 0 50px rgba(0,0,0,0.4)",
      }}
    >
      {children}
    </div>
  );
}
