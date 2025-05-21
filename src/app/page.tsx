"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionContainer from "@/components/SectionContainer";
import PaginatedContent from "@/components/Pagination";
const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 6;

  return (
    <div>
      <Navbar />

      <SectionContainer background="min-h-screen w-full mx-auto max-w-[1280px]">
        <PaginatedContent currentPage={currentPage} />
      </SectionContainer>

      <div className="flex justify-center items-center space-x-2 py-6">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Prev
        </button>

        <input
          type="number"
          min={1}
          max={totalPages}
          value={currentPage}
          onChange={(e) => {
            const page = Number(e.target.value);
            if (page >= 1 && page <= totalPages) setCurrentPage(page);
          }}
          className="w-16 text-center border rounded"
        />

        <span className="text-sm">/ {totalPages}</span>

        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default Page;
