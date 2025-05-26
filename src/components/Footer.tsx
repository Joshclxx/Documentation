import React from "react";

export default function Footer() {
  const developers = [
    {
      name: "Joshua Colobong",
      role: "Frontend Developer (UI/UX Implementation)",
    },
    {
      name: "Jaylord Soguilon",
      role: "Backend Developer (API & Database Integration)",
    },
    {
      name: "Jenelyn Manalo",
      role: "UI/UX Designer (Wireframes & Figma Design)",
    },

    { name: "Mariel Krisjean Alaan", role: "Planning & Documentation" },
    { name: "Michaella Bacudo", role: "Planning & Documentation" },
    { name: "Jessie Nino Manila", role: "Planning & Documentation" },
    { name: "Allyssa Dizon", role: "Planning & Documentation" },
  ];

  return (
    <footer className="bg-[#1A1A1A] text-[#FFD700] w-full px-8 py-6 text-sm">
      <div className="flex justify-center w-full">
        <div className="w-full max-w-7xl px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
            {developers.map((dev, index) => (
              <div key={index}>
                <p className="font-semibold">{dev.name}</p>
                <p>{dev.role}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t border-[#FFD700]/30 pt-4 text-center">
            <p>
              &copy; {new Date().getFullYear()} Documentation Created By:
              Joshclxx
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
