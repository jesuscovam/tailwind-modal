import React, { useState } from 'react'

export default function LoginModal() {
  const [openModal, setOpenModal] = useState(false)

  const toggleModal = () => setOpenModal(val => !val)
  
  return(
    <div className='p-10 max-w-sm'>
      <button onClick={toggleModal} className='rounded-lg w-full px-5 py-2 bg-green-500 text-green-100 font-bold'>ABRIR</button>
      {openModal && <div className='fixed pin z-50 overflow-auto flex bg-gray-100'>
        <div className='relative p-8 bg-white w-full max-w-md m-auto flex-col flex'>
        <span class="absolute pin-t pin-b pin-r p-4" onClick={toggleModal}>
            <svg class="h-12 w-12 fill-current text-grey hover:text-grey-darkest" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
        </span>
          <h1 className='font-bold'>Intro</h1>
        </div>

      </div>}
    </div>
  )
}