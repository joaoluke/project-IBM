import { PropsCard } from '../../types'

export const Card = ({ author, title, image }: PropsCard) => {
  return (
    <div className='max-w-xs rounded overflow-hidden shadow-lg'>
      <img
        className='w-full'
        src='https://v1.tailwindcss.com/img/card-top.jpg'
        alt='Sunset in the mountains'
      />
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>The Coldest Sunset</div>
        <p className='text-gray-700 text-base'>Autor: Charles Spurgeon</p>
      </div>
    </div>
  )
}
