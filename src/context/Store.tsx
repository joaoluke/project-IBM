import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  ChangeEvent,
} from 'react'
import { useNavigate } from 'react-router-dom'

import { API } from '../services/connection'

interface StoreContextData {
  valueSearch: string
  books: any
  loading: boolean
  pageSearch: number
  numberOfBooksInSearch: number
  totalNumberOfBooks: number
  page: number
  pagination: (event: ChangeEvent<unknown>, value: number) => void
  changeValueOfSearch: (event: HTMLInputElement) => void
  toggleLoading: (value: boolean) => void
  toggleNumberOfBooksInSearch: (target: HTMLSelectElement) => void
  searchBook: (startIndex: number, maxResults: number, page: number) => void
}

type PropsStoreProviders = {
  children: ReactNode
}

const StoreContext = createContext({} as StoreContextData)

const StoreContextProvider = ({ children }: PropsStoreProviders) => {
  const [valueSearch, setValueSearch] = useState('')
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)
  const [pageSearch, setPageSearch] = useState(0)
  const [page, setPage] = useState(1)
  const [numberOfBooksInSearch, setNumberOfBooksInSearch] = useState(10)
  const [totalNumberOfBooks, setTotalNumberOfBooks] = useState(0)

  const navigate = useNavigate()

  const toggleNumberOfBooksInSearch = (target: HTMLSelectElement) => {
    const { value } = target
    searchBook(1, Number(value), 1)
  }

  const toggleLoading = (value: boolean) => {
    setLoading(value)
  }

  const changeValueOfSearch = (target: HTMLInputElement) => {
    const { value } = target
    setValueSearch(value)
  }

  const searchBook = async (
    startIndex: number,
    maxResults: number,
    page: number
  ) => {
    try {
      setLoading(true)
      const { data } = await API.get(
        `volumes?q=${valueSearch}&startIndex=${startIndex}&maxResults=${maxResults}`
      )
      setBooks(data)
      setPageSearch(0)
      setPage(page)
      setLoading(false)
      setNumberOfBooksInSearch(maxResults)
      setTotalNumberOfBooks(data.totalItems)

      navigate('/search')
    } catch (error) {
      setLoading(false)
    }
  }

  const pagination = (event: ChangeEvent<unknown>, value: number) => {
    console.log(value * numberOfBooksInSearch - (numberOfBooksInSearch - 1))
    const startIndex =
      value * numberOfBooksInSearch - (numberOfBooksInSearch - 1)
    searchBook(startIndex, numberOfBooksInSearch, value)
    setPage(value)
    setPageSearch(startIndex)

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <StoreContext.Provider
      value={{
        valueSearch,
        books,
        loading,
        pageSearch,
        numberOfBooksInSearch,
        totalNumberOfBooks,
        page,
        searchBook,
        toggleLoading,
        changeValueOfSearch,
        pagination,
        toggleNumberOfBooksInSearch,
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}

export const useStore = () => {
  return useContext(StoreContext)
}

export default StoreContextProvider
