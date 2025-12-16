import { Link } from "react-router-dom";
import { BsGraphUp } from "react-icons/bs";
import { FaShoppingCart, FaUsers } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { Routes, Route } from "react-router-dom";
import AdminProductPage from "./admin/AdminProductPage";
import AddProductForm from "./admin/AddProductForm";



export default function AdminHomePage() {
  return (
    <div className="w-full h-screen flex bg-blue-400">

      {/* Sidebar */}
      <div className="w-[20%] h-screen bg-slate-800 text-white flex flex-col p-4 space-y-4">

        <h2 className="text-xl font-bold text-center mb-6">Admin Panel</h2>

        <Link
          to="/admin/dashboard"
          className="flex items-center gap-3 px-4 py-2 rounded hover:bg-slate-700 transition"
        >
          <BsGraphUp />
          <span>Dashboard</span>
        </Link>
 
        <Link
          to="/admin/products"
          className="flex items-center gap-3 px-4 py-2 rounded hover:bg-slate-700 transition"
        >
          <AiFillProduct />
          <span>products</span>
        </Link>

        <Link
          to="/admin/order"
          className="flex items-center gap-3 px-4 py-2 rounded hover:bg-slate-700 transition"
        >
          <FaShoppingCart />
          <span>Orders</span>
        </Link>

        <Link
          to="/admin/customer"
          className="flex items-center gap-3 px-4 py-2 rounded hover:bg-slate-700 transition"
        >
          <FaUsers />
          <span>Customers</span>
        </Link>
      </div>

      {/* Main Content */}
      <div className="w-[80%] h-screen bg-orange-200">
        <Routes path="/*">
          <Route path="/dashboard" element={<h1>dashboard</h1>}/>
          <Route path="/products" element={<AdminProductPage/>}/> 
          <Route path="/products/addProduct" element={<AddProductForm/>}/>  
          <Route path="/order" element={<h1>orders</h1>}/>
          <Route path="/customer" element={<h1>customer</h1>}/>
        </Routes>
      </div>

    </div>
  );
}
