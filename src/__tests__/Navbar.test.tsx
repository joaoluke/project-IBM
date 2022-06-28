import { BrowserRouter as Router } from 'react-router-dom'
import { describe, expect, it } from 'vitest'

import { Navbar } from '../components'
import { render, screen, userEvent, fireEvent } from '../utils/test-utils'

describe('Render component', () => {
  it('Rendering input by placeholder', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    )

    const input = screen.getByPlaceholderText('Qual livro você quer ler hoje?')

    expect(input).toBeInTheDocument()
  })

  it('Add a book search', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    )

    const input = screen.getByPlaceholderText('Qual livro você quer ler hoje?')

    const button = screen.getByRole('button')

    fireEvent.change(input, { target: { value: 'typescript' } })
    userEvent.click(button)

    expect(input).toHaveValue('typescript')
  })
})
