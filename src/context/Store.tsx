import React, { createContext, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { API } from '../services/connection'

type StoreType = {
  valueSearch: string
  books: any
  loading: boolean
}

type PropsStoreContext = {
  state: StoreType
  setState: React.Dispatch<React.SetStateAction<StoreType>>
  searchBook(event: any): any
}

const DEFAULT_VALUE = {
  state: {
    valueSearch: '',
    books: [],
    loading: false,
  },
  setState: () => {},
  searchBook: () => {},
}

const StoreContext = createContext<PropsStoreContext>(DEFAULT_VALUE)

const StoreContextProvider = ({ children }: any) => {
  const [state, setState] = useState(DEFAULT_VALUE.state)

  const navigate = useNavigate()

  const searchBook = () => async (event: any) => {
    event.preventDefault()
    console.log('searchBook')
    try {
      const { data } = await API.get(`volumes?q=${state.valueSearch}`)
      setState({ ...state, books: data })

      navigate('/search')
    } catch (error) {}
  }

  return (
    <StoreContext.Provider value={{ state, setState, searchBook }}>
      {children}
    </StoreContext.Provider>
  )
}

export const useStore = () => {
  return useContext(StoreContext)
}

export default StoreContextProvider
