"use client";

import React, { useState } from "react";
import ImageContainer from "./ImageContainer";
import SectionContainer from "./SectionContainer";

const Frontend = () => {
  const [selectedItem, setSelectedItem] = useState<{
    imageTitle: string;
    imageInterface: string;
    imageDescription: string;
  } | null>(null);

  const frontendItems = [
    {
      image: "/image/login.png",
      imageTitle: "Main Interface",
      imageInterface: "Login System",
      imageDescription:
        "The main interface of the system is a login screen where users enter their email and password to access the platform. It ensures that only authorized users can access the system by verifying their credentials. Depending on the user&apos;s role—staff, manager, or admin—they are redirected to their respective dashboards. The interface is simple, user-friendly, and includes error prompts for incorrect login attempts.",
    },
    {
      image: "/image/register.png",
      imageTitle: "Second Interface",
      imageInterface: "User Dashboard With Menu",
      imageDescription:
        "The Second interface is the main dashboard that managers only can see see after logging in. It includes a navigation menu that allows access to key features such as placing orders, viewing the menu, checking order history, and managing account settings. The menu is organized for easy use, ensuring smooth navigation throughout the system.",
    },
    {
      image: "/image/product.png",
      imageTitle: "Third Interface",
      imageInterface: "Registration System",
      imageDescription:
        "The Third interface is for new users who need to register an account. It allows them to enter required information, which is then saved directly to the database. This ensures that new users can securely create accounts and gain access to the system based on their role. In this interface, only admin can access.",
    },
    {
      image: "/image/openshift.png",
      imageTitle: "Fourth Interface",
      imageInterface: "Cashier Main Interface (Open Shift)",
      imageDescription:
        "The fourth interface is designed for cashiers to start their workday by opening a shift. It allows them to log the starting cash amount, access the order system, process payments, and monitor daily sales. This interface helps track all transactions accurately and ensures accountability during each shift.",
    },
    {
      image: "/image/openshift.png",
      imageTitle: "Fourth Interface",
      imageInterface: "Cashier Main Interface (Open Shift)",
      imageDescription: "",
    },
    {
      image: "/image/openshift.png",
      imageTitle: "Fourth Interface",
      imageInterface: "Cashier Main Interface (Open Shift)",
      imageDescription: "",
    },
    {
      image: "/image/openshift.png",
      imageTitle: "Fourth Interface",
      imageInterface: "Cashier Main Interface (Open Shift)",
      imageDescription: "",
    },
    {
      image: "/image/openshift.png",
      imageTitle: "Fourth Interface",
      imageInterface: "Cashier Main Interface (Open Shift)",
      imageDescription: "",
    },
  ];

  return (
    <SectionContainer background="min-h-screen w-full mx-auto max-w-[1480px]">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#DAA520] text-center p-4">
        FRONTEND INTERFACE
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {frontendItems.map((item, index) => (
          <ImageContainer
            key={index}
            {...item}
            onClick={() =>
              setSelectedItem({
                imageTitle: item.imageTitle,
                imageInterface: item.imageInterface,
                imageDescription: item.imageDescription,
              })
            }
          />
        ))}
      </div>

      {selectedItem && (
        <div className="fixed inset-0 bg-black/75 z-50 flex items-center justify-center px-4">
          <div className="bg-white p-6 rounded-lg max-w-md w-full relative text-center">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-2 right-4 text-gray-500 hover:text-black text-xl"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold">{selectedItem.imageTitle}</h2>
            <p className="mt-4 text-gray-700 text-justify">
              {selectedItem.imageDescription}
            </p>
          </div>
        </div>
      )}
    </SectionContainer>
  );
};

export default Frontend;
