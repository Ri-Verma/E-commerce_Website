import React, { useEffect, useState } from "react";
import logo from "./logo.png";
import SearchBar from "./SearchBar";
import { TiShoppingCart } from "react-icons/ti";

const Navbar = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products");
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <nav className=" flex items-center justify-between px-6 py-3  blur-0 bg-blue-900 bg-opacity-50 backdrop-blur-md text-gray-200 shadow-md fixed top-0 left-0 w-full z-10">

      {/* Home Button (Logo) */}
      <a href="/" className="flex items-center">
        <img src={logo} alt="Home" className="h-10 w-auto" />
      </a>

      {/* Search Bar */}
      <div className="flex-grow mx-6 max-w-lg">
        <SearchBar data={products} />
      </div>

      {/* Cart Button */}
      <a href="/cart" className="relative">
        <TiShoppingCart style={{ height: "35", width: "50", color: "gray" }} />
        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
          3
        </span>
      </a>
    </nav>
  );
};

export default Navbar;
