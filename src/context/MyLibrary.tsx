import { createContext, useState, useContext, ReactNode } from 'react'

interface MyLibraryContextData {
  books: any
  bookAdded: boolean
  setBookInLibrary: (id: string, book: any) => void
  getBookInLibrary: (id: string) => void
  getAllBooksInLibrary: () => void
}

type PropsMyLibraryProviders = {
  children: ReactNode
}

const MyLibraryContext = createContext({} as MyLibraryContextData)

const MyLibraryContextProvider = ({ children }: PropsMyLibraryProviders) => {
  const [books, setBooks] = useState([])
  const [bookAdded, setBookAdded] = useState(false)

  const setBookInLibrary = (id: string, book: any) => {
    localStorage.setItem(id, JSON.stringify(book))
    setBookAdded(true)
  }

  const getBookInLibrary = (id: string) => {
    const keys = Object.keys(localStorage)
    keys.includes(id) ? setBookAdded(true) : setBookAdded(false)
  }

  const getAllBooksInLibrary = () => {
    const keys = Object.keys(localStorage)
    let booksStorage = []
    let index = keys.length
    while (index--) {
      booksStorage.push(JSON.parse(localStorage.getItem(keys[index])))
    }
    setBooks(booksStorage)
  }

  return (
    <MyLibraryContext.Provider
      value={{
        books,
        bookAdded,
        setBookInLibrary,
        getAllBooksInLibrary,
        getBookInLibrary,
      }}
    >
      {children}
    </MyLibraryContext.Provider>
  )
}

export const useMyLibrary = () => {
  return useContext(MyLibraryContext)
}

export default MyLibraryContextProvider
