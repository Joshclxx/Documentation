"use client";

import React from "react";
import SectionContainer from "./SectionContainer";

export default function Home() {
  return (
    <SectionContainer background="min-h-screen w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto py-10 space-y-16">
        <article className="space-y-12">
          {/* Overview Section */}
          <section>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#4682B4]">
              Overview
            </h2>
            <p className="text-base sm:text-lg leading-7 sm:leading-8 text-[#4B4B4B] text-justify">
              This documentation site showcases an interactive, visually
              engaging layout tailored for a modern POS (Point of Sale) System.
              Built with Next.js 15 and Tailwind CSS, it offers a seamless and
              responsive experience across all devices.
            </p>
          </section>

          {/* Core Highlights Section */}
          <section>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#8A2BE2]">
              Core Highlights
            </h2>
            <p className="text-base sm:text-lg leading-7 sm:leading-8 text-[#3A3A3A] text-justify">
              Designed with high-contrast premium color schemes, this
              documentation delivers a polished, user-friendly interface. It
              leverages the App Router in Next.js 15 for modularity and
              scalability—ideal for expanding product manuals, developer
              integration guides, and system operation tutorials.
            </p>
          </section>

          {/* Quick Start Section */}
          <section>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#20B2AA]">
              Quick Start
            </h2>
            <p className="text-base sm:text-lg text-[#4B4B4B]">
              Clone the repository and start the development server:
            </p>
            <pre className="bg-[#2E2E2E] text-[#E0E0E0] p-4 sm:p-6 rounded-lg text-sm font-mono overflow-x-auto">
              <code>
                git clone https://github.com/your-repo/project.git
                <br />
                cd project
                <br />
                yarn install
                <br />
                yarn dev
              </code>
            </pre>
          </section>

          {/* Introduction Section */}
          <section>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#DAA520]">
              Introduction
            </h2>
            <p className="text-base sm:text-lg leading-7 sm:leading-8 text-[#4B4B4B] text-justify">
              In this modern day that uses technology as a tool to improve our
              businesses, such as fast-food chains and other small businesses
              and retail that need manpower to build, they benefit from
              automated systems that enhance efficiency, accuracy, and customer
              service.
              <br />
              <br />
              The system we created is called the Point-of-Sale system, which is
              specifically designed for a coffee shop to address the need for an
              organized and reliable digital management solution. It is equipped
              with a complete set of features, starting from a secure log-in
              system to ensure that only authorized personnel can access the
              platform. The system has three primary interfaces: the admin,
              manager, and cashier interfaces.
              <br />
              <br />
              Each interface is designed for a certain user role. Sales
              tracking, inventory checks, and order processing are among the
              fundamental functions supported by the staff interface. Tools for
              monitoring employee performance, checking daily reports, and
              responding to client feedback are available through the management
              interface.
              <br />
              <br />
              The highest level of access is available through the admin
              interface, which enables the administrator to modify system
              settings, manage user accounts, and use analytics to produce
              business insights. Through the integration of these features into
              a single, integrated system, the platform seeks to enhance
              customer service, reduce manual errors, and optimize workflow.
              Based on up-to-date information, it guarantees that management can
              make data-driven decisions.
              <br />
              <br />
              Overall, this approach helps the coffee shop&apos;s long-term
              growth and success in addition to improving the effectiveness of
              everyday operations.
            </p>
          </section>
        </article>
      </div>
    </SectionContainer>
  );
}
