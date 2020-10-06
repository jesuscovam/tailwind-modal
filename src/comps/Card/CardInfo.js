import React from 'react'
import { HiOutlineShoppingCart } from 'react-icons/hi'

export default function CardInfo({price='$Precio', title='Nombre'}) {
  return(
    <div className='shadow-lg p-6 rounded-lg text-left max-w-sm'>
      <div className='flex justify-between items-center'>
        <h2 className='text-lg font-bold'>{price}</h2>
        <div className=''>
          <HiOutlineShoppingCart className='text-xl transition duration-500 cursor-pointer ease-in-out transform hover:-translate-y-1' />
        </div>
      </div>
      <p className='text-gray-500 divide-y divide-gray-500 mb-5'>{title}</p>
      
      <button className='bg-green-500 text-green-100 py-4 my-3 px-10 rounded-lg w-full font-black
      transition duration-500 ease-in-out  hover:bg-green-400'>COMPRAR</button>

    </div>
  )
}