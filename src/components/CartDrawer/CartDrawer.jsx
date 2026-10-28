import { useState } from 'react'
import Dialog from '../Dialog/Dialog.jsx'
import AddToCart from '../AddToCart/AddToCart.jsx'
import { useCart } from '../../context/cart-context.js'
import './CartDrawer.css'

export default function CartDrawer({ open, onClose }) {
  const { items, count, total, remove, clear } = useCart()
  const [ordered, setOrdered] = useState(false)

  const handleClose = () => {
    setOrdered(false)
    onClose()
  }

  // No backend yet: checking out just confirms and empties the cart
  const handleCheckout = () => {
    clear()
    setOrdered(true)
  }

  return (
    <Dialog open={open} onClose={handleClose} title={count ? `Your cart (${count})` : 'Your cart'} variant="drawer">
      {ordered && (
        <div className="cart__message">
          <p className="cart__message-title">Thank you! Your order is placed.</p>
          <p>It will be delivered in 10 minutes.</p>
          <button className="cart__button" type="button" onClick={handleClose}>
            Continue shopping
          </button>
        </div>
      )}

      {!ordered && items.length === 0 && (
        <div className="cart__message">
          <p className="cart__message-title">Your cart is empty</p>
          <p>Add products with the “ADD” button.</p>
          <button className="cart__button" type="button" onClick={handleClose}>
            Start shopping
          </button>
        </div>
      )}

      {!ordered && items.length > 0 && (
        <>
          <ul className="cart__list">
            {items.map(({ product, quantity }) => (
              <li key={product.id} className="cart-item">
                <img className="cart-item__image" src={product.image.src} alt="" />
                <div className="cart-item__info">
                  <p className="cart-item__name">{product.name}</p>
                  {product.weight && <p className="cart-item__weight">{product.weight}</p>}
                  <p className="cart-item__price">₹{product.price * quantity}</p>
                </div>
                <div className="cart-item__actions">
                  <AddToCart product={product} />
                  <button className="cart-item__remove" type="button" onClick={() => remove(product.id)}>
                    Remove<span className="visually-hidden"> {product.name}</span>
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="cart__summary">
            <p className="cart__total">
              <span>Total</span>
              <span>₹{total}</span>
            </p>
            <button className="cart__button" type="button" onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        </>
      )}
    </Dialog>
  )
}
