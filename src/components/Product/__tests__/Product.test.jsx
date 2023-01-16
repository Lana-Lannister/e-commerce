import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import Product from '../Product'

describe('Product', () => {
  it('should render product details', () => {
    const product = {
      name: 'Test Product',
      price: 19.99,
      image: 'https://via.placeholder.com/150',
    }
    render(<Product product={product} />)
    expect(screen.getByAltText(product.name)).toBeVisible()
    expect(screen.getByText(product.name)).toBeVisible()
    expect(screen.getByText(`$${product.price}`)).toBeVisible()
  })

  it('should call onAdd function when button is clicked', () => {
    const product = {
      name: 'Test Product',
      price: 19.99,
      image: 'https://via.placeholder.com/150',
    }
    const onAdd = jest.fn()
    render(<Product product={product} onAdd={onAdd} />)
    fireEvent.click(screen.getByText('Add To Cart'))
    expect(onAdd).toHaveBeenCalledWith(product)
  })
})
