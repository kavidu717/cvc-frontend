import { useEffect, useState } from 'react'
import { localCard } from '../../../utility/CardFunction'

export default function Cart() {

  const [cart, setCart]= useState([])
   useEffect(
    () => {
       setCart(localCard())
   }
)
    return (
        <div className="w-full h-full overflow-y-scroll flex flex-wrap justify-center">
      {
        cart.map(
            (item)=>{
                return(
                    <span>{item.productId} x {item.qty}</span>
                )
            }
        )

      }

        </div>
       
        )
}