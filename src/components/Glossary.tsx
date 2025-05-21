"use client";

import React from "react";
import SectionContainer from "./SectionContainer";

export default function Home() {
  return (
    <SectionContainer background="min-h-screen w-full mx-auto max-w-[1280px]">
      <div className="max-w-5xl mx-auto p-10 space-y-16">
        <section>
          <h2 className="text-4xl font-semibold text-[#DAA520]">Glossary</h2>
          <p className="text-lg sm:text-sm md:text-md lg:text-lg leading-8 text-[#4B4B4B] text-justify">
            <span className="font-bold">Admin Interface,</span> the highest
            level of access within the system. Allows the administrator to
            manage user accounts, update system settings, and generate business
            reports.
            <br />
            <br />
            <span className="font-bold">Analytics,</span> tools within the admin
            interface that analyze data to provide insights into sales,
            performance, and customer behavior.
            <br />
            <br />
            <span className="font-bold">Authorized Users,</span> individuals who
            have valid login credentials and are permitted to access specific
            features based on their roles.
            <br />
            <br />
            <span className="font-bold">Cashpick,</span> a function used to
            remove excess cash from the register during a shift to avoid
            overflow, usually performed by a manager or authorized staff.
            <br />
            <br />
            <span className="font-bold">Cashier Interface,</span>a dedicated
            interface for cashiers to manage daily transactions, including order
            processing, payments, and shift handling.
            <br />
            <br />
            <span className="font-bold">Close Shift,</span> the process done at
            the end of a cashier's shift to finalize sales, count cash, and
            update the system's inventory and transaction logs.
            <br />
            <br />
            <span className="font-bold">Dashboard,</span> the main screen users
            see after logging in, displaying menus, statistics, and navigation
            to core features.
            <br />
            <br />
            <span className="font-bold">Database,</span> a structured system
            that stores all data related to users, orders, inventory, and
            transactions.
            <br />
            <br />
            <span className="font-bold">Error Message,</span> a system-generated
            alert that appears when something goes wrong, helping users or
            developers identify and resolve problems.
            <br />
            <br />
            <span className="font-bold">Inventory,</span> the available stock of
            products in the coffee shop, tracked by the system to ensure
            accurate sales and restocking.
            <br />
            <br />
            <span className="font-bold">Login System,</span> the entry point of
            the system where users must input their email and password to gain
            access based on their assigned role.
            <br />
            <br />
            <span className="font-bold">Manager Login Interface</span> a secure
            interface accessible only by managers for viewing reports, managing
            staff, performing spot checks, and accessing restricted system
            features.
            <br />
            <br />
            <span className="font-bold">Navigation Menu,</span> a user interface
            component that provides links to different sections or functions of
            the system.
            <br />
            <br />
            <span className="font-bold">Order History,</span> a log of all
            previous transactions processed through the system, used for
            tracking and reviewing past orders.
            <br />
            <br />
            <span className="font-bold">
              Partial Sales Inventory / Spot-check
            </span>{" "}
            a feature used during shifts to verify if the actual stock matches
            the recorded sales, helping detect discrepancies early.
            <br />
            <br />
            <span className="font-bold">Payment Interface,</span> a screen where
            transactions are completed by selecting payment methods and
            confirming the total amount.
            <br />
            <br />
            <span className="font-bold">Point of Sale (POS),</span> a system
            used to manage sales transactions, inventory, and customer
            interactions in retail and food service businesses.
            <br />
            <br />
            <span className="font-bold">Queue,</span> a list of active or
            pending orders waiting to be processed by the cashier or kitchen.
            <br />
            <br />
            <span className="font-bold">Real-Time Data,</span> information that
            is updated immediately within the system, allowing users to make
            timely and accurate decisions.
            <br />
            <br />
            <span className="font-bold">Registration System,</span> a function
            that allows new users to sign up and create an account, storing
            their details in the database.
            <br />
            <br />
            <span className="font-bold">Role-Based Access,</span> a security
            model where users can only access functions relevant to their
            assigned role (e.g., cashier, manager, admin).
            <br />
            <br />
            <span className="font-bold">Shift</span> a scheduled working period
            for cashiers, tracked by the system from open to close.
            <br />
            <br />
            <span className="font-bold">System Settings,</span> configuration
            options available to admins for customizing how the system behaves.
            <br />
            <br />
            <span className="font-bold">Transaction</span> a completed exchange
            involving an order and payment, recorded in the system.
            <br />
            <br />
            <span className="font-bold">User Account,</span> a unique profile
            within the system that stores login credentials, user information,
            and access permissions.
            <br />
            <br />
            <span className="font-bold">Void Transaction</span> the process of
            canceling or invalidating an order that was placed by mistake or
            contains errors.
          </p>
        </section>
      </div>
    </SectionContainer>
  );
}
