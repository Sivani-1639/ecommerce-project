import { useContext } from "react";

import { FaHeart, FaStar } from "react-icons/fa";

import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {

const { addToCart } =
useContext(CartContext);

const productImages = {

"MacBook Air M4":
"https://images.unsplash.com/photo-1517336714739-489689fd1ca8",

"iPhone 16 Pro":
"https://images.unsplash.com/photo-1592750475338-74b7b21085ab",

"Sony WH-1000XM5":
"https://images.unsplash.com/photo-1505740420928-5e560c06d30e",

"Apple Watch Ultra":
"https://images.unsplash.com/photo-1546868871-7041f2a55e12",

"Samsung Galaxy S25":
"https://images.unsplash.com/photo-1610945265064-0e34e5519bbf",

"Nike Air Max":
"https://images.unsplash.com/photo-1542291026-7eec264c27ff",

"Canon EOS R6":
"https://images.unsplash.com/photo-1516035069371-29a1b244cc32",

"AirPods Pro 2":
"https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1",

"Gaming Mouse RGB":
"https://images.unsplash.com/photo-1613141411244-0e4ac259d217",

"PlayStation 5":
"https://images.unsplash.com/photo-1606813907291-d86efa9b94c"

};

return (

<div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl overflow-hidden hover:scale-105 hover:rotate-1 duration-300">

<div className="relative">

<img

src={
productImages[product.name]
||
"https://picsum.photos/300"
}

alt={product.name}

className="w-full h-60 object-cover"

/>

<div className="absolute top-4 left-4 bg-pink-500 text-white px-3 py-1 rounded-full">

Hot

</div>

<div className="absolute top-4 right-4 text-white">

<FaHeart/>

</div>

</div>

<div className="p-5">

<h2 className="text-2xl font-bold">

{product.name}

</h2>

<p className="mt-2 text-gray-500">

{product.description}

</p>

<div className="flex gap-1 mt-3 text-yellow-500">

<FaStar/>
<FaStar/>
<FaStar/>
<FaStar/>
<FaStar/>

</div>

<div className="flex justify-between mt-4">

<h2 className="text-3xl font-bold">

₹{product.price}

</h2>

<p className="text-green-500">

In Stock

</p>

</div>

<button

onClick={() =>
addToCart(product)
}

className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 rounded-xl text-white mt-5"

>

Add To Cart

</button>

</div>

</div>

)

}

export default ProductCard;