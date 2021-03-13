import { render, screen } from '@testing-library/react'

import Map from '.'

describe('<Map/>', () => {
  it('should render without any marker', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument()
    /*  screen.logTestingPlaygroundURL() */
  })

  it('should render with the market in correct place', () => {
    const place = {
      id: '1',
      name: 'Petrópolis',
      slug: 'petropolis',
      location: {
        latitude: 0,
        longitude: 0
      }
    }
    const placeTwo = {
      id: '2',
      name: 'São Paulo',
      slug: 'saopaulo',
      location: {
        latitude: 10,
        longitude: 30
      }
    }
    render(<Map places={[place, placeTwo]} />)

    expect(screen.getByTitle(/Petrópolis/i)).toBeInTheDocument()

    expect(screen.getByTitle(/São Paulo/i)).toBeInTheDocument()
  })
})
