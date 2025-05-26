"use client";

import React, { useState } from "react";
import ImageContainer from "./ImageContainer";
import SectionContainer from "./SectionContainer";

const Frontend = () => {
  const [selectedItem, setSelectedItem] = useState<{
    images: string[];
    imageTitle: string;
    imageInterface: string;
    imageDescription: string;
  } | null>(null);

  const frontendItems = [
    {
      images: ["/image/login.png"],
      imageTitle: "Main Interface",
      imageInterface: "Login System",
      imageDescription:
        "The main interface of the system is a login screen where users enter their email and password to access the platform. It ensures that only authorized users can access the system by verifying their credentials. Depending on the user's role—staff, manager, or admin—they are redirected to their respective dashboards. The interface is simple, user-friendly, and includes error prompts for incorrect login attempts.",
    },
    {
      images: ["/image/register.png"],
      imageTitle: "Admin Dashboard",
      imageInterface: "User Dashboard With Menu",
      imageDescription:
        "The Admin Dashboard allows administrators to register new users by entering their credentials and required information. The data is securely saved to the database, granting users access to the system according to their assigned roles. Only administrators have access to this interface.",
    },
    {
      images: ["/image/product.png"],
      imageTitle: "Manager Dashboard",
      imageInterface: "Registration System",
      imageDescription:
        "The Manager Dashboard is exclusively accessible to managers and is designed for product management tasks. It provides tools to add, edit, or delete menus and menu items.",
    },
    {
      images: ["/image/openshift.png"],
      imageTitle: "Open Shift",
      imageInterface: "Cashier Open Shift",
      imageDescription:
        "The Open Shift interface is designed for cashiers to begin their workday by logging the starting cash amount. It grants access to the order system, enables payment processing, and allows monitoring of daily sales through partial sales inventory. This feature ensures accurate transaction tracking and accountability throughout each shift.",
    },
    {
      images: ["/image/ordersHome.png"],
      imageTitle: "Orders Home Page",
      imageInterface: "Cashier Main Interface",
      imageDescription: "",
    },
    {
      images: ["/image/nav.png", "/image/info.png", "/image/poweredby.png"],
      imageTitle: "POS Navigation Board",
      imageInterface: "POS Information Board and Navigation",
      imageDescription:
        "The POS Information Board and Navigation serves a quick page transfer from orders home page to navigation pages. It shows the POS information such as registered user's logged in and time in also the other credentials regarding on POS Development.",
    },
    {
      images: ["/image/payment.png"],
      imageTitle: "Orders Payment Options",
      imageInterface: "Users Payment Method",
      imageDescription:
        "The Orders Payment Option is where cashiers process payments. It allows users to select payment methods, enter payment amounts, and finalize transactions. This interface ensures secure and accurate handling of all customer payments.",
    },
    {
      images: ["/image/managersLogin.png"],
      imageTitle: "Manager Login Interface",
      imageInterface: "Manager Access Only Features",
      imageDescription:
        "The eighth interface is a secure login screen for managers, accessible only within the cashier system. It grants managers access to restricted features such as shift reports, void transactions, and cashpick. Only authorized managers can log in through this interface.",
    },
    {
      images: ["/image/spotcheck-1.png", "/image/spotcheck-2.png"],
      imageTitle: "Spotcheck",
      imageInterface: "Partial Sales Inventory",
      imageDescription:
        "The Spotcheck system is used to perform partial sales inventory to check during a shift. It allows managers to compare actual cash on hand and POS Cash total, helping to identify if the cash drawer is balance, over, or short compared to the POS Cash Total.",
    },
    {
      images: ["/image/cashpick.png"],
      imageTitle: "Cashpick",
      imageInterface: "Manager Cash Drawer Overflow Pick",
      imageDescription:
        "The Cashpick operation during a shift. It allows managers to pick, record, and secure excess cash from the drawer, reducing the risk of cash overflow. All cash pick transactions are logged for transparency and accountability.",
    },
    {
      images: ["/image/voidOrder.png", "/image/orderHistory.png"],
      imageTitle: "Order History and Void Order",
      imageInterface: "Orders Manipulation",
      imageDescription:
        "The Order History and Void Order allows user to view order history and perform void transactions when necessary. Only managers are authorized personnel to access Void Orders with each void action logged for accountability. This interface also provides a detailed record of all past orders for tracking and review.",
    },
    {
      images: ["/image/closeShift.png"],
      imageTitle: "Close Shift",
      imageInterface: "Shift Sales Inventory",
      imageDescription:
        "The Close Shift, is to records the final cash count, compares it with system sales, and logs any discrepancies. It also updates the shifting inventory, ensuring accurate tracking of remaining stock. This helps maintain transparency and prepares the system for the next shift.",
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
            image={item.images[0]} // display preview
            imageTitle={item.imageTitle}
            imageInterface={item.imageInterface}
            // imageDescription={item.imageDescription}
            delay={index * 0.15}
            onClick={() =>
              setSelectedItem({
                images: item.images,
                imageTitle: item.imageTitle,
                imageInterface: item.imageInterface,
                imageDescription: item.imageDescription,
              })
            }
          />
        ))}
      </div>

      {selectedItem && (
        <div className="fixed inset-0 bg-black/75 z-50 flex items-center justify-center px-4 overflow-auto">
          <div className="bg-white p-6 rounded-lg max-w-3xl w-full relative text-center">
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
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {selectedItem.images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`${selectedItem.imageTitle} ${i + 1}`}
                  className="w-full rounded shadow"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </SectionContainer>
  );
};

export default Frontend;
