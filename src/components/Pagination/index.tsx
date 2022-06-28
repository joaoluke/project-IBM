import { Pagination as PaginationMUI } from '@mui/material/'

import { useStore } from '../../context/Store'

export const Pagination = () => {
  const { page, numberOfBooksInSearch, totalNumberOfBooks, pagination } =
    useStore()

  console.log(totalNumberOfBooks, numberOfBooksInSearch)

  return (
    <PaginationMUI
      count={Math.ceil(totalNumberOfBooks / numberOfBooksInSearch)}
      page={page}
      onChange={pagination}
      variant='outlined'
      color='primary'
    />
  )
}
