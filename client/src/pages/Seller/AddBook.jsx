// AddBook.jsx
import React, { useState } from "react";
import SNavBar from "../../components/SellerComponents/SNavBar";
// import {useNavigate} from 'react-router-dom';

const allGenres = [
  "Science",
  "Education",
  "Fantasy (Fiction/Non-Fiction",
  "Productivity",
  "Children",
  "Business",
  "Novels",
  "Literature",
];

const AddBook = ({ sellerId, sellerName, onCancel }) => {
  // const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    author: "",
    price: "",
    description: "",
  });
  const [genres, setGenres] = useState([]);
  const [itemImage, setItemImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setItemImage(e.target.files[0] || null);
  };

  const toggleGenre = (g, checked) => {
    setGenres((prev) =>
      checked ? [...prev, g] : prev.filter((item) => item !== g)
    );
  };

  const clearForm = (e) => {
    setForm({ title: "", author: "", price: "", description: "" });
    setGenres([]);
    setItemImage(null);
    if (e?.target) e.target.reset();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!sellerId) {
      alert("Seller not authenticated");
      return;
    }
    if (genres.length === 0) {
      alert("Select at least one genre");
      return;
    }

    const ok = window.confirm("Are you sure you want to add this book?");
    if (!ok) return;

    try {
      setLoading(true);

      const data = new FormData();
      data.append("title", form.title);
      data.append("author", form.author);
      data.append("genres", JSON.stringify(genres));
      data.append("price", form.price);
      data.append("description", form.description);
      data.append("sellerId", sellerId);
      data.append("sellerName", sellerName || "");
      if (itemImage) data.append("itemImage", itemImage);

      await fetch("/api/seller/books", {
        method: "POST",
        body: data,
      });

      clearForm(e);
      alert("Book added successfully");
    } catch (err) {
      console.error(err);
      alert("Failed to add book");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    const ok = window.confirm("Discard changes?");
    if (!ok) return;
    clearForm();
    // navigate("/seller");
    onCancel && onCancel();
  };

  return (
    <section className="min-h-screen bg-green-100 ">
      <SNavBar />
      <div className="flex items-start justify-center pt-16!">
        <div className="w-full max-w-xl bg-[#ffffff] rounded-2xl shadow-md border border-teal-50 px-8! py-10!">
          <h1 className="text-center text-2xl md:text-3xl font-semibold text-teal-500 mb-10!">
            Add Book
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4!">
            {/* title */}
            <input
              name="title"
              type="text"
              placeholder="Title"
              value={form.title}
              onChange={handleChange}
              required
              className="w-full border border-[#e0d6c4] bg-[#fffdf7] rounded-sm px-4! py-2.5! text-sm focus:outline-none focus:ring-1 focus:ring-teal-300"
            />

            {/* author */}
            <input
              name="author"
              type="text"
              placeholder="Author"
              value={form.author}
              onChange={handleChange}
              required
              className="w-full border border-[#e0d6c4] bg-[#fffdf7] rounded-sm px-4! py-2.5! text-sm focus:outline-none focus:ring-1 focus:ring-teal-300"
            />

            {/* Genres multi-select */}
            <div className="border border-[#e0d6c4] bg-[#fffdf7] rounded-sm px-4! py-2.5! text-sm">
              <p className="font-medium text-gray-700 mb-2!">Genres</p>
              <div className="grid grid-cols-2 gap-2">
                {allGenres.map((g) => (
                  <label
                    key={g}
                    className="flex items-center gap-2 text-xs text-gray-700"
                  >
                    <input
                      type="checkbox"
                      value={g}
                      checked={genres.includes(g)}
                      onChange={(e) => toggleGenre(g, e.target.checked)}
                      className="h-3.5 w-3.5 rounded border-gray-300 text-[#0f766e] focus:ring-[#0f766e]"
                    />
                    <span>{g}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* price */}
            <input
              name="price"
              type="number"
              min="0"
              step="0.01"
              placeholder="Price"
              value={form.price}
              onChange={handleChange}
              required
              className="w-full border border-[#e0d6c4] bg-[#fffdf7] rounded-sm px-4! py-2.5! text-sm focus:outline-none focus:ring-1 focus:ring-teal-300"
            />

            {/* description */}
            <textarea
              name="description"
              placeholder="Description"
              rows={3}
              value={form.description}
              onChange={handleChange}
              className="w-full border border-[#e0d6c4] bg-[#fffdf7] rounded-sm px-4! py-2.5! text-sm resize-none focus:outline-none focus:ring-1 focus:ring-teal-300"
            />

            {/* file */}
            <div className="space-y-1! text-sm">
              <p className="text-gray-700">Item Image</p>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="w-full border border-[#e0d6c4] bg-white rounded-sm px-3! py-2! text-xs file:mr-3! file:rounded-sm file:border-0 file:bg-teal-500 file:px-3 file:py-1! file:text-xs file:text-black file:cursor-pointer cursor-pointer"
              />
            </div>

            {/* buttons */}
            <div className="mt-4! flex gap-3">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 bg-teal-500 text-white py-2.5! rounded-sm text-sm font-semibold shadow-md hover:bg-teal-800 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>

              <button
                type="button"
                onClick={handleCancel}
                className="flex-1 border border-teal-500 text-teal-700 py-2.5! rounded-sm text-sm font-semibold hover:bg-teal-50 cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddBook;
