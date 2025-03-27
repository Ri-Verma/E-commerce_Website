import { useState, useEffect } from "react";

const ProductCard = () => {
  const [products, setProducts] = useState([]);
  const [addingProduct, setAddingProduct] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  // Fetch products from database
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        
        console.log("Fetched data:", result); // Log the response
  
        if (Array.isArray(result.data)) {
          setProducts(result.data); // returns an array
        } else if (result.data) {
          setProducts([result.data]); // returns a single object
        } else {
          console.error("Unexpected API response structure", result);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
  
    fetchProducts();
  }, []);
  

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  // Add product to database
  const addProduct = async () => {
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      alert("Please fill all fields!");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });

      if (response.ok) {
        const addedProduct = await response.json();
        setProducts([...products, addedProduct]);
        setNewProduct({ name: "", price: "", image: "" });
        setAddingProduct(false);
      } else {
        console.error("Failed to add product");
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  // Delete product from database
  const deleteProduct = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/products/${id}`, {
        method: "DELETE",
      });
  
      if (!response.ok) {
        throw new Error("Failed to delete product");
      }
  
      setProducts((prev) => prev.filter((product) => product._id !== id)); // Remove from state
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };
  

  return (
    <div className="p-5 min-h-screen flex flex-col items-center bg-gray-900 text-white">
      <button 
        onClick={() => setAddingProduct(true)} 
        className="mb-5 px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-blue-600">
        Add New Product
      </button>

      {/* Show new product form */}
      {addingProduct && (
        <div className="border p-4 rounded-md shadow-md w-64 bg-gray-100">
          <h3 className="text-lg font-bold mb-2 text-center text-black">New Product</h3>
          <input type="text" name="name" placeholder="Name" value={newProduct.name} onChange={handleInputChange} className="w-full p-2 mb-2 border rounded-md bg-gray-800 text-white" />
          <input type="number" name="price" placeholder="Price" value={newProduct.price} onChange={handleInputChange} className="w-full p-2 mb-2 border rounded-md bg-emerald-600 text-white" />
          <input type="text" name="image" placeholder="Image URL" value={newProduct.image} onChange={handleInputChange} className="w-full p-2 mb-2 border rounded-md bg-gray-700 text-white" />
          <div className="flex justify-between">
            <button onClick={addProduct} className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600">
              Save
            </button>
            <button onClick={() => setAddingProduct(false)} className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600">
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Product List */}
      {products.length > 0 ? (
        <div className="flex flex-wrap gap-32 justify-center">
          {products.map((product) => (
            <div key={product._id} className="border p-4 rounded-md shadow-md w-128 min-w-16 bg-gray-200 flex flex-col items-center">
              <img src={product.image} alt={product.name} className="w-32 h-64 min-h-16 min-w-8 object-cover rounded-md text-gray-800" />
              <h2 className="font-bold text-lg mt-2 text-gray-800">{product.name}</h2>
              <p className="text-emerald-600 font-semibold">${product.price}</p>
              <button onClick={() => deleteProduct(product._id)} className="mt-3 px-3 py-1 bg-red-500 text-black rounded-md hover:bg-red-600">
                Delete
              </button>
              
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-lg mt-5">No products available...</p>
      )}
    </div>
  );
};

export default ProductCard;
