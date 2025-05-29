"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionContainer from "./SectionContainer";

const Glossary = () => {
  const errors = [
    {
      title: "Admin Interface",
      explanation:
        "The highest level of access within the system. Allows the administrator to manage user accounts, update system settings, and generate business reports.",
    },
    {
      title: "Analytics",
      explanation:
        "Tools within the admin interface that analyze data to provide insights into sales, performance, and customer behavior.",
    },
    {
      title: "Authorized Users",
      explanation:
        "Individuals who have valid login credentials and are permitted to access specific features based on their roles.",
    },
    {
      title: "Cash Pick",
      explanation:
        "A function used to remove excess cash from the register during a shift to avoid overflow, usually performed by a manager or authorized staff.",
    },
    {
      title: "Cashier Interface",
      explanation:
        "A dedicated interface for cashiers to manage daily transactions, including order processing, payments, and shift handling.",
    },
    {
      title: "Close Shift",
      explanation:
        "The process done at the end of a cashier's shift to finalize sales, count cash, and update the system's inventory and transaction logs.",
    },
    {
      title: "Dashboard",
      explanation:
        "The main screen users see after logging in, displaying menus, statistics, and navigation to core features.",
    },
    {
      title: "Database",
      explanation:
        "A structured system that stores all data related to users, orders, inventory, and transactions.",
    },
    {
      title: "Error Message",
      explanation:
        "A system-generated alert that appears when something goes wrong, helping users or developers identify and resolve problems.",
    },
    {
      title: "git add .",
      explanation:
        "Stages all modified and new files in the current directory and subdirectories for the next commit.",
    },
    {
      title: 'git commit -m "message"',
      explanation:
        "Records the staged changes to the local repository with a descriptive message explaining the changes.",
    },
    {
      title: "git log",
      explanation:
        "Shows the commit history of the current branch, including commit hashes, messages, authors, and dates.",
    },
    {
      title: "git pull origin main",
      explanation:
        "Fetches the latest changes from the main branch of the remote repository named origin and merges them into the local branch.",
    },
    {
      title: "git push",
      explanation:
        "Uploads the local repository content to the corresponding remote repository branch.",
    },
    {
      title: "git reset --hard",
      explanation:
        "Resets the current branch to a specific state, discarding all changes in the working directory and index. Warning: This deletes uncommitted work.",
    },
    {
      title: "git stash",
      explanation:
        "Temporarily shelves (or stashes) changes in the working directory that are not ready to be committed. This allows a clean working directory for switching branches.",
    },
    {
      title: "git stash pop",
      explanation:
        "Applies the most recently stashed changes back into the working directory and removes them from the stash list.",
    },
    {
      title: "git status",
      explanation:
        "Displays the state of the working directory and staging area, showing which changes have been staged, which haven’t, and which files aren’t being tracked by Git.",
    },
    {
      title: "Inventory",
      explanation:
        "The available stock of products in the coffee shop, tracked by the system to ensure accurate sales and restocking.",
    },
    {
      title: "Login System",
      explanation:
        "The entry point of the system where users must input their email and password to gain access based on their assigned role.",
    },
    {
      title: "Manager Interface",
      explanation:
        "A secure interface accessible only by managers for viewing reports, managing staff, performing spot checks, and accessing restricted system features.",
    },
    {
      title: "Navigation Menu",
      explanation:
        "A user interface component that provides links to different sections or functions of the system.",
    },
    {
      title: "Order History",
      explanation:
        "A log of all previous transactions processed through the system, used for tracking and reviewing past orders.",
    },
    {
      title: "Partial Sales Inventory / Spot-check",
      explanation:
        "A feature used during shifts to verify if the actual stock matches the recorded sales, helping detect discrepancies early.",
    },
    {
      title: "Payment Interface",
      explanation:
        "A screen where transactions are completed by selecting payment methods and confirming the total amount.",
    },
    {
      title: "Point of Sale (POS)",
      explanation:
        "A system used to manage sales transactions, inventory, and customer interactions in retail and food service businesses.",
    },
    {
      title: "Queue",
      explanation:
        "A list of active or pending orders waiting to be processed by the cashier or kitchen.",
    },
    {
      title: "Real-time Data",
      explanation:
        "Information that is updated immediately within the system, allowing users to make timely and accurate decisions.",
    },
    {
      title: "Registration System",
      explanation:
        "A function that allows new users to sign up and create an account, storing their details in the database.",
    },
    {
      title: "Role-based Access",
      explanation:
        "A security model where users can only access functions relevant to their assigned role (e.g., cashier, manager, admin).",
    },
    {
      title: "Shift",
      explanation:
        "A scheduled working period for cashiers, tracked by the system from open to close.",
    },
    {
      title: "Transaction",
      explanation:
        "A completed exchange involving an order and payment, recorded in the system.",
    },
    {
      title: "User Account",
      explanation:
        "A unique profile within the system that stores login credentials, user information, and access permissions.",
    },
    {
      title: "Void Transaction",
      explanation:
        "The process of canceling or invalidating an order that was placed by mistake or contains errors.",
    },
    {
      title: "yarn add",
      explanation:
        "Adds a new dependency to the project and updates package.json and yarn.lock accordingly.",
    },
    {
      title: "yarn dev",
      explanation:
        "Starts the development server (typically for web apps) using the script defined under the dev key in package.json.",
    },
    {
      title: "yarn electron-dev",
      explanation:
        "Runs the application in development mode with Electron, combining frontend and desktop app behavior if specified in the electron-dev script.",
    },
    {
      title: "yarn install",
      explanation:
        "Installs all project dependencies listed in package.json and creates/updates the yarn.lock file.",
    },
  ];

  return (
    <SectionContainer background="min-h-screen w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1480px] mx-auto py-6 md:py-8 lg:py-12 space-y-12 md:space-y-16 lg:space-y-20">
        <section>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#DAA520] mb-4">
            Glossary
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {errors?.map((err, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.05,
                }}
                viewport={{ once: false, amount: 0.2 }}
                className="
                bg-[var(--background)] text-[var(--foreground)]
                rounded-xl p-4 sm:p-5 md:p-6 shadow-md border border-gray-200
                hover:scale-[1.02] hover:shadow-md
                transition-all duration-300 ease-in-out cursor-pointer
              "
              >
                <p className="font-bold text-foreground dark:text-foregound text-base sm:text-lg md:text-xl mb-1">
                  {err.title}
                </p>
                <p className="mt-2 text-xs sm:text-sm text-foreground dark:text-foregound md:text-base">
                  {err.explanation}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </SectionContainer>
  );
};

export default Glossary;
