"use client";

import React from "react";
import SectionContainer from "./SectionContainer";

export default function Home() {
  return (
    <SectionContainer background="min-h-screen w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto py-8 md:py-12 space-y-20">
        <article className="space-y-16">
          {/* Overview */}
          <section>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#4682B4] mb-4">
              Overview
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[#4B4B4B] leading-relaxed text-justify">
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
          </section>

          {/* Core Highlights */}
          <section>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#8A2BE2] mb-4">
              Core Highlights
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[#3A3A3A] leading-relaxed text-justify">
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
          </section>

          {/* Quick Start */}
          <section>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#20B2AA] mb-4">
              Quick Start
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[#4B4B4B] mb-4">
              Clone the repository and start the development server:
            </p>
            <div className="overflow-x-auto rounded-md bg-[#2E2E2E] text-[#E0E0E0] text-sm p-4 font-mono">
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
          </section>

          {/* Introduction */}
          <section>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#DAA520] mb-4">
              Introduction
            </h2>
            <div className="text-sm sm:text-base md:text-lg text-[#4B4B4B] leading-relaxed text-justify space-y-4">
              <p>
                In today&apos;s rapidly evolving digital age, technology plays
                an increasingly critical role in transforming the way businesses
                operate. From large fast-food chains to small local retailers,
                the integration of automated systems has proven to be a powerful
                means of enhancing operational efficiency, improving service
                quality, and ensuring accuracy in day-to-day transactions. As
                customer expectations continue to rise and the demand for
                faster, more reliable service increases, businesses must adapt
                by leveraging digital solutions that streamline their internal
                processes. One such innovation is the implementation of
                Point-of-Sale (POS) systems, which have become indispensable
                tools in the modern commercial landscape.
              </p>

              <p>
                In response to this growing need, we have developed a
                comprehensive POS system specifically tailored for a coffee shop
                environment. The system was designed to address the common
                challenges faced by small to medium-sized food and beverage
                establishments, such as inventory mismanagement, order
                processing errors, and inefficient manual tracking. With these
                issues in mind, our POS system offers a reliable, user-friendly,
                and secure platform that simplifies business operations and
                improves overall productivity.
              </p>

              <p>
                At the core of the system is a secure log-in feature, which
                ensures that only authorized personnel have access to the
                platform. This not only protects sensitive business data but
                also promotes accountability among staff members. The system is
                structured around three main user interfaces, each carefully
                crafted to meet the specific needs of different user roles
                within the coffee shop: the admin, manager, and cashier
                interfaces.
              </p>

              <p>
                The cashier interface handles straightforward order processing,
                designed for speed and ease of use, ensuring that transactions
                are completed efficiently and accurately.
                <br />
                <br />
                The manager interface focuses on product manipulation, allowing
                managers to add, edit, or remove product details and ensure the
                product catalog remains current.
                <br />
                <br />
                The admin interface is dedicated to registering new users and
                updating user data, providing secure management of staff
                accounts and access rights.
              </p>

              <p>
                By consolidating these functionalities into a single, integrated
                digital platform, our POS system significantly enhances workflow
                efficiency across all levels of operation. Manual errors—such as
                incorrect pricing, inventory discrepancies, or missed orders—are
                drastically reduced, while the automation of routine tasks frees
                up staff to focus on customer engagement and service quality.
              </p>

              <p>
                Moreover, the system&apos;s ability to generate real-time
                reports and analytics enables the business to adopt a
                data-driven approach to decision-making. With accurate, timely
                insights into sales trends, customer preferences, and inventory
                turnover, management can make strategic adjustments that support
                the coffee shop&apos;s long-term success. Whether it involves
                introducing new products, adjusting pricing strategies, or
                planning marketing campaigns, the data provided by the POS
                system becomes an invaluable resource.
              </p>

              <p>
                In conclusion, the implementation of our tailored POS system
                goes beyond simply digitizing transactions—it redefines the
                operational model of the coffee shop by fostering a culture of
                efficiency, transparency, and informed decision-making. By
                addressing both current needs and future growth potential, this
                system positions the business to thrive in an increasingly
                competitive and technology-driven marketplace.
              </p>
            </div>
          </section>
        </article>
      </div>
    </SectionContainer>
  );
}
