import React from 'react'

function Header(props) {
  return (
    <header className="block row center">
      <div>
        <h1>Framework Fruit Store</h1>
      </div>
      <div>
        Cart{' '}
        {props.countCartItems ? (
          <button className="badge">{props.countCartItems}</button>
        ) : (
          ''
        )}
      </div>
    </header>
  )
}

export default Header
