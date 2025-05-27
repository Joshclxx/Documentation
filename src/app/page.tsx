"use client";

import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import SectionContainer from "@/components/SectionContainer";
import PaginatedContent from "@/components/Pagination";
import {
  ChevronLeft,
  ChevronRight,
  Home,
  Code,
  Server,
  Layout,
  Zap,
  Book,
} from "lucide-react";

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 6;

  const navRef = useRef<HTMLDivElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [isAtFooter, setIsAtFooter] = useState(false);

  useLayoutEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsAtFooter(entry.isIntersecting);
      },
      {
        rootMargin: "0px",
        threshold: 0.01,
      }
    );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => {
      if (sentinelRef.current) {
        observer.unobserve(sentinelRef.current);
      }
    };
  }, []);

  const navItems = [
    { id: 1, icon: Home, label: "Intro" },
    { id: 2, icon: Code, label: "Frontend" },
    { id: 3, icon: Server, label: "Backend" },
    { id: 4, icon: Layout, label: "Wireframe" },
    { id: 5, icon: Zap, label: "Powered" },
    { id: 6, icon: Book, label: "Glossary" },
  ];

  return (
    <div className="bg-[#f8f8f8] min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <SectionContainer background="w-full mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <PaginatedContent currentPage={currentPage} />
        </SectionContainer>
      </main>

      {/* Sticky Bottom Navigation */}
      <div
        ref={navRef}
        className={`w-full px-4 sm:px-6 lg:px-8 z-30 ${
          isAtFooter ? "relative bottom-0" : "sticky bottom-4"
        }`}
      >
        <div className="flex justify-center mb-4">
          <div className="flex items-center bg-white rounded-full shadow-lg px-2 py-1 border border-gray-200 w-full max-w-md justify-between sm:justify-center">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex overflow-x-auto gap-1 sm:gap-2 px-1 sm:px-2 no-scrollbar">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`flex flex-col items-center justify-center flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 p-1 rounded-full ${
                    currentPage === item.id
                      ? "bg-[#D4AF37] text-white"
                      : "hover:bg-gray-100"
                  } transition-colors`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="text-[10px] sm:text-xs mt-1 leading-tight text-center">
                    {item.label}
                  </span>
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Sentinel div for scroll detection */}
      <div ref={sentinelRef} className="h-[1px]" />

      <Footer />
    </div>
  );
};

export default Page;
