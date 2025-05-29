"use client";
import { useEffect, useState } from "react";

let timeout: NodeJS.Timeout;

export default function ThemeTransition() {
  const [coords, setCoords] = useState({ x: "50%", y: "50%" });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      setCoords({ x: `${e.clientX}px`, y: `${e.clientY}px` });
      setVisible(true);

      clearTimeout(timeout);
      timeout = setTimeout(() => setVisible(false), 700); // match animation duration
    };

    window.addEventListener("mousedown", handleClick);
    return () => window.removeEventListener("mousedown", handleClick);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="theme-transition"
      style={
        {
          "--x": coords.x,
          "--y": coords.y,
        } as React.CSSProperties
      }
    />
  );
}
