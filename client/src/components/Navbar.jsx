import {Link,useNavigate}
from "react-router-dom";

import {
FaMoon,
FaSun,
FaShoppingCart,
FaUserCircle
}
from "react-icons/fa";

import {
useContext
}
from "react";

import {
ThemeContext
}
from "../context/ThemeContext";

function Navbar(){

const navigate=
useNavigate();

const user=
JSON.parse(
localStorage.getItem("user")
);

const {
darkMode,
setDarkMode
}
=
useContext(
ThemeContext
);

const logout=()=>{

localStorage.clear();

navigate("/");

window.location.reload();

};

return(

<nav className="bg-white dark:bg-gray-900 dark:text-white shadow-lg sticky top-0 z-50">

<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

<h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">

ShopEase

</h1>

<div className="flex items-center gap-6">

<Link
className="hover:text-purple-500"
to="/"
>
Home
</Link>

<Link
to="/cart"
className="hover:text-purple-500"
>

<FaShoppingCart
size={24}
className="text-inherit"
/>

</Link>

<Link
to="/login"
>

<FaUserCircle
size={24}
className="text-inherit"
/>

</Link>

<button

onClick={()=>

setDarkMode(
!darkMode
)

}

>

{

darkMode

?

<FaSun
size={24}
className="text-yellow-400"
/>

:

<FaMoon
size={24}
className="text-black dark:text-white"
/>

}

</button>

{

user?.role==="admin"

&&

<Link

to="/admin"

className="bg-gradient-to-r from-purple-600 to-pink-500 px-4 py-2 rounded-full text-white"

>

Dashboard

</Link>

}

{

user&&

<button

onClick={logout}

className="bg-red-500 px-4 py-2 rounded-full text-white"

>

Logout

</button>

}

</div>

</div>

</nav>

)

}

export default Navbar;