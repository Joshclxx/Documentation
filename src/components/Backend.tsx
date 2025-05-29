"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionContainer from "./SectionContainer";

const paragraphVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" },
  }),
};

const Backend = () => {
  const paragraphs = [
    `The backend serves as the backbone of the Point-of-Sales (POS) system, orchestrating the secure storage, processing, and delivery of data across all functional components. While the frontend provides the user interface that cashiers, managers, and admin interact with daily, it is ultimately the backend that ensures every transaction, inventory update, shift update, and user action is reliably recorded, validated, and stored. For our POS system, we implemented a robust backend architecture built on a carefully selected stack of modern technologies: Prisma, GraphQL, MySQL, and Apollo. Each plays a distinct, critical role within the system, and together, they create a seamless flow of data from the moment a sale is initiated to the moment reports and analytics are generated for business insights.`,

    `At the heart of the data layer is MySQL, a widely used relational database management system chosen for its stability, scalability, and structured data handling. MySQL stores essential records such as product details, inventory counts, sales logs, employee accounts, and shift logs. To interact efficiently with this database, we use Prisma, a powerful Object-Relational Mapping (ORM) tool that abstracts raw SQL queries and offers a developer-friendly API for database operations. Prisma not only accelerates development by reducing the need to write repetitive queries but also introduces type safety, migrations, and query optimization, ensuring both speed and reliability.`,

    `Layered above this, GraphQL serves as the API technology that connects the frontend and backend. Unlike traditional REST APIs, which require defining rigid endpoints for each data request, GraphQL allows the frontend to request exactly the data it needs in a single query, reducing over-fetching and under-fetching. This flexibility becomes especially valuable in a POS context, where the system must handle diverse interactions such as retrieving current inventory levels, fetching product details, applying active promotions, recording transactions, and generating summary reports — all in real time, without unnecessary delays or redundant data transfer. Apollo complements this setup by managing GraphQL client-server communication, ensuring smooth query handling, caching, error management, and state synchronization between the client and server.`,

    `The backend also carries significant responsibility beyond simple data handling. It enforces business logic — for example, validating discount eligibility, updating stock levels only after successful transactions, or tracking which employee performed a given action. It provides security mechanisms to prevent unauthorized access, ensures data integrity even under high load or unexpected failures, and supports scalability to accommodate growing business demands. In designing this backend, we deliberately prioritized modularity and maintainability, ensuring that each part of the system — whether database, API layer, or client interface — can evolve or scale independently without causing system-wide disruptions.`,

    `Ultimately, while the backend may be invisible to end-users, it is the foundational engine that enables the POS system to function smoothly and reliably. Without it, there would be no way to preserve the consistency of sales records, maintain accurate stock levels, or generate the analytics that inform business decisions. By leveraging a stack of Prisma, GraphQL, MySQL, and Apollo, we have built a backend architecture that not only meets current operational needs but is also positioned for future enhancements, whether that means integrating with third-party services, expanding reporting capabilities, or supporting multi-branch deployments. This carefully designed backend is what empowers the POS system to deliver on its promise of efficiency, accuracy, and seamless customer service.`,
  ];

  return (
    <SectionContainer background="min-h-screen w-full">
      <div className="w-full py-6 md:py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 space-y-12 md:space-y-16 lg:space-y-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 md:space-y-12 lg:space-y-16"
          >
            <section>
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-xl sm:text-2xl md:text-3xl font-bold text-[#DAA520] mb-3 sm:mb-4"
              >
                Backend System
              </motion.h2>

              <div className="text-sm sm:text-base md:text-lg text-foreground dark:text-foregound leading-relaxed text-justify space-y-3 sm:space-y-4">
                {paragraphs.map((text, i) => (
                  <motion.p
                    key={i}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={paragraphVariants}
                  >
                    {text}
                  </motion.p>
                ))}
              </div>
            </section>
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Backend;
