import React from "react";

export default function Navbar() {
  return (
    <header className="bg-[#1A1A1A] text-[#D4AF37] px-12 py-6 shadow-xl">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-6 max-w-7xl mx-auto text-center sm:text-left">
        <div className="w-full sm:w-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Documentation
          </h1>
          <p className="text-base sm:text-lg md:text-xl mt-1 italic text-[#F5DEB3]">
            Point-of-Sales (POS) System.
          </p>
        </div>
        <div className="w-full sm:w-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Professor
          </h1>
          <p className="text-base sm:text-lg md:text-xl mt-1 italic text-[#F5DEB3]">
            Mr. Bernard Tinaza
          </p>
        </div>
      </div>
    </header>
  );
}
