import { Link } from "react-router-dom";

export default function ProductCard(props) {
  return (
    <Link
      to={`/productInfo/${props.product.productId}`}
      className="group hover:scale-105 transition-all duration-300"
    >
      <div className="
        w-[300px] h-[400px]
        bg-slate-200
        rounded-2xl
        shadow-lg
        hover:shadow-2xl
        flex flex-col
        overflow-hidden
        border border-slate-300 m-[30px]
      ">

        {/* Image */}
        <div className="relative overflow-hidden">
          <img
            src={props.product.image}
            alt=""
            className="w-full h-[180px] object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Discount Badge (optional visual) */}
          {props.product.lastPrice && (
            <span className="
              absolute top-3 left-3
              bg-red-600 text-white
              text-xs font-semibold
              px-2 py-1 rounded-full
              shadow-md
            ">
              SALE
            </span>
          )}
        </div>

        {/* Content */}
        <div className="
          flex flex-col gap-3
          p-4
          flex-grow
          bg-white
          m-3
          rounded-xl
          shadow-inner
        ">

          <h1 className="text-lg font-bold text-gray-800 line-clamp-1 tracking-wide">
            {props.product.productName}
          </h1>

          <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
            {props.product.description}
          </p>

          {/* Spacer */}
          <div className="flex-grow"></div>

          {/* Prices */}
          <div className="flex items-center gap-3">

            <p className="text-sm font-semibold text-gray-500 line-through">
              Rs. {props.product.price.toFixed(2)}
            </p>

            <p className="text-lg font-bold text-blue-600">
              Rs. {props.product.lastPrice.toFixed(2)}
            </p>

          </div>

        </div>
      </div>
    </Link>
  );
}
