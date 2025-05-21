import React from "react";
import Home from "./Home";
import Glossary from "./Glossary";
interface Props {
  currentPage: number;
}

export default function PaginatedContent({ currentPage }: Props) {
  return (
    <div className="max-w-5xl mx-auto p-10 space-y-16">
      {currentPage === 1 && (
        <section>
          <Home />
        </section>
      )}

      {currentPage === 2 && (
        <section>
          <Glossary />
        </section>
      )}
    </div>
  );
}
