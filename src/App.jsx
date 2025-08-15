import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter  as Router, Routes, Route } from "react-router-dom";

import { CartProvider } from "./contexts/CartContext";

import Header from "./components/customer/Header/Header";
import Footer from './components/customer/Footer';
import HomePage from './components/customer/HomePage';
import AllProductsPage from './components/customer/AllProductsPage';
import ProductDetailPage from './components/customer/ProductDetailPage';
import CartPage from './components/customer/CartPage';
import AdminPage from './components/admin/AdminPage';

const API_URL = 'https://my-fake-products-api.onrender.com/products';

export default function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(API_URL);
        setAllProducts(res.data);
      }
      catch (error) {
        console.error("Lỗi khi tải dữ liệu", error);
      }
      finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, []);

  if (loading) {
    return <div className="text-center text-gray-500 mt-10 text-xl font-inter">Đang tải dữ liệu sản phẩm...</div>;
  }

  return (
    <Router>
      <CartProvider>
        <div className="min-h-screen bg-gray-100 flex flex-col font-inter">

          <style>
            {`
              @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
              .font-inter { font-family: 'Inter', sans-serif; }
              html { scroll-behavior: smooth; }
              @keyframes fade-in-down { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
              .animate-fade-in-down { animation: fade-in-down 0.5s ease-out forwards; }
            `}
          </style>

          <Header />
          <main className="flex-1 container mx-auto px-4 py-6">
            <Routes>
              <Route path="/" element={<HomePage allProducts={allProducts} />} />
              <Route path="/products" element={<AllProductsPage allProducts={allProducts} />} />
              <Route path="/products/:id" element={<ProductDetailPage allProducts={allProducts} />} />
              <Route path="/cart" element={<CartPage allProducts={allProducts} />} />
              <Route path="/admin" element={<AdminPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}
