import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
  import mediaUpload from "../../../utility/mediaUpload.js";

export default function AddProductForm() {
  const [productId, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [alternativeNames, setAlternativeNames] = useState("");
 // const [imageUrls, setImageUrls] = useState("");
  const [imageFiles, setImageFile] = useState([]);
  const [price, setPrice] = useState("");
  const [lastPrice, setLastPrice] = useState("");
  const [stock, setStock] = useState("");
  const [description, setDescription] = useState("");
  const naviGate = useNavigate();


  async function handleSubmit(e) {
    e.preventDefault();

    const altnames = alternativeNames.split(",");
   const promisesArray=[]


    for(let i=0; i<imageFiles.length;i++){
      promisesArray[i]=mediaUpload(imageFiles[i])
               
    }
     
    const imgurl= await Promise.all(promisesArray)  
    console.log(imgurl)
  
    

 
    const product = {
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
      await axios.post("http://localhost:5000/api/product", product, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
     // use the toast insted of alert
     // use navigate hook to navi gate the pages
     naviGate("/admin/products");
      toast.success("Product added successfully");

    } catch (error) {
      console.error(error);
      toast.error("Failed to add product");
    }
  }

  return (
    <div className="bg-blue-100 min-h-screen w-full flex items-center justify-center p-8">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Add Product</h1>

        
          <div className="flex flex-col">
            <label className="font-semibold">Product ID</label>
            <input
              type="text"
              value={productId}
              onChange={(e) => setProductId(e.target.value)}
              className="border p-2 rounded"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold">Product Name</label>
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="border p-2 rounded"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold">
              Alternative Names (comma separated)
            </label>
            <input
              type="text"
              value={alternativeNames}
              onChange={(e) => setAlternativeNames(e.target.value)}
              className="border p-2 rounded"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold">
              Image URLs (comma separated)
            </label>
            <input
              type="file"
              onChange={

                (e) =>{
              //     console.log(e.target.files)
                   setImageFile(e.target.files);
                } 
                
                 
              
              
              }
             
              className="border p-2 rounded" multiple
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold">Price</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="border p-2 rounded"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold">Last Price</label>
            <input
              type="number"
              value={lastPrice}
              onChange={(e) => setLastPrice(e.target.value)}
              className="border p-2 rounded"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold">Stock</label>
            <input
              type="number"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              className="border p-2 rounded"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border p-2 rounded"
              rows={3}
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 rounded font-semibold hover:bg-blue-600"
            onClick={handleSubmit} >
            Add Product
          </button>
       
      </div>
    </div>
  );
}
