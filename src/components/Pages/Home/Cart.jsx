import { useEffect, useState } from 'react'
import { localCard } from '../../../utility/CardFunction'
import CardCard from '../../CardCard'
import axios from 'axios'

export default function Cart() {

  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)
  const [labelTotal, setLabelTotal] = useState(0)
  
  useEffect(
    () => {
      setCart(localCard())
      axios.post("http://localhost:5000/api/order/quote",
        {
          orderItems: localCard()
        }

      ).then(
        (res) => {
          setTotal(res.data.total)
          setLabelTotal(res.data.labelTotal)
        })
    }, []
  )

  function orderCheckOut() {
    const token = localStorage.getItem("token");

    if(token==null){
 return;
    }
     axios.post("http://localhost:5000/api/order",{
       orderItems:cart
     },{
      headers:{
        authorization: "Bearer "+token
      }
     }).then(
      (res)=>{
        console.log(res.data)
      }
     )
   }

  return (
    <div className="w-full h-full overflow-y-scroll flex flex-col items-center p-6 bg-gray-50">

      <table className='w-full max-w-6xl bg-white shadow-md rounded-xl overflow-hidden'>
        <thead className='bg-gray-800 text-white uppercase text-xs tracking-wider'>
          <tr>
            <th className='py-4 px-6 text-center'>image</th>
            <th className='py-4 px-6 text-center'>name</th>
            <th className='py-4 px-6 text-center'>id</th>
            <th className='py-4 px-6 text-center'>qty</th>
            <th className='py-4 px-6 text-center'>price</th>
            <th className='py-4 px-6 text-center'>total</th>
          </tr>
        </thead>

        <tbody className='text-gray-600 text-sm'>
          {
            cart.map(
              (item) => {
                return (
                  <CardCard key={item.productId} productId={item.productId} qty={item.qty} />
                )
              }
            )
          }
        </tbody>
      </table>

      {/* Summary Section */}
      <div className="w-full max-w-6xl flex flex-col items-end mt-10 space-y-3 px-4">
        <div className="w-72 border-b border-gray-200 pb-4">
          <div className="flex justify-between text-gray-500 mb-1">
            <span className="font-medium">Subtotal</span>
            <span>${labelTotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-red-500 text-sm">
            <span>Discount</span>
            <span>-${(labelTotal - total).toLocaleString()}</span>
          </div>
        </div>

        <div className="w-72 flex justify-between items-center py-2">
          <h1 className="text-xl font-bold text-gray-900">Grand Total</h1>
          <h1 className="text-2xl font-black text-indigo-600">${total.toLocaleString()}</h1>
        </div>

        <button onClick={orderCheckOut} className="mt-4 px-12 py-4 bg-black text-white font-bold rounded-[12px] hover:bg-gray-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 active:scale-95 uppercase tracking-widest text-xs shadow-lg border border-transparent flex items-center gap-3">
          Check Out
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </button>
      </div>
    </div>
  )
}