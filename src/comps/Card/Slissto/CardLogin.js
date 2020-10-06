import React from 'react'

export default function CardLogin() {
  return(
    <div className='flex flex-col px-6 text-left'>
      <h1 className='text-3xl font-black italic'>{info.logo}</h1>
      <img className='my-8 max-w-md rounded-lg' src={cardImage} alt='ipad con café' />
      <section>
        <h2 className='text-lg font-bold'>{info.header}</h2>
        <p className='text-lg font-bold'>{info.subheader}</p>
      </section>
      <section className='my-2 text-gray-700'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin commodo metus in enim imperdiet, et lobortis libero tempor. Morbi nec sem ullamcorper, cursus magna id, facilisis urna. Sed convallis aliquam nisl, vel convallis leo tempor eget. Donec facilisis bibendum rutrum.</p>
        <p className='mt-2'>Sed convallis aliquam nisl, vel convallis leo tempor eget. Donec facilisis bibendum rutrum.</p>
      </section>
      <button className='max-w-md text-white bg-black px-4 py-3 rounded-full mt-4 transition duration-300 hover:bg-gray-800'>CONTINUAR</button>
    </div>
  )
}

const cardImage = 'https://images.unsplash.com/photo-1554415707-c1426270e0da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
const info = {
  logo: 'Slissto',
  header: '¡Bienvenido a Slissto!',
  subheader: 'Tu viaje como trabajador independiente comienza aquí.'
}