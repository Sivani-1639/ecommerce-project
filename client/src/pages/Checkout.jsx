import { useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();

  const handlePayment = () => {
    alert("Payment Successful ✅");

    localStorage.removeItem("cart");

    navigate("/");

    window.location.reload();
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f5f5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "15px",
          width: "400px",
          textAlign: "center",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        }}
      >
        <h1
          style={{
            marginBottom: "20px",
          }}
        >
          Checkout
        </h1>

        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/5e/UPI-Logo-vector.svg"
          alt="payment"
          style={{
            width: "150px",
            marginBottom: "20px",
          }}
        />

        <h3>Demo Payment Gateway</h3>

        <p
          style={{
            marginTop: "10px",
            marginBottom: "20px",
          }}
        >
          Click below to complete payment.
        </p>

        <button
          onClick={handlePayment}
          style={{
            width: "100%",
            padding: "15px",
            background: "green",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "18px",
          }}
        >
          Proceed To Pay
        </button>
      </div>
    </div>
  );
}

export default Checkout;