import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-black  w-full h-[90px] flex items-center justify-center sticky top-0 z-50">

      <img
        src="/66736.jpg"
        alt=""
        className="h-full rounded-full cursor-pointer absolute left-[10px]"
      />

      <div className="h-full flex items-center w-[500px] justify-evenly text-white">
        <Link to="/" className="font-bold hover:border-b hover:text-blue-400">
          HOME
        </Link>
        <Link to="/product" className="font-bold hover:border-b hover:text-blue-400">
          PRODUCTS
        </Link>
        <Link to="/about us" className="font-bold hover:border-b hover:text-blue-400">
          ABOUT US
        </Link>
        <Link to="/contact us" className="font-bold hover:border-b hover:text-blue-400">
          CONTACT US
        </Link>
      </div>

    </div>
  );
}
