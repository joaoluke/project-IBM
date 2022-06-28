import { useEffect } from 'react'

import { Card } from '../../components'
import { NOT_FOUND } from '../../config/Images'
import { useMyLibrary } from '../../context/MyLibrary'
import { useStore } from '../../context/Store'

export const MyLibrary = () => {
  const { openModal } = useStore()
  const { getAllBooksInLibrary, books } = useMyLibrary()

  useEffect(() => {
    getAllBooksInLibrary()
  }, [])

  console.log(books)

  return (
    <div className='m-3 flex flex-wrap justify-around'>
      {books.length ? (
        books.map((book: any) => {
          return (
            <Card
              key={book.id}
              openModal={() => openModal(book)}
              title={book.title}
              author={book.authors ? book.authors : ''}
              image={book.imageLinks ? book.imageLinks.thumbnail : NOT_FOUND}
            />
          )
        })
      ) : (
        <div className='m-40'>
          <p>Sua lista de favoritos está vazia!</p>
        </div>
      )}
    </div>
  )
}
