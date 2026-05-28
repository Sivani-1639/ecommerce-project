import { useEffect, useState } from "react";
import API from "../services/api";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await API.get("/products");
        console.log(res.data);
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Trending Products</h1>

      {products.length === 0 ? (
        <p>No Products Found</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "20px",
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
              />

              <h3>{product.name}</h3>

              <p>{product.description}</p>

              <h2>₹ {product.price}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;