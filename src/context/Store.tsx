import {
  createContext,
  useState,
  useContext,
  ReactNode,
  ChangeEvent,
} from 'react'
import { useNavigate } from 'react-router-dom'

import { NOT_FOUND } from '../config/Images'
import { API } from '../services/connection'

interface IInformationModal {
  title: string
  authors: string[]
  image: string
  description: string
  pageCount: number
  yearPublished: string
  id: string
}
interface StoreContextData {
  valueSearch: string
  books: any
  loading: boolean
  pageSearch: number
  numberOfBooksInSearch: number
  totalNumberOfBooks: number
  page: number
  informationModal: IInformationModal
  openModalDetails: boolean
  openModal: (book: any) => void
  toggleModal: (value: boolean) => void
  handleInformationModal: (information: any) => void
  pagination: (event: ChangeEvent<unknown>, value: number) => void
  changeValueOfSearch: (event: HTMLInputElement) => void
  toggleLoading: (value: boolean) => void
  toggleNumberOfBooksInSearch: (target: HTMLSelectElement) => void
  searchBook: (startIndex: number, maxResults: number, page: number) => void
}

type PropsStoreProviders = {
  children: ReactNode
}

const informationInitial = {
  title: '',
  authors: [],
  image: '',
  description: '',
  pageCount: 0,
  yearPublished: '',
  id: '',
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

  const [openModalDetails, setOpenModalDetails] = useState(false)
  const [informationModal, setInformationModal] =
    useState<IInformationModal>(informationInitial)

  const navigate = useNavigate()

  const toggleModal = (value: boolean) => {
    setOpenModalDetails(value)
    if (!value) setInformationModal(informationInitial)
  }

  const openModal = (information: any) => {
    toggleModal(true)
    handleInformationModal(information)
  }

  const handleInformationModal = (information: any) => {
    const { volumeInfo } = information
    setInformationModal({
      title: volumeInfo.title,
      authors: volumeInfo.authors,
      image: volumeInfo.imageLinks
        ? volumeInfo.imageLinks.thumbnail
        : NOT_FOUND,
      description: volumeInfo.description,
      pageCount: volumeInfo.pageCount,
      yearPublished: volumeInfo.publishedDate ? volumeInfo.publishedDate : '',
      id: information.id,
    })
  }

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
    const startIndex =
      value * numberOfBooksInSearch - (numberOfBooksInSearch - 1)
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
    searchBook(startIndex, numberOfBooksInSearch, value)
    setPage(value)
    setPageSearch(startIndex)
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
        openModalDetails,
        informationModal,
        toggleModal,
        handleInformationModal,
        searchBook,
        toggleLoading,
        changeValueOfSearch,
        pagination,
        toggleNumberOfBooksInSearch,
        openModal,
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
