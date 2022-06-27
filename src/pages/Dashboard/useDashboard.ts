import axios from 'axios'

import { API } from '../../services/connection'

export default () => {
  const getInformation = async () => {
    try {
      const { data } = await API.get(
        'https://www.googleapis.com/books/v1/volumes?q=programacao&maxResults=20&startIndex=21'
      )
      console.log(data)
      // setData(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  return {
    getInformation,
  }
}
