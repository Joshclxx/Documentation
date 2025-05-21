import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-[#FFD700] px-8 py-6 text-center text-sm">
      <p>
        &copy; {new Date().getFullYear()} PremiumDocs Inc. Crafted with
        precision.
      </p>
    </footer>
  );
}
