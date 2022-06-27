import { Card } from '../../components'
import { NOT_FOUND } from '../../config/Images'
import { useStore } from '../../context/Store'

export const Search = () => {
  const { state: stateGlobal } = useStore()

  console.log(stateGlobal.books)

  return (
    <div className='m-3 flex flex-wrap justify-around'>
      {stateGlobal.books.items.length &&
        stateGlobal.books.items.map((book: any) => {
          const { volumeInfo, id } = book
          return (
            <Card
              key={id}
              // openModal={openModal(book)}
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
  )
}
