import { useState, useEffect } from "react";
import API from "../services/api";

import {
FaBox,
FaUsers,
FaShoppingBag,
FaPlus
}
from "react-icons/fa";

function Admin(){

const [products,setProducts]=useState([]);

const [form,setForm]=useState({

name:"",
description:"",
price:"",
image:"",
stock:""

});

useEffect(()=>{

fetchProducts();

},[]);

const fetchProducts=async()=>{

try{

const res=
await API.get(
"/api/products/all"
);

setProducts(
res.data
);

}
catch(error){

console.log(
"Fetch Error:",
error
);

}

};

const handleChange=(e)=>{

setForm({

...form,

[e.target.name]:
e.target.value

});

};

const addProduct=
async(e)=>{

e.preventDefault();

try{

const res=
await API.post(

"/products/add",

{

name:form.name,

description:form.description,

price:Number(form.price),

image:form.image,

stock:Number(form.stock)

}

);

console.log(res.data);

alert(
"Product Added Successfully"
);

setForm({

name:"",
description:"",
price:"",
image:"",
stock:""

});

fetchProducts();

}
catch(error){

console.log(
"Add Error:",
error.response?.data || error
);

alert(
"Product Add Failed"
);

}

};

return(

<div className="min-h-screen p-10 bg-gray-100 dark:bg-black">

<h1 className="text-5xl font-bold mb-8 dark:text-white">

Admin Dashboard

</h1>

<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-2xl shadow">

<FaBox size={40}/>

<h2>Total Products</h2>

<h1 className="text-3xl">

{products.length}

</h1>

</div>

<div className="bg-white p-6 rounded-2xl shadow">

<FaUsers size={40}/>

<h2>Users</h2>

<h1 className="text-3xl">

24

</h1>

</div>

<div className="bg-white p-6 rounded-2xl shadow">

<FaShoppingBag size={40}/>

<h2>Orders</h2>

<h1 className="text-3xl">

32

</h1>

</div>

</div>

<form

onSubmit={addProduct}

className="bg-white p-8 rounded-2xl shadow mt-10"

>

<h2 className="text-2xl mb-5">

<FaPlus className="inline"/>

 Add Product

</h2>

<input
name="name"
value={form.name}
placeholder="Product Name"
onChange={handleChange}
className="border p-3 w-full mb-3"
/>

<input
name="description"
value={form.description}
placeholder="Description"
onChange={handleChange}
className="border p-3 w-full mb-3"
/>

<input
name="price"
value={form.price}
placeholder="Price"
onChange={handleChange}
className="border p-3 w-full mb-3"
/>

<input
name="image"
value={form.image}
placeholder="Image URL"
onChange={handleChange}
className="border p-3 w-full mb-3"
/>

<input
name="stock"
value={form.stock}
placeholder="Stock"
onChange={handleChange}
className="border p-3 w-full mb-3"
/>

<button
type="submit"
className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-3 rounded-full"
>

Add Product

</button>

</form>

<div className="grid md:grid-cols-3 gap-8 mt-10">

{

products.map((item)=>(

<div
key={item.id}
className="bg-white rounded-2xl p-5 shadow"
>

<img

src={
item.image ||

"https://picsum.photos/300"
}

className="h-52 w-full object-cover rounded"
/>

<h2 className="text-2xl font-bold mt-4">

{item.name}

</h2>

<p>

{item.description}

</p>

<h3 className="text-xl font-bold mt-2">

₹{item.price}

</h3>

<p>

Stock:
{item.stock}

</p>

</div>

))

}

</div>

</div>

)

}

export default Admin;