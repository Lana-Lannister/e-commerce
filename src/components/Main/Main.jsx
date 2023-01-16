import React, { useState } from 'react'

import Product from '../Product/Product'

function Main(props) {
  const [query, setQuery] = useState('')
  const { products, onAdd } = props

  return (
    <main className="block col-2">
      <div>
        <input
          placeholder="Search product"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <h2>Products</h2>
      <div className="row">
        {products
          .filter((product) => product.name.toLocaleLowerCase().includes(query))
          .map((product) => (
            <Product key={product.id} product={product} onAdd={onAdd}></Product>
          ))}
      </div>
    </main>
  )
}

export default Main
