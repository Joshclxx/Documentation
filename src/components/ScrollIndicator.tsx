// components/ScrollIndicator.tsx
"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollIndicator() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 4,
        originX: 0,
        backgroundColor: "#4682B4",
        zIndex: 50,
      }}
    />
  );
}
