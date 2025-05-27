import React from "react";
import Home from "./Home";
import Frontend from "./Frontend";
import Glossary from "./Glossary";

interface Props {
  currentPage: number;
}

export default function PaginatedContent({ currentPage }: Props) {
  return (
    <div className="w-full mx-auto p-4 sm:p-6 md:p-8 lg:p-10 space-y-8 sm:space-y-12 md:space-y-16">
      {/* INTRODUCTION */}
      {currentPage === 1 && (
        <section>
          <Home />
        </section>
      )}
      {/* FRONTEND */}
      {currentPage === 2 && (
        <section>
          <Frontend />
        </section>
      )}
      {/* BACKEND */}
      {currentPage === 3 && (
        <section>
          <Home />
        </section>
      )}
      {/* WIREFRAME */}
      {currentPage === 4 && (
        <section>
          <Home />
        </section>
      )}
      {/* POWERED BY */}
      {currentPage === 5 && (
        <section>
          <Home />
        </section>
      )}
      {/* GLOSSARY */}
      {currentPage === 6 && (
        <section>
          <Glossary />
        </section>
      )}
    </div>
  );
}
