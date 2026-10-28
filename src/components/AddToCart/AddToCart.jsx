import { useEffect, useRef } from 'react'
import { useCart } from '../../context/cart-context.js'
import './AddToCart.css'

export default function AddToCart({ product }) {
  const { getQuantity, add, decrement } = useCart()
  const quantity = getQuantity(product.id)
  const addRef = useRef(null)
  const plusRef = useRef(null)
  const focusAfterChange = useRef(false)

  useEffect(() => {
    if (!focusAfterChange.current) return
    focusAfterChange.current = false
    if (quantity === 0) addRef.current?.focus()
    else if (quantity === 1) plusRef.current?.focus()
  }, [quantity])

  const handleAdd = () => {
    focusAfterChange.current = true
    add(product.id)
  }

  const handleDecrement = () => {
    focusAfterChange.current = true
    decrement(product.id)
  }

  if (quantity === 0) {
    return (
      <button ref={addRef} className="add-to-cart" type="button" onClick={handleAdd} aria-label={`Add ${product.name} to cart`}>
        ADD
      </button>
    )
  }

  return (
    <div className="add-to-cart add-to-cart--active" role="group" aria-label={`${product.name} in cart`}>
      <button className="add-to-cart__step" type="button" onClick={handleDecrement} aria-label="Remove one">
        −
      </button>
      <span className="add-to-cart__count" aria-live="polite">
        {quantity}
      </span>
      <button ref={plusRef} className="add-to-cart__step" type="button" onClick={handleAdd} aria-label="Add one more">
        +
      </button>
    </div>
  )
}
