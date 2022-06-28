import { useState } from 'react'

import { useStore } from '../../context/Store'
import { API } from '../../services/connection'

export default () => {
  const { toggleLoading } = useStore()

  const [books, setBooks] = useState<any>([])

  const getInformation = async () => {
    toggleLoading(true)
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
  }
}
