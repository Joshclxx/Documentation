import React from "react";
import Home from "./Home";
import Glossary from "./Glossary";
interface Props {
  currentPage: number;
}

export default function PaginatedContent({ currentPage }: Props) {
  return (
    <div className="max-w-5xl mx-auto p-10 space-y-16">
      {/* INTRODUCTION */}
      {currentPage === 1 && (
        <section>
          <Home />
        </section>
      )}
      {/* FRONTEND */}
      {currentPage === 1 && (
        <section>
          <Home />
        </section>
      )}
      {/* BACKEND */}
      {currentPage === 1 && (
        <section>
          <Home />
        </section>
      )}
      {/* WIREFRAME */}
      {currentPage === 1 && (
        <section>
          <Home />
        </section>
      )}
      {/* POWERED BY */}
      {currentPage === 1 && (
        <section>
          <Home />
        </section>
      )}
      {/* GLOSSARY */}
      {currentPage === 2 && (
        <section>
          <Glossary />
        </section>
      )}
    </div>
  );
}
