import {useContext}
from "react";

import {CartContext}
from "../context/CartContext";

import API
from "../services/api";

function Checkout(){

const {cart}=
useContext(
CartContext
);

const user=
JSON.parse(
localStorage.getItem("user")
);

const total=
cart.reduce(

(sum,item)=>

sum+
(item.price*item.quantity),

0

);

const placeOrder=
async()=>{

await API.post(

"/orders/place",

{

userId:user.id,

products:cart,

totalPrice:total

}

);

alert(
"Order Placed Successfully"
);

};

return(

<div>

<h1>
Checkout
</h1>

<h2>

Total:
₹{total}

</h2>

<button
onClick={
placeOrder
}
>

Place Order

</button>

</div>

)

}

export default Checkout;