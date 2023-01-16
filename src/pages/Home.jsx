import { useState } from 'react'

import Header from '../components/Header/Header'
import Main from '../components/Main/Main'
import ShoppingCart from '../components/ShoppingCart/ShoppingCart'

import data from '../data'

function Home() {
  const { products } = data
  const [cartItems, setCartItems] = useState([])

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id)
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x,
        ),
      )
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }])
    }
  }

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id)
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id))
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x,
        ),
      )
    }
  }

  return (
    <div className="App">
      <Header countCartItems={cartItems.length} testId="header"></Header>
      <div className="row">
        <Main products={products} onAdd={onAdd} testId="main"></Main>
        <ShoppingCart
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          testId="shopping-cart"
        ></ShoppingCart>
      </div>
    </div>
  )
}

export default Home
