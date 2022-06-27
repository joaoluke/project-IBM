interface Details {
  title: string
  authors: string[]
  image: string
  description: string
  pageCount: number
  yearPublished: string
}

export interface PropsModalDetails {
  isOpen: boolean
  details: Details
  handleClose(): void
}
