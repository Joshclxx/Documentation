import React from "react";
import { motion } from "framer-motion";
import SectionContainer from "./SectionContainer";

const poweredByData = [
  {
    title: "Next.js",
    description:
      "A React framework that simplifies building fast, scalable web apps with built-in features React lacks.",
    function:
      "Adds server-side rendering for performance and SEO, static site generation for speed, and API routes for backend logic. File-based routing simplifies navigation, while image optimization, middleware, and incremental static regeneration improve flexibility and efficiency.",
  },
  {
    title: "TypeScript",
    description:
      "A statically typed extension of JavaScript that improves code safety and developer experience.",
    function:
      "Enables type annotations, compiles to JavaScript, and enhances IDE features. Supports modern JS syntax and ensures code reliability across environments.",
  },
  {
    title: "React",
    description:
      "A JavaScript library for building dynamic, component-based user interfaces.",
    function:
      "Uses reusable components, virtual DOM for efficient rendering, and declarative syntax. Simplifies complex UI management with unidirectional data flow and JSX.",
  },
  {
    title: "Tailwind CSS",
    description:
      "A utility-first CSS framework that speeds up custom UI design using predefined classes.",
    function:
      "Offers utility classes for layout, typography, and effects. Supports responsive design, rapid prototyping, and eliminates custom CSS or BEM conventions.",
  },
  {
    title: "Prisma",
    description:
      "An ORM that simplifies and secures database interactions in modern web apps.",
    function:
      "Uses schema definitions, generates type-safe clients, and supports migrations. Enhances dev speed with autocomplete, validation, and broad SQL support.",
  },
  {
    title: "GraphQL",
    description:
      "An API query language that lets clients ask for exactly the data they need.",
    function:
      "Defines strong schemas, enables precise queries/mutations, supports real-time subscriptions, and merges data sources with minimal over-fetching.",
  },
  {
    title: "MySQL",
    description:
      "An open-source relational database system used to store and manage structured data.",
    function:
      "Organizes data in relational tables, supports SQL queries, ensures integrity, and enables efficient transactions and indexing.",
  },
  {
    title: "Apollo Server",
    description:
      "Tools for building and managing GraphQL APIs across frontend and backend.",
    function:
      "Handles queries/mutations on the client with caching and hooks. On the backend, defines schemas/resolvers and exposes a GraphQL API from any source.",
  },
  {
    title: "Electron",
    description:
      "A framework for building desktop apps using HTML, CSS, and JS.",
    function:
      "Wraps web UIs in desktop windows, gives access to system features, bundles Chromium and Node.js, and supports auto-updates for cross-platform deployment.",
  },
  {
    title: "Git",
    description:
      "A distributed version control system for tracking changes in code and enabling collaboration.",
    function:
      "Records file changes, supports branching/merging, maintains full history, and enables remote teamwork via GitHub or GitLab.",
  },
  {
    title: "GitHub",
    description:
      "A developer platform for hosting code, managing projects, and collaborating.",
    function:
      "Hosts Git repos, provides pull requests, issue tracking, CI/CD, GitHub Actions, and team permission management.",
  },
  {
    title: "Node.js",
    description:
      "A JavaScript runtime that runs server-side code outside the browser.",
    function:
      "Handles HTTP, database, file system, and API logic. Uses npm for modules and enables scalable backend development.",
  },
  {
    title: "Figma",
    description:
      "A cloud-based design tool for UI, prototyping, and collaboration.",
    function:
      "Supports real-time collaboration, interactive prototyping, reusable design systems, and browser-based teamwork across devices.",
  },
];

const iconMap: Record<string, string> = {
  "Next.js": "/icon/nextjs.svg",
  TypeScript: "/icon/ts.svg",
  React: "/icon/react.svg",
  "Tailwind CSS": "/icon/tailwind.svg",
  Prisma: "/icon/prisma.svg",
  GraphQL: "/icon/graphql.svg",
  MySQL: "/icon/mysql.svg",
  "Apollo Server": "/icon/apollo.svg",
  Electron: "/icon/electron.svg",
  Git: "/icon/git.svg",
  GitHub: "/icon/github.svg",
  "Node.js": "/icon/node.svg",
  Figma: "/icon/figma.svg",
};

const PoweredBy = () => {
  return (
    <SectionContainer background="min-h-screen w-full">
      <div className="w-full py-6 md:py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-[#DAA520] mb-8">
              Powered By
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {poweredByData.map(
                ({ title, description, function: func }, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                      delay: idx * 0.05,
                    }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="relative bg-[var(--background)] text-[var(--foreground)]
                    rounded-xl p-4 pt-16 sm:p-5 md:p-6 shadow-md border border-gray-200
                    hover:scale-[1.02] hover:shadow-md transition-all duration-300 ease-in-out cursor-pointer"
                  >
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                      <div className="animated-border">
                        <div className="animated-border-inner">
                          <img
                            src={iconMap[title] || "/icon/default.svg"}
                            alt={`${title} icon`}
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-foreground dark:text-foreground mb-2">
                      {title}
                    </h3>
                    <p className="text-sm text-foreground dark:text-foreground mb-3">
                      {description}
                    </p>
                    <p className="text-sm text-foreground dark:text-foreground">
                      <span className="font-semibold">Function: </span>
                      {func}
                    </p>
                  </motion.div>
                )
              )}
            </div>
          </section>
        </div>
      </div>
    </SectionContainer>
  );
};

export default PoweredBy;
