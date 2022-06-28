import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { Card, Select, Pagination, ModalDetails } from '../../components'
import { NOT_FOUND } from '../../config/Images'
import { useStore } from '../../context/Store'

export const Search = () => {
  const { books, openModal, openModalDetails } = useStore()
  const navigate = useNavigate()

  useEffect(() => {
    if (!books.items) return navigate('/')
  }, [])

  return (
    <div>
      <div className='flex flex-col items-center p-1'>
        <Select />
      </div>
      {openModalDetails && <ModalDetails />}
      <div className='m-3 flex flex-wrap justify-around'>
        {books.items &&
          books.items.map((book: any) => {
            const { volumeInfo, id } = book
            return (
              <Card
                key={id}
                openModal={() => openModal(book)}
                title={volumeInfo.title}
                author={volumeInfo.authors ? volumeInfo.authors : ''}
                image={
                  volumeInfo.imageLinks
                    ? volumeInfo.imageLinks.thumbnail
                    : NOT_FOUND
                }
              />
            )
          })}
      </div>
      <div className='m-3 flex flex-row-reverse'>
        <Pagination />
      </div>
    </div>
  )
}
