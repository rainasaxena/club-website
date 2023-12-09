import React from 'react'
import SwiperGallery from '../components/SwiperGallery'

const Gallery = () => {
  return (
    <div id="gallery-container" className="h-[100vh]">
        <h1 className='m-5 text-pink text-4xl font-semibold'>GALLERY</h1>
        <SwiperGallery/>
    </div>
  )
}

export default Gallery