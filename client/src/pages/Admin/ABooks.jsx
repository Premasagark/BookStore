// AdminBooks.jsx
import React, { useEffect, useState } from "react";
import ANavBar from '../../components/AdminComponents/ANavBar.jsx'
const mockBooks = [
  {
    _id: "1",
    title: "Deep Work",
    price: 399,
    genres: ["Productivity", "Business"],
    stockStatus: "IN_STOCK",
    sellerName: "Seller One",
  },
  {
    _id: "2",
    title: "Atomic Habits",
    price: 499,
    genres: ["Productivity"],
    stockStatus: "OUT_OF_STOCK",
    sellerName: "BookNest Store",
  },
];

const ABooks = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const load = async () => {
      try {
        // const res = await fetch("/api/admin/books");
        // const data = await res.json();
        // setBooks(data.books);
        setBooks(mockBooks);
      } catch (err) {
        console.error(err);
      }
    };
    load();
  }, []);

  const filtered = books.filter((b) =>
    `${b.title} ${b.genres?.join(" ")} ${b.sellerName}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const toggleStock = async (id, current) => {
    const next = current === "IN_STOCK" ? "OUT_OF_STOCK" : "IN_STOCK";

    // optimistic UI
    setBooks((prev) =>
      prev.map((b) => (b._id === id ? { ...b, stockStatus: next } : b))
    );

    // TODO: call admin stock API
    // await fetch(`/api/admin/books/${id}/stock`, {
    //   method: "PATCH",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ status: next }),
    // });
  };

  const handleDelete = async (id) => {
    const ok = window.confirm("Delete this book from the platform?");
    if (!ok) return;

    setBooks((prev) => prev.filter((b) => b._id !== id));

    // TODO: call admin delete API
    // await fetch(`/api/admin/books/${id}`, { method: "DELETE" });
  };

  const handleEdit = (id) => {
    // TODO: navigate to /admin/books/:id or open modal
    console.log("admin edit book", id);
  };

  const handleAdd = () => {
    // TODO: navigate to admin add-book page
    console.log("admin add book");
  };

  return (
    <section className="min-h-screen bg-admin-home ">
      <ANavBar />
      <div className="pt-16! flex justify-center">
        <div className="w-[92%] max-w-6xl bg-white rounded-2xl shadow-md border border-teal-100 px-6! md:px-10! py-8!">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6!">
            <div>
              <h1 className="text-2xl font-semibold text-admin-btn">
                All Books
              </h1>
              <p className="text-sm text-gray-500">
                View and manage every book listed by all sellers on the
                platform.
              </p>
            </div>

            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Search by title, genre, or seller"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-52 md:w-72 rounded-full border border-admin-btn bg-white px-4! py-2! text-sm focus:outline-none focus:ring-2 focus:ring-admin-btn"
              />
              <button
                onClick={handleAdd}
                className="hidden md:inline-flex items-center px-4! py-2! rounded-full bg-admin-btn text-white text-sm font-medium hover:text-black"
              >
                + Add Book
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead className="bg-blue-50 text-xs uppercase text-blue-700">
                  <tr>
                    <th className="px-6! py-3! text-left">Title</th>
                    <th className="px-6! py-3! text-left">Seller</th>
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
                      <td className="px-6! py-3! font-semibold text-gray-700">
                        {b.sellerName}
                      </td>
                      <td className="px-6! py-3! text-gray-600">
                        {b.genres?.join(", ")}
                      </td>
                      <td className="px-6! py-3! text-gray-700">
                        ₹{Number(b.price).toFixed(2)}
                      </td>
                      <td className="px-6! py-3!">
                        <button
                          onClick={() => toggleStock(b._id, b.stockStatus)}
                          className={`inline-flex items-center px-3! py-1! rounded-full text-xs font-medium ${
                            b.stockStatus === "IN_STOCK"
                              ? "bg-emerald-100 text-emerald-700"
                              : "bg-rose-100 text-rose-700"
                          }`}
                        >
                          {b.stockStatus === "IN_STOCK"
                            ? "In Stock"
                            : "Out of Stock"}
                        </button>
                      </td>
                      <td className="px-6! py-3! text-right space-x-2!">
                        <button
                          onClick={() => handleEdit(b._id)}
                          className="text-xs text-blue-700 font-semibold hover:underline"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(b._id)}
                          className="text-xs text-rose-500 font-semibold hover:underline"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}

                  {filtered.length === 0 && (
                    <tr>
                      <td
                        colSpan={6}
                        className="px-6! py-6! text-center text-sm text-gray-500"
                      >
                        No books found. Try adjusting the search filters.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* footer */}
            <div className="flex items-center justify-between px-6! py-3! text-xs text-gray-500 bg-blue-50">
              <span>
                Showing {filtered.length} of {books.length} books
              </span>
              <button className="text-gray-500 hover:underline">
                Export inventory
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ABooks;
