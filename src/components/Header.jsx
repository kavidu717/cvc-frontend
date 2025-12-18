import { Link } from "react-router-dom";
export default function Header(){
    return(
        <div className="bg-slate-800 w-full h-[90px] flex  items-center justify-center relative">
           <img src="/66736.jpg" alt=""  className=" h-full rounded-full cursor-pointer absolute left-[10px]"/>
      <div className="h-full flex items-center w-[500px] justify-evenly ">

        <Link to="/" className="font-bold hover:border-b ">HOME</Link>
          <Link to="/products" className="font-bold hover:border-b ">PRODUCTS</Link>
           <Link to="/about us" className="font-bold hover:border-b ">ABOUT US</Link>
            <Link to="/ contact us" className="font-bold hover:border-b ">CONTACT US</Link>

      </div>
        

        </div>
    )
}