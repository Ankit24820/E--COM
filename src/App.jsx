import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

// Public Pages
import Home from "./pages/Home";
import About from "./pages/About";
import ContactPage from "./pages/ContactPage";
import Signup from "./pages/SignUp";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Account from "./pages/Account";
import Product from "./pages/Product";
import OrderConfirmation from "./pages/OrderConfirmation";
import MyOrder from "./pages/Myorder"; // ✅ MyOrder Page

// Categories
import Headphones from "./pages/Headphones";
import Earbuds from "./pages/Earbuds";
import Wiredearphone from "./pages/Wiredearphone";

// Admin Pages
import AdminLogin from "./pages/adminlogin";
import AdminPanel from "./pages/Adminpanel";
import AdminOrderHistory from "./pages/Adminorderhistory";
import CustomerComplain from "./pages/CustomerComplain";
import AdminStock from "./pages/AdminStock";

const AppWrapper = () => {
  const location = useLocation();

  const hideHeaderFooterRoutes = [
    "/admin",
    "/admin/login",
    "/admin/order-history",
    "/admin/customer-complain",
    "/admin/stock",
    "/login",
    "/signup"
  ];

  const hideHeaderFooter = hideHeaderFooterRoutes.some((path) =>
    location.pathname.startsWith(path)
  );

  return (
    <>
      {!hideHeaderFooter && <Header />}
      <main className="min-h-screen">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/account" element={<Account />} />
          <Route path="/product" element={<Product />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
          <Route path="/myorders" element={<MyOrder />} /> {/* ✅ My Orders Route */}

          {/* Categories */}
          <Route path="/category/headphones" element={<Headphones />} />
          <Route path="/category/earbuds" element={<Earbuds />} />
          <Route path="/category/wired-earphones" element={<Wiredearphone />} />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/admin/order-history" element={<AdminOrderHistory />} />
          <Route path="/admin/customer-complain" element={<CustomerComplain />} />
          <Route path="/admin/stock" element={<AdminStock />} />
        </Routes>
      </main>
      {!hideHeaderFooter && <Footer />}
    </>
  );
};

const App = () => (
  <Router>
    <AppWrapper />
  </Router>
);

export default App;
