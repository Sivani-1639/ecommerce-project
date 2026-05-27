import {useContext,useState} from "react";
import {CartContext} from "../context/CartContext";
import API from "../services/api";

function Orders(){

const {cart}=useContext(CartContext);

const [message,setMessage]=useState("");

const total=
cart.reduce(
(sum,item)=>
sum+(item.price*item.quantity),
0
);

const checkout=async()=>{

try{

await API.post(
"/api/orders/create",
{
items:cart,
totalAmount:total
}
);

setMessage(
"Order Placed Successfully"
);

}
catch(error){

console.log(error);

}

};

return(

<div className="p-10">

<h1 className="text-4xl font-bold mb-8">

Checkout

</h1>

{

cart.map(item=>(

<div
key={item.id}
className="bg-white p-4 rounded shadow mb-4"
>

<h2>{item.name}</h2>

<p>

Qty:
{item.quantity}

</p>

<p>

₹{item.price}

</p>

</div>

))

}

<h2 className="text-3xl mt-8">

Total:
₹{total}

</h2>

<button

onClick={checkout}

className=
"bg-black text-white px-6 py-3 rounded mt-5"

>

Place Order

</button>

<h3 className="mt-5">

{message}

</h3>

</div>

)

}

export default Orders;