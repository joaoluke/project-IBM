import { LOGO } from '../../config/Images'

export const Navbar = () => {
  return (
    <nav className='bg-gray-800'>
      <div className='max-w-7xl mx-auto p-4 md:py-0 lg:py-0 md:px-4 lg:px-8'>
        <div className='flex flex-col items-center justify-between h-40 md:flex-row md:h-20 lg:flex-row lg:h-20'>
          <div className='flex items-center'>
            <div className='flex-shrink-0'>
              <img className='h-24 w-30' src={LOGO} alt='Workflow' />
            </div>
            <div className='flex items-baseline space-x-4'>
              <a
                href='#'
                className='text-white px-3 py-2 rounded-md text-xl font-medium'
                aria-current='page'
              >
                BookBook
              </a>
            </div>
          </div>
          <form className='w-full md:w-6/12 lg:w-6/12'>
            <div className='relative'>
              <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                <svg
                  className='w-5 h-5 text-gray-500 dark:text-gray-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                  ></path>
                </svg>
              </div>
              <input
                type='search'
                id='default-search'
                className='block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Qual livro você quer ler hoje?'
                required
              />
              <button
                type='submit'
                className='text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              >
                Pesquisar
              </button>
            </div>
          </form>
        </div>
      </div>
    </nav>
  )
}