import React from 'react'
import jsPDF from 'jspdf'
import 'jspdf-autotable'

function ShoppingCart(props) {
  const { cartItems, onAdd, onRemove } = props
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0)
  const totalPrice = itemsPrice

  function handleCheckout() {
    const pdf = new jsPDF()

    const tableData = []
    cartItems.forEach((item) => {
      tableData.push([item.name, item.qty, `R$${item.price.toFixed(2)}`])
    })

    pdf.autoTable({
      head: [['Product', 'Quantity', 'Price']],
      body: tableData,
      startY: 20,
    })

    pdf.text(
      `Total Price: R$${totalPrice.toFixed(2)}`,
      10,
      pdf.autoTable.previous.finalY + 20,
    )

    pdf.save('framework-checkout.pdf')
  }

  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty} x R${item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>R${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button onClick={handleCheckout}>Checkout</button>
            </div>
          </>
        )}
      </div>
    </aside>
  )
}

export default ShoppingCart
