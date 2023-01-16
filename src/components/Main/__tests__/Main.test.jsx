import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import Main from '../Main'

const onAdd = jest.fn()

const products = [
  { id: 1, name: 'Product 1' },
  { id: 2, name: 'Product 2' },
  { id: 3, name: 'Product 3' },
]

describe('Main', () => {
  it('Should render and filter products correctly', () => {
    render(<Main products={products} onAdd={onAdd} />)

    expect(screen.getByText('Products')).toBeVisible()
    expect(screen.getByText('Product 1')).toBeInTheDocument()

    const searchInput = screen.getByPlaceholderText('Search product')
    fireEvent.change(searchInput, { target: { value: '2' } })
    expect(screen.getByText('Product 2')).toBeVisible()
  })
})
