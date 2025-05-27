import React from "react";

export function Navbar() {
  return (
    <header className="bg-[#1A1A1A] text-[#D4AF37] px-4 sm:px-6 md:px-8 lg:px-12 py-3 sm:py-4 md:py-6 shadow-xl w-full">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 md:gap-6 max-w-7xl mx-auto text-center sm:text-left">
        <div className="flex flex-col items-center sm:items-start gap-1 sm:gap-2 md:gap-4">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-tight">
            Documentation
          </h1>
          <p className="text-xs sm:text-sm md:text-base italic text-[#F5DEB3]">
            Point-of-Sales (POS) System.
          </p>
        </div>
        <div className="flex flex-col items-center sm:items-end gap-1 sm:gap-2 md:gap-4">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-tight">
            Professor
          </h1>
          <p className="text-xs sm:text-sm md:text-base italic text-[#F5DEB3]">
            Mr. Bernard Tinaza
          </p>
        </div>
      </div>
    </header>
  );
}
