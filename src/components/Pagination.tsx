import React from "react";
import Home from "./Home";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Glossary from "./Glossary";
import ErrorMessage from "./ErrorMessage";
import PoweredBy from "./PoweredBy";
import Additional from "./Additional";
import Summary from "./Summary";
interface Props {
  currentPage: number;
}

export default function PaginatedContent({ currentPage }: Props) {
  return (
    <div className="w-full mx-auto p-1 space-y-8 sm:space-y-12 md:space-y-16">
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
          <Backend />
        </section>
      )}

      {/* POWERED BY */}
      {currentPage === 4 && (
        <section>
          <PoweredBy />
        </section>
      )}
      {/* ERROR MESSAGE */}
      {currentPage === 5 && (
        <section>
          <ErrorMessage />
        </section>
      )}

      {/* ADDITIONAL */}
      {currentPage === 6 && (
        <section>
          <Additional />
        </section>
      )}

      {/* SUMMARY */}
      {currentPage === 7 && (
        <section>
          <Summary />
        </section>
      )}

      {/* GLOSSARY */}
      {currentPage === 8 && (
        <section>
          <Glossary />
        </section>
      )}
    </div>
  );
}
