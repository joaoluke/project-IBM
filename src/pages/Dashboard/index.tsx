import { useEffect, useState } from 'react'

import { Carousel, Card } from '../../components'
import { NOT_FOUND } from '../../config/Images'
import useDashboard from './useDashboard'

export const Dashboard = () => {
  const { getInformation, books, loading } = useDashboard()

  useEffect(() => {
    getInformation()
  }, [])

  console.log(books.map((i) => i.volumeInfo.authors))

  return (
    <div className='App'>
      <Carousel />
      <div className='m-3 flex flex-wrap justify-around'>
        {books.map((book: any) => {
          const { volumeInfo } = book
          return (
            <Card
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
