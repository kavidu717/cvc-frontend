import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useLocation } from "react-router-dom";
import mediaUpload from "../../../utility/mediaUpload.js";

export default function EddProductForm() {
 const location = useLocation();
const navigate = useNavigate();

 const product=location.state.product
 const altName=product.altName.join(",")


if(product==null){
  navigate("/admin/products")
}

  const [productId, setProductId] = useState(product.productId);
  const [productName, setProductName] = useState(product.productName);
  const [alternativeNames, setAlternativeNames] = useState(altName);
  const [imageFiles, setImageFile] = useState([]);
  const [price, setPrice] = useState(product.price );
  const [lastPrice, setLastPrice] = useState(product.lastPrice);
  const [stock, setStock] = useState(product.stock);
  const [description, setDescription] = useState(product.description);
  

  // use the uselocation hook
 
  console.log(location)

  async function handleSubmit() {

      const altnames = alternativeNames.split(",");
        const promisesArray = [];
     let imgurl=product.image
         if(imageFiles.length>0){

  

    for (let i = 0; i < imageFiles.length; i++) {
      promisesArray[i] = mediaUpload(imageFiles[i]);
    }

     imgurl = await Promise.all(promisesArray);
}
   // console.log(imgurl);

    const productData = {
      productId,
      productName,
      altName: altnames,
      image: imgurl,
      price,
      lastPrice,
      stock,
      description,
    };

    const token = localStorage.getItem("token");

    try {
      await axios.put(import.meta.env.VITE_BACKEND_URL+"/api/product/"+product.productId, productData, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      toast.success("Product added successfully");
      navigate("/admin/products");
    } catch (error) {
      console.error(error);
      toast.error("Failed to add product");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-300 via-slate-700 to-purple-100 p-6">
      <div className="w-full max-w-lg bg-slate-400 rounded-2xl shadow-2xl p-8 space-y-5">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Edit Product
        </h1>

        {/* Product ID */}
        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1">
            Product ID
          </label>
          <input disabled
            type="text"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        {/* Product Name */}
        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1">
            Product Name
          </label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        {/* Alternative Names */}
        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1">
            Alternative Names (comma separated)
          </label>
          <input
            type="text"
            value={alternativeNames}
            onChange={(e) => setAlternativeNames(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1">
            Product Images
          </label>
          <input
            type="file"
            multiple
            onChange={(e) => setImageFile(e.target.files)}
            className="w-full rounded-lg border border-dashed border-gray-300 px-3 py-2 text-gray-500
                       file:mr-4 file:rounded-lg file:border-0
                       file:bg-blue-100 file:px-4 file:py-2
                       file:text-blue-700 hover:file:bg-blue-200"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1">
            Price
          </label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        {/* Last Price */}
        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1">
            Last Price
          </label>
          <input
            type="number"
            value={lastPrice}
            onChange={(e) => setLastPrice(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        {/* Stock */}
        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1">
            Stock
          </label>
          <input
            type="number"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1">
            Description
          </label>
          <textarea
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600
                     text-white py-3 font-semibold shadow-md
                     hover:shadow-lg hover:scale-[1.02]
                     transition-all duration-200"
        >
          Update Product
        </button>
      </div>
    </div>
  );
}
