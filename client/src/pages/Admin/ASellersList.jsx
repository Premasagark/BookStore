// ASellersPage.jsx
import React from "react";
import ANavBar from "../../components/AdminComponents/ANavBar";
import { delay, motion } from "motion/react";

// demo data – replace with API data later
const mockSellers = [
  {
    id: 1,
    name: "BookNest Store",
    email: "contact@booknest.in",
    totalBooks: 120,
    status: "Active",
  },
  {
    id: 2,
    name: "Readers Point",
    email: "hello@readerspoint.com",
    totalBooks: 45,
    status: "Pending",
  },
  {
    id: 3,
    name: "Campus Books",
    email: "support@campusbooks.edu",
    totalBooks: 200,
    status: "Blocked",
  },
];

const ASellersList = () => {
  return (
    <div className="bg-admin-home min-h-screen">
      <ANavBar />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="space-y-6! px-8!"
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Sellers</h2>
            <p className="text-sm text-gray-500">
              Manage all seller accounts and their bookstores.
            </p>
          </div>

          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Search by seller or email"
              className="w-48 sm:w-64 rounded-full border border-gray-400 bg-white px-4! py-2! text-sm focus:outline-none focus:ring-1 focus:ring-admin-btn/70"
            />
            <button className="hidden sm:inline-flex items-center px-4! py-2! rounded-full bg-admin-btn text-white text-sm font-medium cursor-pointer hover:text-black">
              + Add Seller
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-50 text-xs uppercase text-gray-500">
                <tr>
                  <th className="px-6! py-3! text-left">SNo</th>
                  <th className="px-6! py-3! text-left">Seller</th>
                  <th className="px-6! py-3! text-left">Email</th>
                  <th className="px-6! py-3! text-left">Books Listed</th>
                  <th className="px-6! py-3! text-left">Status</th>
                  <th className="px-6! py-3! text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {mockSellers.map((s,idx) => (
                  <tr key={s.id} className="hover:bg-gray-50/60">
                    <td className="px-6! py-3! font-medium text-gray-800">
                      {idx + 1}
                    </td>
                    <td className="px-6! py-3! font-medium text-gray-800">
                      {s.name}
                    </td>
                    <td className="px-6! py-3! text-gray-600">{s.email}</td>
                    <td className="px-6! py-3! text-gray-700">
                      {s.totalBooks}
                    </td>
                    <td className="px-6! py-3!">
                      <span
                        className={`inline-flex rounded-full px-3! py-1! text-xs font-medium ${
                          s.status === "Active"
                            ? "bg-emerald-100 text-emerald-700"
                            : s.status === "Pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-rose-100 text-rose-700"
                        }`}
                      >
                        {s.status}
                      </span>
                    </td>
                    <td className="px-6! py-3! text-right space-x-2!">
                      <button className="text-xs text-admin-btn font-semibold hover:underline">
                        View
                      </button>
                      <button className="text-xs text-admin-btn font-semibold hover:underline">
                        Edit
                      </button>
                      <button className="text-xs text-rose-500 font-semibold hover:underline">
                        Disable
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* footer */}
          <div className="flex items-center justify-between px-6! py-3! text-xs text-gray-500 bg-gray-50">
            <span>Showing {mockSellers.length} sellers</span>
            <button className="text-admin-btn hover:underline">View all</button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ASellersList;
