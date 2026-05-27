import { useEffect, useState }
from "react";

import API
from "../services/api";

import ProductCard
from "../components/ProductCard";

import {
FaShippingFast,
FaTags,
FaShieldAlt
}
from "react-icons/fa";

function Home() {

const [products, setProducts] =
useState([]);

useEffect(() => {

fetchProducts();

}, []);

const fetchProducts =
async () => {

try {

const res =
await API.get(
"/api/products/all"
);

setProducts(
res.data
);

}

catch (error) {

console.log(
"Product Fetch Error:",
error
);

}

};

return (

<div className="bg-gray-100 min-h-screen">

<div
className="bg-gradient-to-r from-purple-700 via-pink-500 to-red-500 text-white py-24"
>

<div className="max-w-7xl mx-auto px-6">

<h1 className="text-6xl font-extrabold animate-pulse">

Future Shopping Experience

</h1>

<p className="text-xl mt-5 w-1/2">

Shop premium products with a futuristic dashboard.

</p>

<button
className="mt-8 bg-white text-purple-700 px-8 py-4 rounded-full font-bold hover:scale-110 transition"
>

Shop Now

</button>

</div>

</div>

<div
className="grid md:grid-cols-3 gap-6 px-10 -mt-10"
>

<div className="bg-white p-8 rounded-2xl shadow">

<FaShippingFast
size={40}
/>

<h2 className="font-bold mt-4">

Fast Delivery

</h2>

</div>

<div className="bg-white p-8 rounded-2xl shadow">

<FaTags
size={40}
/>

<h2 className="font-bold mt-4">

Best Deals

</h2>

</div>

<div className="bg-white p-8 rounded-2xl shadow">

<FaShieldAlt
size={40}
/>

<h2 className="font-bold mt-4">

Secure Payments

</h2>

</div>

</div>

<div className="max-w-7xl mx-auto px-8 py-12">

<h2 className="text-4xl font-bold mb-10">

Trending Products

</h2>

<div
className="grid md:grid-cols-3 gap-8"
>

{

products.map(
(product) => (

<ProductCard
key={product.id}
product={product}
/>

)

)

}

</div>

</div>

</div>

)

}

export default Home;