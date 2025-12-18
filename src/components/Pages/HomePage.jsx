import Header from "../Header";
import { Routes, Route } from 'react-router-dom';
import ProductInfo from "../Pages/Home/ProductInfo";
export default function HomePage() {
    return (
        <div className=" h-screen w-full ">
          
            <Header/>
       <div className="w-full h-[calc(100vh-90px)] bg-slate-500">
      <Routes path="/*">

         <Route path="/*" element={<div>home</div>}></Route>
        <Route path="/productInfo/:id" element={<ProductInfo />}></Route>

            </Routes>

       </div>
          

        </div>
    );
}
