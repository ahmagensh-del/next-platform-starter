"use client";
import { useEffect, useState } from "react";

export default function ThemeSwitch() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      document.documentElement.classList.toggle("light", saved === "light");
      setTheme(saved);
    }
  }, []);

  function toggleTheme() {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("light", newTheme === "light");
  }

  return (
    <button
      onClick={toggleTheme}
      className="absolute top-6 right-6 p-3 rounded-xl bg-white/20 border border-white/30 hover:bg-white/30 transition"
    >
      {theme === "dark" ? "🌞" : "🌙"}
    </button>
  );
}
