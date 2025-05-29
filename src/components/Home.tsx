"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionContainer from "./SectionContainer";

const paragraphVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
  }),
};

export default function Home() {
  const introParagraphs = [
    `In today's rapidly evolving digital age, technology plays an increasingly critical role in transforming the way businesses operate. From large fast-food chains to small local retailers, the integration of automated systems has proven to be a powerful means of enhancing operational efficiency, improving service quality, and ensuring accuracy in day-to-day transactions.`,

    `In response to this growing need, we have developed a comprehensive POS system specifically tailored for a coffee shop environment. The system was designed to address the common challenges faced by small to medium-sized food and beverage establishments, such as inventory mismanagement, order processing errors, and inefficient manual tracking.`,

    `At the core of the system is a secure log-in feature, which ensures that only authorized personnel have access to the platform. This not only protects sensitive business data but also promotes accountability among staff members. The system is structured around three main user interfaces—admin, manager, and cashier—each carefully crafted to meet the specific needs of different user roles within the coffee shop.`,

    `The cashier interface handles straightforward order processing, designed for speed and ease of use, ensuring that transactions are completed efficiently and accurately.\n\nThe manager interface focuses on product manipulation, allowing managers to add, edit, or remove product details and ensure the product catalog remains current.\n\nThe admin interface is dedicated to registering new users and updating user data, providing secure management of staff accounts and access rights.`,

    `By consolidating these functionalities into a single, integrated digital platform, our POS system significantly enhances workflow efficiency across all levels of operation. Manual errors—such as incorrect pricing, inventory discrepancies, or missed orders—are drastically reduced, while the automation of routine tasks frees up staff to focus on customer engagement and service quality.`,

    `Moreover, the system's ability to generate real-time reports and analytics enables the business to adopt a data-driven approach to decision-making. With accurate, timely insights into sales trends, customer preferences, and inventory turnover, management can make strategic adjustments that support the coffee shop's long-term success.`,

    `In conclusion, the implementation of our tailored POS system goes beyond simply digitizing transactions—it redefines the operational model of the coffee shop by fostering a culture of efficiency, transparency, and informed decision-making.`,
  ];

  return (
    <SectionContainer background="min-h-screen w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1480px] mx-auto py-6 md:py-8 lg:py-12 space-y-12 md:space-y-16 lg:space-y-20">
        <article className="space-y-8 md:space-y-12 lg:space-y-16">
          {/* Overview */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#4682B4] mb-3 sm:mb-4">
              Overview
            </h2>
            <p className="text-foreground dark:text-foregound text-sm sm:text-base md:text-lg leading-relaxed text-justify">
              This documentation introduces a purpose-built POS (Point of Sale)
              system designed specifically for coffee shop operations. Developed
              with Next.js 15 and Tailwind CSS, the system features a fixed
              desktop layout optimized for in-store use. It focuses on enhancing
              daily workflows by minimizing manual errors, streamlining order
              and inventory management, and improving staff coordination. With
              clearly defined interfaces for admins, managers, and cashiers, the
              system supports efficient task handling while maintaining secure
              access control.
            </p>
          </motion.section>

          {/* Core Highlights */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#8A2BE2] mb-3 sm:mb-4">
              Core Highlights
            </h2>
            <p className="text-foreground dark:text-foregound text-sm sm:text-base md:text-lg leading-relaxed text-justify">
              This POS system is built with a fixed desktop layout, offering a
              stable and intuitive interface tailored for in-store use. It
              features a secure login system that restricts access to authorized
              personnel, ensuring data protection and staff accountability. The
              application is structured around three dedicated user roles—admin,
              manager, and cashier—each with its own interface designed to meet
              specific operational needs. Cashiers can process orders quickly
              and accurately, while managers are equipped with tools to manage
              product listings and maintain inventory accuracy. Admins oversee
              user management, handling account creation and access rights. The
              system also automates routine tasks to reduce manual errors and
              streamline daily operations. In addition, it provides real-time
              reporting and analytics, enabling data-driven decisions that
              support inventory planning, pricing adjustments, and strategic
              growth.
            </p>
          </motion.section>

          {/* Quick Start */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#20B2AA] mb-3 sm:mb-4">
              Quick Start
            </h2>
            <p className="text-foreground dark:text-foregound text-sm sm:text-base md:text-lg mb-3 sm:mb-4">
              Clone the repository and start the development server:
            </p>
            <div className="overflow-x-auto rounded-md bg-[#2E2E2E] text-[#E0E0E0] text-xs sm:text-sm p-3 sm:p-4 font-mono">
              <code>
                git clone https://github.com/Joshclxx/POS-System.git
                <br />
                <br />
                cd pos-system
                <br />
                <br />
                yarn install
                <br />
                <br />
                yarn dev
              </code>
            </div>
          </motion.section>

          {/* Introduction */}
          <motion.section
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#DAA520] mb-3 sm:mb-4">
              Introduction
            </h2>
            <div className="text-sm sm:text-base md:text-lg text-foreground dark:text-foregound leading-relaxed text-justify space-y-3 sm:space-y-4">
              {introParagraphs.map((text, i) => (
                <motion.p
                  key={i}
                  custom={i}
                  variants={paragraphVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {text.split("\n\n").map((line, j) => (
                    <span key={j}>
                      {line}
                      <br />
                      <br />
                    </span>
                  ))}
                </motion.p>
              ))}
            </div>
          </motion.section>
        </article>
      </div>
    </SectionContainer>
  );
}
