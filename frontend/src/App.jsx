import React from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";

const App = () => {
  return (
    <div className="App min-h-screen w-screen bg-blue-900"> {/* Ensures full coverage */}
      <header>
        <Navbar />
      </header>
      <main className="flex justify-center items-center min-h-screen"> {/* Centers content */}
        <div className="container mx-auto p-4 mt-16"> {/* Adds padding */}
          <ProductCard />
        </div>
      </main>
    </div>
  );
};

export default App;



