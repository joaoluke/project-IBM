import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'

import { PropsModalDetails } from '../../types'

export const ModalDetails = ({
  isOpen,
  details,
  handleClose,
}: PropsModalDetails) => {
  const { title, authors, image, description, pageCount, yearPublished } =
    details

  return (
    <Dialog
      open={isOpen}
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
        <Button onClick={handleClose}>Fechar</Button>
      </DialogActions>
    </Dialog>
  )
}
