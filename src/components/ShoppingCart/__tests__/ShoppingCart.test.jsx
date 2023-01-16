import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import ShoppingCart from '../ShoppingCart'

const onAdd = jest.fn()
const onRemove = jest.fn()

describe('ShoppingCart', () => {
  it('should render the cart items', () => {
    const cartItems = [
      { id: 1, name: 'Item 1', qty: 2, price: 10 },
      { id: 2, name: 'Item 2', qty: 3, price: 20 },
    ]
    const onAdd = jest.fn()
    const onRemove = jest.fn()
    render(
      <ShoppingCart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />,
    )

    expect(screen.getByText('Item 1')).toBeVisible()
    expect(screen.getByText('2 x R$10.00')).toBeVisible()
    expect(screen.getByText('Item 2')).toBeVisible()
    expect(screen.getByText('3 x R$20.00')).toBeVisible()
    expect(screen.getByText('R$80.00')).toBeVisible()
  })

  it('should call onAdd and onRemove when buttons are clicked', () => {
    const cartItems = [{ id: 1, name: 'Item 1', qty: 2, price: 10 }]
    render(
      <ShoppingCart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />,
    )

    fireEvent.click(screen.getByText('+'))
    expect(onAdd).toHaveBeenCalledWith({
      id: 1,
      name: 'Item 1',
      qty: 2,
      price: 10,
    })

    fireEvent.click(screen.getByText('-'))
    expect(onRemove).toHaveBeenCalledWith({
      id: 1,
      name: 'Item 1',
      qty: 2,
      price: 10,
    })
  })

  it('should render empty cart message when there are no items', () => {
    const cartItems = []

    render(
      <ShoppingCart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />,
    )

    expect(screen.getByText('Cart is empty')).toBeVisible()
  })
})
