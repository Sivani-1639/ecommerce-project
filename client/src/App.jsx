import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Admin from "./pages/Admin";
import Orders from "./pages/Orders";

import {
Routes,
Route
}
from "react-router-dom";

function App(){

return(

<>

<Navbar/>

<Routes>

<Route
path="/"
element={<Home/>}
/>

<Route
path="/login"
element={<Login/>}
/>

<Route
path="/register"
element={<Register/>}
/>

<Route
path="/cart"
element={<Cart/>}
/>

<Route
path="/admin"
element={<Admin/>}
/>

<Route
path="/orders"
element={<Orders/>}
/>

</Routes>

</>

)

}

export default App;