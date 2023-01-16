import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from '../Header'

describe('Header', () => {
  it('Should render correctly', () => {
    render(<Header countCartItems={0} />)
    expect(screen.getByText('Framework Fruit Store')).toBeInTheDocument()
  })

  it('Should not render cart count when countCartItems is 0', () => {
    render(<Header countCartItems={0} />)
    expect(screen.queryByText('1')).not.toBeInTheDocument()
  })
})
