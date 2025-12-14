import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
export default function AdminProductPage() {
  
      const [products, setProducts] = useState([
        
    {
        "_id": "693bc99ac4f1ec69cbaf0a36",
        "productId": "BEAUTY-SKIN-001",
        "productName": "Radiance Vitamin C Serum",
        "altName": [
            "Brightening Serum",
            "Anti-Aging Face Oil",
            "Glow Booster"
        ],
        "image": [
            "https://example.com/images/serum-bottle-front.jpg",
            "https://example.com/images/serum-texture.jpg",
            "https://example.com/images/serum-packaging.jpg"
        ],
        "price": 3500,
        "lastPrice": 4200,
        "stock": 100,
        "description": "A lightweight, fast-absorbing serum packed with 10% Vitamin C to brighten skin tone, reduce dark spots, and boost collagen production. Suitable for all skin types.",
        "__v": 0
    },
    {
        "_id": "693c308c1063f49f93969bc9",
        "productId": "BEAUTY-SKIN-002",
        "productName": "Radiance Vitamin C Serum",
        "altName": [
            "Brightening Serum",
            "Anti-Aging Face Oil",
            "Glow Booster"
        ],
        "image": [
            "https://example.com/images/serum-bottle-front.jpg",
            "https://example.com/images/serum-texture.jpg",
            "https://example.com/images/serum-packaging.jpg"
        ],
        "price": 3500,
        "lastPrice": 4200,
        "stock": 100,
        "description": "A lightweight, fast-absorbing serum packed with 10% Vitamin C to brighten skin tone, reduce dark spots, and boost collagen production. Suitable for all skin types.",
        "__v": 0
    }

      ])
     useEffect(
        () => {
             //use map function
       axios.get("http://localhost:5000/api/product").then
       ((res) => {
           console.log(res.data) 
         //  setProducts(res.data)
       })
     },[]
    )
       //  console.log(products);
     

    return (
             <div>
         <h1>admin product page</h1>
    {products.map((product,index) => (
              <div  key={index}>
                {index}

                {product.productName}

          </div>
))}

             </div>
       

        )

}
 