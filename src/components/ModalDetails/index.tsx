import { useEffect } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import DeleteIcon from '@mui/icons-material/Delete'
import AddIcon from '@mui/icons-material/Add'

import { useStore } from '../../context/Store'
import { useMyLibrary } from '../../context/MyLibrary'

export const ModalDetails = ({}) => {
  const { toggleModal, informationModal } = useStore()
  const { setBookInLibrary, getBookInLibrary, bookAdded } = useMyLibrary()
  const { title, authors, image, description, pageCount, yearPublished, id } =
    informationModal

  useEffect(() => {
    getBookInLibrary(id)
  }, [])

  const handleClose = () => {
    toggleModal(false)
  }

  return (
    <Dialog
      open={true}
      onClose={handleClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title'>{title}</DialogTitle>
      <DialogContent>
        <div className='bg-gray-800 flex justify-center rounded-sm'>
          <img src={image} className='h-72' />
        </div>
        <div className='p-6 space-y-6'>
          <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
            {description}
          </p>
        </div>
        <div className='p-6 space-y-6'>
          <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
            {authors.length > 1
              ? `Autores: ${authors.map((author) => ` ${author}`)}`
              : `Autor: ${authors[0]}`}
          </p>
          {pageCount && (
            <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
              Paginas: {pageCount}
            </p>
          )}
          {yearPublished && (
            <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
              Ano de publicação: {yearPublished.slice(0, 4)}
            </p>
          )}
        </div>
      </DialogContent>
      <DialogActions>
        {bookAdded ? (
          <Button variant='outlined' startIcon={<DeleteIcon />}>
            Remover
          </Button>
        ) : (
          <Button
            variant='contained'
            onClick={() => setBookInLibrary(id, informationModal)}
            endIcon={<AddIcon />}
          >
            Adicionar
          </Button>
        )}
        <Button onClick={handleClose}>Fechar</Button>
      </DialogActions>
    </Dialog>
  )
}
