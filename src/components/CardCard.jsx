import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { deleteItem } from '../utility/CardFunction'

export default function CardCard(props) {
  const productId = props.productId
  const qty = props.qty

  const [product, setProduct] = useState(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (!loaded) {
      axios.get(import.meta.env.VITE_BACKEND_URL + "/api/product/" + productId)
        .then((response) => {
          if (response.data != null) {
            setProduct(response.data)
            setLoaded(true)
          } else {
            deleteItem(productId)
          }
        })
        .catch((err) => {
          console.error(err);
        })
    }
  }, [])

  return (
    <tr className="group border-b border-gray-800 hover:bg-gray-500 transition-all duration-300">
      {/* Image Cell with zoom effect on hover */}
      <td className='py-5 px-4'>
        <div className="flex justify-center">
          <div className="relative overflow-hidden rounded-xl bg-gray-100 ring-1 ring-gray-200">
            <img 
              src={product?.image[0]} 
              alt={product?.productName} 
              className='w-20 h-20 object-cover transform group-hover:scale-110 transition-transform duration-500' 
            />
          </div>
        </div>
      </td>

      {/* Product Name & Brand badge */}
      <td className='text-center py-5 px-4'>
        <div className="flex flex-col items-center">
          <span className="font-semibold text-gray-900 text-base mb-1">
            {product?.productName || "Fetching product..."}
          </span>
          {loaded && (
            <span className="text-[10px] uppercase tracking-widest bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-bold">
              Verified Item
            </span>
          )}
        </div>
      </td>

      {/* Product ID with Badge style */}
      <td className='text-center py-5 px-4'>
        <span className='inline-block font-mono text-[11px] text-gray-400 bg-gray-50 border border-gray-200 px-2 py-1 rounded'>
          {productId}
        </span>
      </td>

      {/* Quantity with highlight */}
      <td className='text-center py-5 px-4'>
        <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white border border-gray-200 shadow-sm text-gray-700 font-bold">
          {qty}
        </div>
      </td>

      {/* Unit Price */}
      <td className='text-center py-5 px-4'>
        <span className="text-gray-500 font-medium italic text-sm">
          {product ? `$${product.lastPrice.toLocaleString()}` : "—"}
        </span>
      </td>

      {/* Subtotal with bright accent */}
      <td className='text-center py-5 px-4'>
        <span className='text-lg font-black text-indigo-600 drop-shadow-sm'>
          {product ? `$${(product.lastPrice * qty).toLocaleString()}` : "—"}
        </span>
      </td>
    </tr>
  )
}