"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionContainer from "./SectionContainer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Additional = () => {
  const sectionRef = useRef(null);
  const conclusionRef = useRef(null);

  const sectionInView = useInView(sectionRef, { once: true });
  const conclusionInView = useInView(conclusionRef, { once: true });

  return (
    <SectionContainer background="min-h-screen w-full">
      <div className="w-full py-6 md:py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 space-y-12 md:space-y-16 lg:space-y-20">
          <div className="space-y-8 md:space-y-12 lg:space-y-16">
            <motion.section
              ref={sectionRef}
              variants={fadeUp}
              initial="hidden"
              animate={sectionInView ? "visible" : "hidden"}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#DAA520] mb-3 sm:mb-4">
                The Importance and Uses of Front-End, Back-End, Command, and
                Wireframe in a System
              </h2>
              <div className="text-sm sm:text-base md:text-lg text-foreground dark:text-foregound leading-relaxed text-justify space-y-3 sm:space-y-4">
                <p>
                  <strong>1. Front-End:</strong> The front-end is the part of
                  the system that users directly interact with — it’s what they
                  see and use on their screens. In a system with multiple user
                  interfaces (e.g., admin, manager, cashier), a well-designed
                  front-end is essential for:
                </p>
                <ul className="list-disc pl-5">
                  <li>
                    User experience (UX) — making the system easy and intuitive
                    to use.
                  </li>
                  <li>
                    Accessibility — ensuring the platform is navigable and
                    usable by all users.
                  </li>
                  <li>
                    Efficiency — enabling quick task completion, such as sales
                    processing and inventory checks.
                  </li>
                </ul>

                <p>
                  <strong>2. Back-End:</strong> The back-end handles the core
                  operations and data management behind the scenes. It connects
                  the front-end to the database and manages logic, storage, and
                  processes such as:
                </p>
                <ul className="list-disc pl-5">
                  <li>
                    Data processing and storage — managing sales, inventory, and
                    user data securely.
                  </li>
                  <li>
                    Business logic — handling operations like discounts, report
                    generation, and access control.
                  </li>
                  <li>
                    Security — protecting sensitive data with authentication,
                    authorization, and encryption.
                  </li>
                </ul>

                <p>
                  <strong>3. Command:</strong> Commands are instructions given
                  to the system — via code, UI buttons, or triggers — to perform
                  specific tasks. They are crucial for:
                </p>
                <ul className="list-disc pl-5">
                  <li>
                    Executing functions like adding products, processing
                    payments, or generating reports.
                  </li>
                  <li>
                    Ensuring system responsiveness to inputs and backend
                    operations.
                  </li>
                  <li>
                    Preventing errors and improving system reliability through
                    well-defined logic.
                  </li>
                </ul>

                <p>
                  <strong>4. Wireframe:</strong> A wireframe is a blueprint that
                  outlines the layout and structure of the system before
                  development begins. It is important because:
                </p>
                <ul className="list-disc pl-5">
                  <li>
                    It helps plan the user interface and experience by mapping
                    out key elements.
                  </li>
                  <li>
                    It allows stakeholders to review and approve the design
                    before coding starts.
                  </li>
                  <li>
                    It promotes consistency and clarity throughout development,
                    guiding all teams.
                  </li>
                </ul>
              </div>
            </motion.section>

            <motion.section
              ref={conclusionRef}
              variants={fadeUp}
              initial="hidden"
              animate={conclusionInView ? "visible" : "hidden"}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#DAA520] mb-3 sm:mb-4 mt-9">
                Conclusion
              </h2>

              <div className="text-sm sm:text-base md:text-lg text-foreground dark:text-foregound leading-relaxed text-justify space-y-3 sm:space-y-4">
                <p>
                  In conclusion, the development of our Point-of-Sale system
                  provides a modern, efficient, and reliable solution tailored
                  to the operational needs of a coffee shop. By integrating
                  essential features such as secure access, role-based
                  interfaces, sales tracking, inventory management, and
                  real-time reporting, the system not only streamlines daily
                  processes but also empowers management with valuable insights
                  for informed decision-making.
                </p>
                <p>
                  This innovation contributes to enhanced customer service,
                  reduced human error, and overall business growth, ensuring the
                  coffee shop remains competitive and adaptable in an
                  increasingly digital and fast-paced industry. The twelve
                  interfaces collectively ensure that the POS and inventory
                  management system operates securely, efficiently, and
                  transparently. Each component contributes to role-based
                  control, accurate financial management, and real-time
                  operational oversight.
                </p>
                <p>
                  Moving forward, integrating enhancements such as mobile
                  compatibility, real-time reporting dashboards, automated
                  inventory alerts, and advanced security protocols could
                  further improve system performance, offering a comprehensive,
                  reliable platform for businesses of any size.
                </p>
              </div>
            </motion.section>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Additional;
