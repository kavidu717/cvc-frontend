import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { addToCart, clearCart } from "../../../utility/CardFunction";

import ImageSlider from "../../ImageSlider";

export default function ProductInfo() {

  const params = useParams();
  const productId = params.id;
  const [product, setProduct] = useState(null);
  const [status, setStatus] = useState("loading");

  useEffect(
    () => {
      console.log(productId);

      axios.get(import.meta.env.VITE_BACKEND_URL+"/api/product/" + productId)
        .then(
          (res) => {
            console.log(res.data);

            // if null
            if (res.data == null) {
              setStatus("not-found");
            }

            // if product found
            if (res.data != null) {
              setProduct(res.data);
              setStatus("found");
            }
          }
        );
    },
    []
  );
   function addclick(){
     addToCart(product.productId,1)
   }
     
   {}

  return (
    <div className="w-full h-[calc(100vh-90px)] bg-slate-200">

      {/* Loading */}
      {
        status == "loading" && (
          <div className="w-full h-screen flex items-center justify-center bg-slate-300">
            <div className="animate-spin rounded-full h-24 w-24 border-4 border-slate-300 border-t-transparent"></div>
          </div>
        )
      }

      {/* Not Found */}
      {
        status == "not-found" && (
          <div className="w-full h-full flex items-center justify-center bg-slate-300">
            <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-md text-center">

              <h1 className="text-7xl font-extrabold text-red-500 mb-4">
                404
              </h1>

              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Product Not Found
              </h2>

              <p className="text-gray-600 mb-6">
                Sorry, the product you are looking for does not exist or has been removed.
              </p>

              <div className="flex justify-center gap-4">
                <button className="px-6 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 active:scale-95 transition">
                  Go Back
                </button>
              </div>

            </div>
          </div>
        )
      }

      {/* Found */}
    {
  status == "found" && (
    <div className="w-full h-full bg-slate-100 p-6 flex justify-center">

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 bg-white rounded-3xl shadow-xl p-8">

        {/* Left: Image Section */}
        <div className="flex flex-col items-center gap-4">
          <div className="w-full md:w-[400px] h-[400px] bg-slate-50 rounded-2xl flex items-center justify-center p-4">
            <ImageSlider image={product.image} />
          </div>
          {/* You can keep thumbnails inside ImageSlider */}
        </div>

        {/* Right: Product Details */}
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            {product.productName}
          </h1>

          <p className="text-lg font-bold text-gray-500 italic">
            {product.altName.join(" | ")}
          </p>

          <p className="text-gray-700 text-base leading-relaxed border-b pb-4">
            {product.description}
          </p>

          {/* Price */}
          <div className="flex items-center gap-3">
            {product.price > product.lastPrice && (
              <span className="text-lg text-gray-400 line-through">
                Rs. {product.price}
              </span>
            )}
            <span className="text-2xl md:text-3xl font-bold text-green-600">
              Rs. {product.lastPrice}
            </span>
            {product.price > product.lastPrice && (
              <span className="text-sm font-semibold text-red-600 bg-red-100 px-3 py-1 rounded-full">
                SALE
              </span>
            )}
          </div>

          {/* Stock */}
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            <span className="text-green-700 font-medium">In Stock</span>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button className="flex-1 bg-slate-900 text-white py-3 rounded-xl hover:bg-slate-800 transition font-semibold"
            onClick={addclick}>
              Add to Cart
            </button>
            <button className="flex-1 border-2 border-slate-900 text-slate-900 py-3 rounded-xl hover:bg-slate-100 transition font-semibold">
              Buy Now
            </button>
          </div>

        </div>

      </div>

    </div>
  )
}

    </div>
  );
}
