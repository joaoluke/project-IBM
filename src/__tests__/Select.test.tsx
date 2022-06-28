import { describe, expect, it } from 'vitest'

import { Select } from '../components'
import { render, screen, userEvent } from '../utils/test-utils'

describe('Render component', () => {
  it('Rendering select', () => {
    render(<Select />)

    const select = screen.getByTestId('select')

    expect(select).toBeInTheDocument()
  })

  it('Ensuring values ​​are being selected', () => {
    const { getByLabelText, getByText } = render(<Select />)

    userEvent.selectOptions(
      getByLabelText('Selecione a quantidade de livros para ser exibidos'),
      '10'
    )
    expect((getByText('10') as HTMLOptionElement).selected).toBeTruthy()
    expect((getByText('20') as HTMLOptionElement).selected).toBeFalsy()
    expect((getByText('30') as HTMLOptionElement).selected).toBeFalsy()
  })
})
