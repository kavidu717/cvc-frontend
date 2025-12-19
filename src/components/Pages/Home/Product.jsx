import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ProductCard from "../../ProductCard";

export default function Product() {

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState("loading");

  useEffect(() => {
    if (loading === "loading") {
      axios
        .get("http://localhost:5000/api/product")
        .then((res) => {
          setProduct(res.data);
          setLoading("loaded");
        })
        .catch(() => {
          toast.error("something went wrong");
        });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-300 p-6">

      {/* Product Grid */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-6
          gap-6
          place-items-center
        "
      >
        {product.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>

    </div>
  );
}
