// AdminUsers.jsx
import React from "react";
import ANavBar from "../../components/AdminComponents/ANavBar";
import { motion, delay } from "motion/react";

const mockUsers = [
  {
    id: 1,
    name: "Arun Kumar",
    email: "arun@example.com",
    role: "User",
    status: "Active",
  },
  {
    id: 2,
    name: "Priya R",
    email: "priya@example.com",
    role: "Seller",
    status: "Pending",
  },
  {
    id: 3,
    name: "Admin One",
    email: "admin@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 4,
    name: "Karthik S",
    email: "karthik@example.com",
    role: "User",
    status: "Blocked",
  },
];

const AUserList = () => {
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
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3! ">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Users</h2>
            <p className="text-sm text-gray-500">
              Manage all users, admins, and sellers of your bookstore.
            </p>
          </div>

          <div className="flex gap-3!">
            <input
              type="text"
              placeholder="Search by name or email"
              className="w-48! sm:w-64! rounded-full border border-gray-400 bg-white px-4! py-2! text-sm focus:outline-none focus:ring-1 focus:ring-admin-btn/70"
            />
            <button className="hidden sm:inline-flex items-center px-4! py-2! rounded-full bg-admin-btn text-white text-sm font-medium">
              + Add User
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
                  <th className="px-6! py-3! text-left">Name</th>
                  <th className="px-6! py-3! text-left">Email</th>
                  <th className="px-6! py-3! text-left">Role</th>
                  <th className="px-6! py-3! text-left">Status</th>
                  <th className="px-6! py-3! text-left">Orders</th>
                  <th className="px-6! py-3! text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {mockUsers.map((u, idx) => (
                  <tr key={u.id} className="hover:bg-gray-50/60">
                    <td className="px-6! py-3! font-medium text-gray-800">
                      {idx + 1}
                    </td>
                    <td className="px-6! py-3! font-medium text-gray-800">
                      {u.name}
                    </td>
                    <td className="px-6! py-3! text-gray-600">{u.email}</td>
                    <td className="px-6! py-3!">
                      <span
                        className={`inline-flex rounded-full px-3! py-1! text-xs font-medium ${
                          u.role === "Admin"
                            ? "bg-purple-100 text-purple-700"
                            : u.role === "Seller"
                            ? "bg-amber-100 text-amber-700"
                            : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {u.role}
                      </span>
                    </td>
                    <td className="px-6! py-3!">
                      <span
                        className={`inline-flex rounded-full px-3! py-1! text-xs font-medium ${
                          u.status === "Active"
                            ? "bg-emerald-100 text-emerald-700"
                            : u.status === "Pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-rose-100 text-rose-700"
                        }`}
                      >
                        {u.status}
                      </span>
                    </td>
                    <td className="px-6! py-3!">
                      <button className="inline-flex text-xs bg-admin-home px-3! py-1!  rounded-full cursor-pointer hover:bg-admin-btn hover:text-white">View Orders</button>
                    </td>
                    <td className="px-6! py-3! text-right space-x-2!">
                      <button className="text-xs text-admin-btn font-semibold hover:underline cursor-pointer">
                        Edit
                      </button>
                      <button className="text-xs text-rose-500 font-semibold hover:underline cursor-pointer">
                        Block
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* footer */}
          <div className="flex items-center justify-between px-6! py-3! text-xs text-gray-500 bg-gray-50">
            <span>Showing {mockUsers.length} users</span>
            <button className="text-admin-btn hover:underline">View all</button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AUserList;
