import {useContext}
from "react";

import {CartContext}
from "../context/CartContext";

function Cart(){

const {cart}=
useContext(
CartContext
);

const total=
cart.reduce(

(sum,item)=>

sum+
(item.price*item.quantity)

,0

);

return(

<div className="bg-gray-100 min-h-screen p-10">

<h1 className="text-5xl font-bold mb-8">

Shopping Cart

</h1>

{

cart.length===0

?

<div className="bg-white p-10 rounded-xl text-center shadow">

<h2 className="text-2xl">

Your cart is empty

</h2>

</div>

:

<>

{

cart.map(item=>(

<div

key={item.id}

className="bg-white p-6 rounded-xl shadow mb-5 flex justify-between"

>

<div>

<h2 className="text-2xl font-bold">

{item.name}

</h2>

<p>

Quantity:
{item.quantity}

</p>

<p>

₹{item.price}

</p>

</div>

</div>

))

}

<div className="bg-white p-6 rounded-xl shadow mt-10">

<h2 className="text-3xl font-bold">

Total ₹{total}

</h2>

<button
className="mt-5 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-10 py-3 rounded-full"
>

Proceed Checkout

</button>

</div>

</>

}

</div>

)

}

export default Cart;