export default function AuraSphere({ size = 180 }) {
  return (
    <div
      className="aura-small"
      style={{
        width: size,
        height: size,
        borderRadius: "9999px",
        background:
          "radial-gradient(circle at 30% 30%, #00eaff, #7b00ff 70%)",
        filter: "blur(0px)",
        boxShadow: "0 0 40px #7b00ff, 0 0 60px #00eaff55",
        animation: "auraPulse 3s ease-in-out infinite",
      }}
    />
  );
}
