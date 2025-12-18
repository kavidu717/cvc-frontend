import axios from "axios";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { FaEdit, FaTrash, FaBoxOpen, FaPlus } from "react-icons/fa";
import { Link,useNavigate } from "react-router-dom";

export default function AdminProductPage() {
  const [products, setProducts] = useState([]);
  const [productLoader, setProductLoader] = useState(false);

  useEffect(() => {
    if (!productLoader) {
      axios
        .get("http://localhost:5000/api/product")
        .then((res) => {
          setProducts(res.data);
          setProductLoader(true);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [productLoader]);
      
  const navigate=useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-200 to-slate-600 p-8 relative">
      {/* Add Product Button */}
      <Link
        to={"/admin/products/addProduct"}
        className="absolute right-0 bottom-8 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition transform hover:scale-110"
      >
        <FaPlus className="w-5 h-5" />
      </Link>

      {/* Header Section */}
      <div className="mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold text-gray-800 border-b-4 border-blue-500 inline-block pb-2">
            Admin Products
          </h1>
          <p className="text-gray-600 mt-1">Manage all products in your store</p>
        </div>

        <div className="flex items-center gap-2 text-gray-700 text-lg font-semibold">
          <FaBoxOpen className="text-2xl" />
          <span>Total Products: {products.length}</span>
        </div>
      </div>

      {/* Table */}
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full overflow-x-auto shadow-lg rounded-xl bg-white">
          <table className="min-w-full text-sm table-auto border-collapse">
            {/* Table Head */}
            <thead className="bg-gray-900 text-white uppercase tracking-wider">
              <tr>
                <th className="px-6 py-3 text-left border-b border-gray-700">Product ID</th>
                <th className="px-6 py-3 text-left border-b border-gray-700">Name</th>
                <th className="px-6 py-3 text-left border-b border-gray-700">Price</th>
                <th className="px-6 py-3 text-left border-b border-gray-700">Last Price</th>
                <th className="px-6 py-3 text-left border-b border-gray-700">Stock</th>
                <th className="px-6 py-3 text-left border-b border-gray-700">Description</th>
                <th className="px-6 py-3 text-center border-b border-gray-700">Actions</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {products.length === 0 ? (
                <tr>
                  <td colSpan="7" className="text-center py-10 text-gray-500 font-medium">
                    No products available
                  </td>
                </tr>
              ) : (
                products.map((product, index) => (
                  <tr
                    key={product._id}
                    className={`transition hover:bg-gray-50 ${
                      index % 2 === 0 ? "bg-gray-50/50" : "bg-white"
                    }`}
                  >
                    <td className="px-6 py-4 font-medium">{product.productId}</td>
                    <td className="px-6 py-4 font-semibold text-gray-800">{product.productName}</td>
                    <td className="px-6 py-4 text-green-600 font-bold">Rs. {product.price}</td>
                    <td className="px-6 py-4 text-gray-500 line-through">Rs. {product.lastPrice}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          product.stock > 0
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {product.stock} in stock
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-600 max-w-xs truncate">{product.description}</td>

                    {/* Actions */}
                    <td className="px-6 py-4 text-center">
                      <div className="flex justify-center gap-3">


                        <button
                          className="p-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 hover:scale-110 transition transform"
                          title="Edit Product" onClick={
                            ()=>{
                              // move to the edit product 
                               navigate("/admin/products/editProduct/",
                                {
                                  state:{
                                    product:product

                                    
                                  }
                                }
                               )
                            }
                          }
                        >
                          <FaEdit />
                        </button>


                        <button
                          className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 hover:scale-110 transition transform"
                          title="Delete Product"
                          onClick={() => {
                            const token = localStorage.getItem("token");
                            axios
                              .delete(`http://localhost:5000/api/product/${product.productId}`, {
                                headers: {
                                  Authorization: "Bearer " + token,
                                },
                              })
                              .then((res) => {
                                console.log(res.data);
                                toast.success("Product deleted successfully");
                                setProductLoader(false);
                              })
                              .catch((err) => {
                                toast.error("Failed to delete product");
                                console.error(err);
                              });
                          }}
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
