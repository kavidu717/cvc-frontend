import Header from "../Header";
import { Routes, Route } from 'react-router-dom';
import ProductInfo from "../Pages/Home/ProductInfo";
import Product from "../Pages/Home/Product";
import Cart from "../Pages/Home/Cart";
export default function HomePage() {
    return (
        <div className=" h-screen w-full ">
          
            <Header/>
       <div className="w-full h-[calc(100vh-100px)] bg-gray-300">
      <Routes path="/*">

         <Route path="/*" element={<div>hoooome</div>}></Route>
          <Route path="/product" element={<Product/>}></Route>
        <Route path="/productInfo/:id" element={<ProductInfo />}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
            </Routes>

       </div>
          

        </div>
    );
}
