import { PropsCard } from '../../types'

export const Card = ({ author, title, image, openModal }: PropsCard) => {
  return (
    <a
      onClick={openModal}
      href='#'
      className='w-3/5 flex flex-col items-center bg-white m-1 rounded-lg border shadow-md md:flex-row md:w-2/5 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'
    >
      <img
        className='object-cover h-40 rounded-t-lg md:h-52 md:w-32 md:rounded-none md:rounded-l-lg'
        src={image}
        alt=''
      />
      <div className='flex flex-col justify-between p-4 leading-normal'>
        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
          {title}
        </h5>
        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
          Autor: {author}
        </p>
      </div>
    </a>
  )
}
