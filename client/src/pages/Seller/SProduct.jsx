// SProduct.jsx
import React, { useEffect, useState } from "react";
import SNavBar from "../../components/SellerComponents/SNavBar.jsx";
import { useNavigate } from "react-router-dom";

const mockBooks = [
  {
    _id: "1",
    title: "Deep Work",
    price: 399,
    genres: ["Productivity", "Business"],
    stockStatus: "In Stock",
  },
  {
    _id: "2",
    title: "Atomic Habits",
    price: 499,
    genres: ["Productivity"],
    stockStatus: "Out of Stock",
  },
];

const SProduct = ({ sellerId }) => {
    const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  // load seller books – replace mock with real API
  useEffect(() => {
    const load = async () => {
      try {
        if (!sellerId) {
          setBooks(mockBooks);
          return;
        }

        // const res = await fetch(`/api/seller/books?sellerId=${sellerId}`);
        // const data = await res.json();
        // setBooks(data.books);
        setBooks(mockBooks);
      } catch (err) {
        console.error(err);
      }
    };
    load();
  }, [sellerId]);

  const filtered = books.filter((b) =>
    `${b.title} ${b.genres?.join(" ")}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const toggleStock = (id) => {
    setBooks((prev) =>
      prev.map((b) =>
        b._id === id
          ? {
              ...b,
              stockStatus:
                b.stockStatus === "In Stock" ? "Out of Stock" : "In Stock",
            }
          : b
      )
    );
    // TODO: PATCH /api/seller/books/:id/stock
  };

  const handleAddBook = () => {
    navigate('/seller/add-book')
  }

  const handleDelete = (id) => {
    const ok = window.confirm("Delete this book?");
    if (!ok) return;
    setBooks((prev) => prev.filter((b) => b._id !== id));
    // TODO: DELETE /api/seller/books/:id
  };

  const handleEdit = (id) => {
    // TODO: open edit modal or navigate to /seller/books/:id/edit
    console.log("edit book", id);
  };

  return (
    <section className="min-h-screen bg-green-100 ">
      <SNavBar />
      <div className=" pt-16! flex justify-center">
        <div className="w-[92%] max-w-5xl bg-white rounded-2xl shadow-md border border-teal-100 px-6! md:px-10! py-8!">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6!">
            <div>
              <h1 className="text-2xl font-semibold text-teal-700">My Books</h1>
              <p className="text-sm text-gray-500">
                Manage all the books you&apos;re selling in the bookstore.
              </p>
            </div>

            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Search by title or genre"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-48 md:w-64 rounded-full border border-teal-200 bg-white px-4! py-2! text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
              <button onClick={handleAddBook} className="hidden md:inline-flex items-center px-4! py-2! rounded-full bg-teal-500 text-white text-sm font-medium hover:bg-teal-600 cursor-pointer">
                + Add New Book
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead className="bg-teal-50 text-xs uppercase text-teal-700">
                  <tr>
                    <th className="px-6! py-3! text-left">Title</th>
                    <th className="px-6! py-3! text-left">Genres</th>
                    <th className="px-6! py-3! text-left">Price</th>
                    <th className="px-6! py-3! text-left">Stock</th>
                    <th className="px-6! py-3! text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filtered.map((b) => (
                    <tr key={b._id} className="hover:bg-teal-50/40">
                      <td className="px-6! py-3! font-medium text-gray-800">
                        {b.title}
                      </td>
                      <td className="px-6! py-3! text-gray-600">
                        {b.genres?.join(", ")}
                      </td>
                      <td className="px-6! py-3! text-gray-700">
                        ₹{Number(b.price).toFixed(2)}
                      </td>
                      <td className="px-6! py-3!">
                        <button
                          onClick={() => toggleStock(b._id)}
                          className={`inline-flex items-center px-3! py-1! rounded-full text-xs font-medium cursor-pointer ${
                            b.stockStatus === "In Stock"
                              ? "bg-emerald-100 text-emerald-700"
                              : "bg-rose-100 text-rose-700"
                          }`}
                        >
                          {b.stockStatus}
                        </button>
                      </td>
                      <td className="px-6! py-3! text-right space-x-2!">
                        <button
                          onClick={() => handleEdit(b._id)}
                          className="text-xs text-teal-700 font-semibold hover:underline cursor-pointer"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(b._id)}
                          className="text-xs text-rose-500 font-semibold hover:underline cursor-pointer"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}

                  {filtered.length === 0 && (
                    <tr>
                      <td
                        colSpan={5}
                        className="px-6! py-6! text-center text-sm text-gray-500"
                      >
                        No books found. Try changing the search or add a new
                        book.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* footer */}
            <div className="flex items-center justify-between px-6! py-3! text-xs text-gray-500 bg-teal-50">
              <span>
                Showing {filtered.length} of {books.length} books
              </span>
              <button className="text-teal-700 hover:underline">
                Export as CSV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SProduct;
