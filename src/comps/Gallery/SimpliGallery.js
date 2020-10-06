import React, { useState } from 'react'

export default function SimpliGallery() {
  const images = [laptopUrl, coffeeUrl, airpodsUrl]
  const [backgroung, setBG] = useState({ backgroundImage: `url(${images[0]})`, backgroundSize: '100% 100%'}) 

  const handleImageChange = (image) =>
     setBG({ backgroundImage: `url(${image})`, transition: '0.5s ease-in-out', backgroundSize: '100% 100%'})
  return(
    <div 
      className='max-w-sm shadow-xl rounded-lg transition duration-500 pt-5 pb-32'
      style={backgroung}>
      {images.map(image => (
        <RoundImage 
          setImage={() => handleImageChange(image)}
          key={image} 
          image={image} />
      ))}
    </div>
  )
}

const RoundImage = ({image, setImage}) => (
  <img 
    onClick={setImage}
    className='rounded-full h-10 w-10 m-4 shadow-md cursor-pointer opacity-50 transition duration-500 hover:opacity-100'
    src={image} 
    alt='gallery option button' />
)

const laptopUrl = 'https://images.unsplash.com/photo-1548611635-b6e7827d7d4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
const coffeeUrl = 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
const airpodsUrl ='https://images.unsplash.com/photo-1587523459887-e669248cf666?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80'