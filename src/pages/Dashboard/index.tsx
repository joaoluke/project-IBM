import { useEffect } from 'react'

import { Carousel, Card, ModalDetails } from '../../components'
import { NOT_FOUND } from '../../config/Images'
import { useStore } from '../../context/Store'
import useDashboard from './useDashboard'

export const Dashboard = () => {
  const { getInformation, books } = useDashboard()
  const { openModal } = useStore()

  useEffect(() => {
    getInformation()
  }, [])

  return (
    <div className='App'>
      <ModalDetails />
      <Carousel />
      <div className='m-3 flex flex-wrap justify-around'>
        {books.map((book: any) => {
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
    </div>
  )
}
