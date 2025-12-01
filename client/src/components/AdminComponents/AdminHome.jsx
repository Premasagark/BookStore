import React from "react";
import ANavBar from "../../components/AdminComponents/ANavBar.jsx";
import { delay,motion } from "motion/react";

const AdminHome = () => {
  const items = [
    { name: "Users", value: 0, color: "bg-[#c5d7ff]" },
    { name: "Vendors", value: 0, color: "bg-[#8af9d9]" },
    { name: "Books", value: 0, color: "bg-[#d8c0b4]" },
    { name: "Total Orders", value: 0, color: "bg-[#e7f9ed]" },
  ];

  return (
    <section className="relative min-h-screen bg-admin-home">
      <ANavBar />

      {/* DASHBOARD */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-[92%] mx-auto! mt-10! bg-white/80 p-8! rounded-xl shadow-md "
      >
        {/* TITLE */}
        <h1 className="text-center text-2xl md:text-3xl text-admin-btn font-semibold mb-8!">
          Admin Dashboard
        </h1>

        {/* TOP STAT CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12!">
          {items.map((item, idx) => (
            <div
              key={idx}
              className={`${item.color} rounded-xl shadow-md text-black p-6! flex flex-col justify-center items-center`}
            >
              <p className="text-lg md:text-xl font-semibold tracking-wider">
                {item.name}
              </p>
              <p className="text-3xl md:text-4xl font-bold mt-2!">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* VISUAL GRAPH / STATISTICS BOX */}
        <div className="bg-gray-200 h-[250px] md:h-[300px] lg:h-[350px] rounded-xl flex justify-center items-center shadow-inner">
          <p className="text-gray-500 text-lg">Graph Section Placeholder</p>
        </div>
      </motion.div>
    </section>
  );
};

export default AdminHome;
