import { useEffect, useState } from "react";
import axios from "axios";

const API = import.meta.env.VITE_API_URL;

const Home = () => {
  const [products, setProducts] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetchProducts();

    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    console.log(savedCart);
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${API}/api/products`);
      setProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // ADD TO CART
  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Product Added To Cart");
  };

  return (
    <div
      style={{
        background: darkMode ? "#111" : "#fff",
        color: darkMode ? "#fff" : "#000",
        minHeight: "100vh",
      }}
    >
      {/* NAVBAR */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px 30px",
          alignItems: "center",
          background: darkMode ? "#1a1a1a" : "#fff",
        }}
      >
        <h1
          style={{
            color: "#a020f0",
            fontSize: "45px",
            fontWeight: "bold",
          }}
        >
          ShopEase
        </h1>

        <div
          style={{
            display: "flex",
            gap: "25px",
            alignItems: "center",
            fontSize: "20px",
            color: darkMode ? "#fff" : "#000",
          }}
        >
          <span>Home</span>
          <span>🛒</span>
          <span>👤</span>

          <button
            onClick={() => setDarkMode(!darkMode)}
            style={{
              border: "none",
              background: "transparent",
              cursor: "pointer",
              fontSize: "22px",
              color: darkMode ? "#fff" : "#000",
            }}
          >
            {darkMode ? "☀" : "🌙"}
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section
        style={{
          background: "linear-gradient(to right, purple, red)",
          color: "white",
          padding: "60px 30px",
        }}
      >
        <h2 style={{ fontSize: "28px" }}>
          Shop premium products with a futuristic dashboard.
        </h2>

        <button
          style={{
            marginTop: "30px",
            padding: "15px 30px",
            borderRadius: "12px",
            border: "none",
            background: "white",
            color: "purple",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Shop Now
        </button>
      </section>

      {/* FEATURES */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
          padding: "30px",
        }}
      >
        <div
          style={{
            background: darkMode ? "#222" : "#f5f5f5",
            padding: "40px",
            borderRadius: "20px",
          }}
        >
          <h2>🚚 Fast Delivery</h2>
        </div>

        <div
          style={{
            background: darkMode ? "#222" : "#f5f5f5",
            padding: "40px",
            borderRadius: "20px",
          }}
        >
          <h2>🏷 Best Deals</h2>
        </div>

        <div
          style={{
            background: darkMode ? "#222" : "#f5f5f5",
            padding: "40px",
            borderRadius: "20px",
          }}
        >
          <h2>🛡 Secure Payments</h2>
        </div>
      </section>

      {/* PRODUCTS */}
      <section style={{ padding: "30px" }}>
        <h1 style={{ marginBottom: "20px", fontSize: "45px" }}>
          Trending Products
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(280px,1fr))",
            gap: "25px",
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                border: darkMode
                  ? "1px solid #333"
                  : "1px solid #ddd",
                borderRadius: "15px",
                overflow: "hidden",
                background: darkMode ? "#1e1e1e" : "#fff",
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "15px" }}>
                <h2>{product.name}</h2>

                <p>{product.description}</p>

                <h3>₹ {product.price}</h3>

                <button
                  onClick={() => addToCart(product)}
                  style={{
                    width: "100%",
                    padding: "12px",
                    background: "purple",
                    color: "white",
                    border: "none",
                    borderRadius: "10px",
                    cursor: "pointer",
                    marginTop: "10px",
                    fontWeight: "bold",
                  }}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;