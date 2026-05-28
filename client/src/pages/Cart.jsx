import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const items =
      JSON.parse(localStorage.getItem("cart")) || [];

    setCartItems(items);
  }, []);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <div
      style={{
        padding: "30px",
        minHeight: "100vh",
        background: "#f5f5f5",
      }}
    >
      <h1
        style={{
          fontSize: "45px",
          marginBottom: "30px",
        }}
      >
        Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <h2>No Products In Cart</h2>
      ) : (
        <>
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(280px,1fr))",
              gap: "20px",
            }}
          >
            {cartItems.map((item, index) => (
              <div
                key={index}
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "15px",
                  overflow: "hidden",
                  background: "white",
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "100%",
                    height: "220px",
                    objectFit: "cover",
                  }}
                />

                <div style={{ padding: "15px" }}>
                  <h2>{item.name}</h2>

                  <p>{item.description}</p>

                  <h3>₹ {item.price}</h3>
                </div>
              </div>
            ))}
          </div>

          <h1
            style={{
              marginTop: "40px",
            }}
          >
            Total: ₹ {totalPrice}
          </h1>

          <button
            onClick={() => navigate("/checkout")}
            style={{
              padding: "15px 25px",
              background: "green",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              marginTop: "20px",
              fontSize: "18px",
            }}
          >
            Proceed To Pay
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;