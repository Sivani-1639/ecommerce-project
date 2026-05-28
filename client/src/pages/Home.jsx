import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const API_URL =
    import.meta.env.VITE_API_URL ||
    "https://ecommerce-project-c08i.onrender.com";

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/products`);
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addToCart = (product) => {
    const existingCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    existingCart.push(product);

    localStorage.setItem(
      "cart",
      JSON.stringify(existingCart)
    );

    alert("Product Added To Cart");
  };

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#111" : "#f5f5f5",
        color: darkMode ? "#fff" : "#000",
        minHeight: "100vh",
      }}
    >
      {/* NAVBAR */}

      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 30px",
          background: darkMode ? "#222" : "#fff",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <h1
          style={{
            fontSize: "50px",
            color: "#b026ff",
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
            fontSize: "30px",
          }}
        >
          <a
            href="/"
            style={{
              textDecoration: "none",
              color: darkMode ? "#fff" : "#000",
              fontSize: "22px",
            }}
          >
            Home
          </a>

          <a
            href="/cart"
            style={{
              textDecoration: "none",
              color: darkMode ? "#fff" : "#000",
            }}
          >
            🛒
          </a>

          <span
            style={{
              color: darkMode ? "#fff" : "#000",
            }}
          >
            👤
          </span>

          <button
            onClick={() => setDarkMode(!darkMode)}
            style={{
              border: "none",
              background: "transparent",
              cursor: "pointer",
              fontSize: "28px",
              color: darkMode ? "#fff" : "#000",
            }}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}

      <div
        style={{
          padding: "60px 30px",
          background:
            "linear-gradient(to right, #7b2ff7, #f107a3)",
          color: "white",
        }}
      >
        <h1
          style={{
            fontSize: "60px",
            marginBottom: "20px",
          }}
        >
          Premium Shopping Experience
        </h1>

        <p
          style={{
            fontSize: "24px",
            marginBottom: "30px",
          }}
        >
          Shop premium products with futuristic UI.
        </p>

        <button
          style={{
            padding: "15px 40px",
            borderRadius: "50px",
            border: "none",
            fontSize: "20px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Shop Now
        </button>
      </div>

      {/* FEATURES */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
          padding: "40px 30px",
        }}
      >
        {[
          {
            title: "Fast Delivery",
            icon: "🚚",
          },
          {
            title: "Best Deals",
            icon: "🏷️",
          },
          {
            title: "Secure Payments",
            icon: "🛡️",
          },
        ].map((item, index) => (
          <div
            key={index}
            style={{
              background: darkMode ? "#222" : "#fff",
              padding: "40px",
              borderRadius: "20px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <h1>{item.icon}</h1>

            <h2>{item.title}</h2>
          </div>
        ))}
      </div>

      {/* PRODUCTS */}

      <div
        style={{
          padding: "20px 30px",
        }}
      >
        <h1
          style={{
            fontSize: "50px",
            marginBottom: "30px",
          }}
        >
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
                background: darkMode ? "#222" : "#fff",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow:
                  "0 2px 10px rgba(0,0,0,0.1)",
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

              <div style={{ padding: "20px" }}>
                <h2>{product.name}</h2>

                <p>{product.description}</p>

                <h2>₹ {product.price}</h2>

                <button
                  onClick={() => addToCart(product)}
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "none",
                    borderRadius: "10px",
                    background: "#b026ff",
                    color: "white",
                    fontSize: "18px",
                    cursor: "pointer",
                    marginTop: "15px",
                  }}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;