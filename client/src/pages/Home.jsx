import { useEffect, useState } from "react";
import axios from "axios";

const API = import.meta.env.VITE_API_URL;

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${API}/api/products`);
      setProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {/* HERO SECTION */}
      <section
        style={{
          background: "linear-gradient(to right, purple, red)",
          color: "white",
          padding: "60px 30px",
        }}
      >
        <h1 style={{ fontSize: "50px", fontWeight: "bold" }}>
          ShopEase
        </h1>

        <p style={{ fontSize: "22px", marginTop: "10px" }}>
          Shop premium products with a futuristic dashboard.
        </p>

        <button
          style={{
            marginTop: "25px",
            padding: "12px 25px",
            borderRadius: "10px",
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
          display: "flex",
          gap: "20px",
          padding: "30px",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            flex: 1,
            minWidth: "250px",
            background: "#f5f5f5",
            padding: "30px",
            borderRadius: "15px",
          }}
        >
          <h2>🚚 Fast Delivery</h2>
        </div>

        <div
          style={{
            flex: 1,
            minWidth: "250px",
            background: "#f5f5f5",
            padding: "30px",
            borderRadius: "15px",
          }}
        >
          <h2>🏷 Best Deals</h2>
        </div>

        <div
          style={{
            flex: 1,
            minWidth: "250px",
            background: "#f5f5f5",
            padding: "30px",
            borderRadius: "15px",
          }}
        >
          <h2>🛡 Secure Payments</h2>
        </div>
      </section>

      {/* PRODUCTS */}
      <section style={{ padding: "30px" }}>
        <h1 style={{ marginBottom: "20px" }}>
          Trending Products
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "12px",
                overflow: "hidden",
                padding: "15px",
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                }}
              />

              <h2>{product.name}</h2>

              <p>{product.description}</p>

              <h3>₹ {product.price}</h3>

              <button
                style={{
                  width: "100%",
                  padding: "10px",
                  background: "purple",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  marginTop: "10px",
                }}
              >
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;