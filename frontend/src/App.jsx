import { useState } from 'react'
import './App.css'
import { TiShoppingCart } from "react-icons/ti";
import logo from "./logo.png";
import SearchBar from "./SearchBar";
import ProductCard from "./components/ProductCard";

function App() {
  const [count, setCount] = useState(0)
  const sampleData = [];
  const products = [
    {
      id: 1,
      image: "https://via.placeholder.com/150",
      title: "Product 1",
      price: 29.99,
      description: "A great product for everyday use."
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      title: "Product 2",
      price: 49.99,
      description: "Another amazing product for your needs."
    },
    {
      id: 3,
      image: "https://via.placeholder.com/150",
      title: "Product 3",
      price: 19.99,
      description: "Affordable and high-quality."
    }
  ]; 

  return (
    <>
    <header>
      <nav class = "navbar" style={{ display: "flex", justifyContent: "space-between", alignItems: "center",}}>
        <ul className='nav-links' style={{ display: "flex", justifyContent: "space-between", listStyle: "none", width: "100%"}}>

          <li class = "Home"><a href="http://"><img src={logo} alt="App Logo" style={{ width: "100px", height:"100" }} /></a></li>

          <li class = "SearchBar">
            <div className="App">
            <SearchBar data={sampleData} />
            </div>
          </li>

          <li class = "Cart" ><a href="http://"><TiShoppingCart style={{height: "35", width:"50", color:"gray"}} /></a></li>

        </ul>
          
      </nav>
    </header>
      <main>

        <div className="product-container">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
          description={product.description}
        />
      ))}
    </div>
        
      </main>
      <footer>
        <ul>
          <li> <a href="http://">about</a></li>
          <li><a href="http://">contact us</a></li>
          <li><a href="http://">terms and conditions</a></li>
        </ul>
      </footer>
    </>
  )
}

export default App
