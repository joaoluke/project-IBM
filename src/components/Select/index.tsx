import { useStore } from '../../context/Store'

export const Select = () => {
  const { toggleNumberOfBooksInSearch } = useStore()

  return (
    <>
      <label
        htmlFor='select'
        className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'
      >
        Selecione a quantidade de livros para ser exibidos
      </label>
      <select
        data-testid='select'
        id='select'
        onChange={(event) => toggleNumberOfBooksInSearch(event.target)}
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-9/12 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
      >
        <option data-testid='select-option' value={10}>
          10
        </option>
        <option data-testid='select-option' value={20}>
          20
        </option>
        <option data-testid='select-option' value={30}>
          30
        </option>
      </select>
    </>
  )
}
