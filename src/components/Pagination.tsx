import React from "react";
import Home from "./Home";
import Frontend from "./Frontend";
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
