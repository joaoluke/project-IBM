import { useState } from 'react'

import { NOT_FOUND } from '../../config/Images'
import { useStore } from '../../context/Store'
import { API } from '../../services/connection'

interface IInformationModal {
  title: string
  authors: string[]
  image: string
  description: string
  pageCount: number
  yearPublished: string
}

export default () => {
  const { toggleLoading } = useStore()

  const [books, setBooks] = useState<any>([])

  const [openModalDetails, setOpenModalDetails] = useState(false)
  const [informationModal, setInformationModal] = useState<IInformationModal>({
    title: '',
    authors: [],
    image: '',
    description: '',
    pageCount: 0,
    yearPublished: '',
  })

  const toggleModal = (value: boolean) => {
    setOpenModalDetails(value)
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
    })
  }

  const getInformation = async () => {
    toggleLoading(false)
    try {
      const { data } = await API.get(
        'volumes?q=livro&maxResults=20&startIndex=21'
      )
      setBooks(data.items)
    } catch (error) {
      console.log(error)
    } finally {
      toggleLoading(false)
    }
  }

  return {
    getInformation,
    books,
    toggleModal,
    openModalDetails,
    handleInformationModal,
    informationModal,
  }
}
