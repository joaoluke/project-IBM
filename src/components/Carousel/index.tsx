import { useState } from 'react'

const bestSellers = [
  'https://mdbcdn.b-cdn.net/img/new/slides/041.webp',
  'https://mdbcdn.b-cdn.net/img/new/slides/042.webp',
  'https://mdbcdn.b-cdn.net/img/new/slides/043.webp',
]

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleOnNextClick = () => {
    if (currentIndex === 2) return setCurrentIndex(0)
    setCurrentIndex(currentIndex + 1)
  }

  const handleOnPrevClick = () => {
    if (!currentIndex) return setCurrentIndex(2)
    setCurrentIndex(currentIndex - 1)
  }

  return (
    <div className='m-3  select-none relative'>
      <div className='aspect-w-16 aspect-h-9' />
      <img
        className='rounded-2xl duration-700 ease-in-out'
        src={bestSellers[currentIndex]}
        alt=''
      />

      <div className='absolute w-full top-1/2 transform -translate-y-1/2 p-2 flex justify-between items-center'>
        <button
          className='bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition'
          onClick={handleOnPrevClick}
        >
          Anterior
        </button>
        <button
          className='bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition'
          onClick={handleOnNextClick}
        >
          Próximo
        </button>
      </div>
    </div>
  )
}
