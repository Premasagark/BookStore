// SellerHome.jsx
import React from "react";
import SNavBar from "../../components/SellerComponents/SNavBar.jsx"; // or a SellerNavBar if you create one
import { delay, motion } from "motion/react";

const SellerHome = () => {
  const stats = [
    { label: "Items", value: 0, color: "bg-[#8af9d9]" },
    { label: "Total Orders", value: 0, color: "bg-[#009797]" },
  ];

  return (
    <section className="min-h-screen bg-green-100">
      {/* you can swap this with SellerNavBar later */}
      <SNavBar />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-[92%] mx-auto! content-center mt-10! bg-[#fffaf0] rounded-2xl shadow-md border border-[#f0e2c8] px-6! md:px-10! py-8!"
      >
        {/* Title */}
        <h1 className="text-center text-2xl md:text-3xl font-semibold text-teal-500 mb-10!">
          Seller Dashboard
        </h1>

        {/* Top stat cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12!">
          {stats.map((s) => (
            <div
              key={s.label}
              className={`${s.color} text-black rounded-xl shadow-md flex flex-col items-center justify-center py-6!`}
            >
              <p className="text-lg md:text-xl font-semibold">{s.label}</p>
              <p className="text-3xl md:text-4xl font-bold mt-2!">{s.value}</p>
            </div>
          ))}
        </div>

        {/* Simple bar chart placeholder */}
        <div className="bg-white rounded-xl shadow-inner border border-[#f0e2c8] px-6! md:px-10! py-10! flex flex-col items-center justify-center">
          <div className="w-full max-w-xl h-64 flex items-end justify-around">
            {/* Items bar */}
            <div className="flex flex-col items-center gap-2">
              <div
                className="w-10 md:w-12 bg-blue-600 rounded-t-md"
                style={{ height: "60%" }}
              />
              <span className="text-sm text-gray-700">Items</span>
            </div>

            {/* Orders bar */}
            <div className="flex flex-col items-center gap-2">
              <div
                className="w-10 md:w-12 bg-orange-400 rounded-t-md"
                style={{ height: "60%" }}
              />
              <span className="text-sm text-gray-700">Orders</span>
            </div>
          </div>

          <p className="mt-6 text-xs text-gray-500">value</p>
        </div>
      </motion.div>
    </section>
  );
};

export default SellerHome;
