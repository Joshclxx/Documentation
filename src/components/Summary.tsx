"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionContainer from "./SectionContainer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Summary = () => {
  const summaryRef = useRef(null);
  const summaryInView = useInView(summaryRef, { once: true });

  return (
    <SectionContainer background="min-h-screen w-full">
      <div className="w-full py-6 md:py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 space-y-12 md:space-y-16 lg:space-y-20">
          <div className="space-y-8 md:space-y-12 lg:space-y-16">
            <motion.section
              ref={summaryRef}
              variants={fadeUp}
              initial="hidden"
              animate={summaryInView ? "visible" : "hidden"}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#DAA520] mb-3 sm:mb-4">
                Overall Summary
              </h2>
              <div className="text-sm sm:text-base md:text-lg text-foreground dark:text-foregound leading-relaxed text-justify space-y-3 sm:space-y-4">
                <p>
                  A Point-of-Sale (POS) and inventory management system relies
                  on multiple interconnected interfaces to ensure seamless,
                  secure, and efficient business operations. This system
                  includes twelve core interfaces, each designed to improve
                  workflow, security, and accountability.
                </p>
                <p>
                  The system begins with the <strong>Main Interface</strong>,
                  where users log in using their email and password. Access is
                  role-based (administrator, manager, or staff), with future
                  upgrades considering Multi-Factor Authentication (MFA) for
                  enhanced security.
                </p>
                <p>
                  Upon login, managers access the{" "}
                  <strong>User Dashboard with Menu</strong>, which acts as a
                  control panel for managing account settings, orders, menus,
                  and history. Navigation is intuitive to support
                  decision-making and operations monitoring.
                </p>
                <p>
                  Administrators manage access via the{" "}
                  <strong>Registration System</strong>, assigning roles and
                  safeguarding user information to prevent unauthorized access.
                </p>
                <p>
                  The <strong>Cashier Main Interface (Open Shift)</strong>{" "}
                  enables cashiers to enter their initial cash balance and begin
                  managing transactions for the day. This interface supports
                  payment processing and order handling.
                </p>
                <p>
                  Once a shift begins, cashiers use the{" "}
                  <strong>Cashier Home Page</strong> to view and manage active
                  orders, ensuring timely customer service and operational
                  efficiency.
                </p>
                <p>
                  The <strong>POS Information Board and Navigation</strong>{" "}
                  provides real-time data such as sales stats, pending orders,
                  and inventory levels. This ensures informed decision-making
                  for both managers and staff.
                </p>
                <p>
                  The <strong>Payment Interface</strong> handles secure
                  transaction processing, supports multiple payment methods, and
                  maintains transaction records for auditing purposes.
                </p>
                <p>
                  A dedicated <strong>Manager Login</strong> interface provides
                  administrative access to restricted actions like transaction
                  voids, shift reports, and system configurations, ensuring
                  role-based control.
                </p>
                <p>
                  For inventory and sales accuracy, the{" "}
                  <strong>Spot-check (Partial Sales Inventory)</strong>{" "}
                  interface allows real-time audits and discrepancy detection,
                  preventing losses.
                </p>
                <p>
                  The <strong>Cash Pick</strong> interface allows authorized
                  personnel to withdraw excess cash during a shift, logging
                  every transaction to ensure transparency and prevent overflow.
                </p>
                <p>
                  With the <strong>Void Order and Order History</strong>{" "}
                  interface, users can void incorrect or duplicate orders. Every
                  void is recorded, ensuring auditability and data integrity.
                </p>
                <p>
                  Finally, the{" "}
                  <strong>Close Shift and Shifting Inventory</strong> interface
                  completes the cashier’s shift by recording final cash counts,
                  verifying against sales data, and updating inventory for the
                  next shift.
                </p>
              </div>
            </motion.section>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Summary;
