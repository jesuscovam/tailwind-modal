import React from 'react'

export default function CardSeller() {
  return(
    <div className='p-6 max-w-sm shadow-lg rounded-lg'>
      <h2 className='text-gray-700 font-bold mb-4'>Nombre de Vendedor</h2>
      <img className='rounded-lg' src={storeUrl} alt='store' />
      <div className='flex-row mt-5 text-gray-700'>
        <div className='py-4 px-2 rounded-lg flex justify-between transition duration-500 hover:bg-gray-300
        hover:text-blue-500'>
          <p>Ubicación: </p>
          <p>'...'</p>
        </div>
        <div className='py-4 px-2 rounded-lg flex justify-between transition duration-500 hover:bg-gray-300
        hover:text-blue-500'>
          <p >Número: </p>
          <p >'...'</p>
        </div>
        <div className='py-4 px-2 rounded-lg flex justify-between transition duration-500 hover:bg-gray-300
        hover:text-blue-500'>
          <p >Correo: </p>
          <p >'...'</p>
        </div>

      </div>
    </div>
  )
}

const storeUrl = 'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80'