import { useState } from 'react'

import { NOT_FOUND } from '../../config/Images'
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
  const [books, setBooks] = useState<any>([])
  const [loading, setLoading] = useState(false)

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
    setLoading(true)
    try {
      const { data } = await API.get(
        'volumes?q=livro&maxResults=20&startIndex=21'
      )
      setBooks(data.items)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return {
    getInformation,
    books,
    loading,
    toggleModal,
    openModalDetails,
    handleInformationModal,
    informationModal,
  }
}
