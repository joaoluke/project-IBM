import { describe, expect, it } from 'vitest'

import { Carousel } from '../components'
import { render, screen } from '../utils/test-utils'

const customMatchers = {
  toBeValidAgeRange: function (srcPrevious: string, srcNext: string) {
    return srcPrevious === srcNext
  },
}

describe('Render component', () => {
  it('Rendering buttons', () => {
    render(<Carousel />)

    const buttonPrevious = screen.getByText('Anterior')
    const buttonNext = screen.getByText('Próximo')

    expect(buttonPrevious).toBeInTheDocument()
    expect(buttonNext).toBeInTheDocument()
  })
})
