import { useEffect } from 'react'

import { Carousel, Card, Loading, ModalDetails } from '../../components'
import { NOT_FOUND } from '../../config/Images'
import useDashboard from './useDashboard'

export const Dashboard = () => {
  const {
    getInformation,
    books,
    loading,
    toggleModal,
    openModalDetails,
    handleInformationModal,
    informationModal,
  } = useDashboard()

  useEffect(() => {
    getInformation()
  }, [])

  const openModal = (information: any) => () => {
    toggleModal(true)
    handleInformationModal(information)
  }

  return (
    <div className='App'>
      <ModalDetails
        isOpen={openModalDetails}
        details={informationModal}
        handleClose={() => toggleModal(false)}
      />
      <Loading isLoading={loading} />
      <Carousel />
      <div className='m-3 flex flex-wrap justify-around'>
        {books.map((book: any) => {
          const { volumeInfo, id } = book
          return (
            <Card
              key={id}
              openModal={openModal(book)}
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
