import { useEffect, useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    setCartItems(savedCart);
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
      }}
    >
      <h1
        style={{
          fontSize: "40px",
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
        </>
      )}
    </div>
  );
};

export default Cart;