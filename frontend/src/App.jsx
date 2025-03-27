import React from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";

const App = () => {
  return (
    /* Ensures full coverage */
    <div className="App min-h-screen w-screen bg-black">
      <header>
        <Navbar className="bg-gray-800 bg-opacity-50 backdrop-blur-md text-gray-200 shadow-md fixed top-0 left-0 w-full z-10" />
      </header>
      <main className="flex justify-center items-center min-h-screen"> 
        <div className="container mx-auto p-4 mt-16">
          <ProductCard />
        </div>
      </main>
    </div>
  );
};

export default App;



