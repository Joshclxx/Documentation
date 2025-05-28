"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionContainer from "./SectionContainer";

const ErrorMessage = () => {
  const errors = [
    {
      title: "Failed to connect database.",
      errorCode: "Error Code: FAILED_RECONNECTION_DB",
      explanation:
        "This error occurs when the application attempts to reconnect to the database but fails. It may be due to a database service being down.",
    },
    {
      title: "Database is unreachable.",
      errorCode: "Error Code: NO_DATABASE_FOUND",
      explanation:
        "The application cannot find or access the database. Ensure that the database server is running and the connection details are correctly configured.",
    },
    {
      title: "Something went wrong.",
      errorCode: "Error Code: INTERNAL_SERVER_ERROR",
      explanation:
        "Please contact your administrator. A generic error message indicating that an unexpected server-side issue occurred. The cause may not be immediately visible and requires investigation by the backend team.",
    },
    {
      title:
        "An unknown error occurred while deleting a user. (message might change depending on error code)",
      errorCode: [
        "UNKNOWN_CREATE_CATEGORY_ERROR UNKNOWN_DELETE_CATEGORY_ERROR",
        "UNKNOWN_UPDATE_CATEGORY_ERROR UNKNOWN_CREATE_ORDER_ERROR",
        "UNKNOWN_UPDATE_STATUS_ERROR UNKNOWN_CREATE_PRODUCT_ERROR",
        "UNKNOWN_DELETE_PRODUCT_ERROR UNKNOWN_UPDATE_STATUS_ERROR",
        "UNKNOWN_CREATE_USER_ERROR",
        "UNKNOWN_FETCH_ALL_CATEGORIES_ERROR",
        "UNKNOWN_FETCH_CATEGORY_ERROR UNKNOWN_FETCH_ALL_ORDERS_ERROR",
        "UNKNOWN_FETCH_ORDER_ERROR UNKNOWN_FETCH_ALL_PRODUCTS_ERROR",
        "UNKNOWN_FETCH_PRODUCT_ERROR",
        "UNKNOWN_FETCH_PRODUCT_VARIANT_ERROR",
        "UNKNOWN_FETCH_ALL_USER_ERROR UNKNOWN_FETCH_USER_ERROR",
        "UNKNOWN_LOGIN_ERROR",
      ],
      explanation:
        "This error is triggered when an unhandled exception occurs during a specific task or task process. It's likely a logic or database inconsistency that needs debugging.",
    },
    {
      title: "An unexpected error occurred.",
      errorCode: "No Error Code",
      explanation:
        "This is a fallback error shown when the error is not an expected error and doesn’t match known patterns. It suggests an unidentified issue that may require further inspection.",
    },
  ];

  return (
    <SectionContainer background="min-h-screen w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1480px] mx-auto py-6 md:py-8 lg:py-12 space-y-12 md:space-y-16 lg:space-y-20">
        <div className="space-y-8 md:space-y-12 lg:space-y-16">
          <section>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#DAA520] mb-4">
              Error Message & Troubleshooting
            </h2>
            <div className="space-y-6">
              {errors.map((err, index) => (
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
                  className="bg-white border border-gray-100 rounded-lg p-4 sm:p-5 md:p-6 shadow-md hover:shadow-md hover:bg-gray-100 transition-all duration-200 cursor-pointer group"
                >
                  <p className="font-semibold text-[#1E2F5A] text-base sm:text-lg md:text-xl mb-1 group-hover:text-[#0D1B39] transition-colors duration-200">
                    {err.title}
                  </p>
                  {Array.isArray(err.errorCode) ? (
                    <ul className="mt-2 text-xs sm:text-sm md:text-base text-gray-600">
                      {err.errorCode.map((code, i) => (
                        <li key={i}>{code}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-2 text-xs text-[#4B4B4B] sm:text-sm md:text-base group-hover:text-[#2A2A2A] transition-colors duration-200">
                      {err.errorCode}
                    </p>
                  )}
                  <p className="mt-2 text-xs sm:text-sm md:text-base text-gray-600 group-hover:text-gray-800 transition-colors duration-200">
                    {err.explanation}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ErrorMessage;
