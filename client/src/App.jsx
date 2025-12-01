// App.jsx
import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { AppContext } from "./context/AppContext";
import UHome from "./pages/User/UHome.jsx";
import Login from "./components/Login.jsx";
import AHome from "./pages/Admin/AHome.jsx";
import AUsersList from "./pages/Admin/AUsersList.jsx"; // or correct path
import ASellersList from "./pages/Admin/ASellersList.jsx";
import SHome from "./pages/Seller/SHome.jsx";
import AddBook from "./pages/Seller/AddBook.jsx";
import SProduct from "./pages/Seller/SProduct.jsx";
import ABooks from "./pages/Admin/Abooks.jsx";
import { ToastContainer } from "react-toastify";

const App = () => {
  const { showLogin } = useContext(AppContext);

  return (
    <div className="min-h-screen bg-[#feebe7]">
      {showLogin && <Login />}
      <ToastContainer position="bottom-right" />

      <Routes>
        {/* user side */}
        <Route path="/" element={<UHome />} />

        {/* admin side */}
        <Route path="/admin" element={<AHome />} />
        <Route path="/admin/users" element={<AUsersList />} />
        <Route path="/admin/sellers" element={<ASellersList />} />
        <Route path="/admin/books" element={<ABooks />} />

        {/* seller side  */}
        <Route path="/seller" element={<SHome />} />
        <Route path="/seller/add-book" element={<AddBook />} />
        <Route path="/seller/product" element={<SProduct />} />

        {/* add more later: /admin/sellers, /admin/books, etc. */}
      </Routes>
    </div>
  );
};

export default App;
