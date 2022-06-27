import { useState } from 'react'

import { API } from '../../services/connection'

export default () => {
  const [books, setBooks] = useState<any>([])
  const [loading, setLoading] = useState(false)

  const getInformation = async () => {
    setLoading(true)
    try {
      const { data } = await API.get(
        'https://www.googleapis.com/books/v1/volumes?q=livro&maxResults=20&startIndex=21'
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
  }
}
