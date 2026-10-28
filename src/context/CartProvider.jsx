import { useEffect, useMemo, useReducer } from 'react'
import { CartContext } from './cart-context.js'
import { getProductById } from '../data/products.js'
import { readStorage, writeStorage } from '../utils/storage.js'

const STORAGE_KEY = 'freshcart-cart'

const withoutItem = (state, id) => {
  const next = { ...state }
  delete next[id]
  return next
}

function cartReducer(state, action) {
  const quantity = state[action.id] ?? 0

  switch (action.type) {
    case 'add':
      return { ...state, [action.id]: quantity + 1 }
    case 'decrement': {
      if (quantity <= 1) return withoutItem(state, action.id)
      return { ...state, [action.id]: quantity - 1 }
    }
    case 'remove':
      return withoutItem(state, action.id)
    case 'clear':
      return {}
    default:
      return state
  }
}

const loadCart = () => {
  const saved = readStorage(STORAGE_KEY, {})
  return Object.fromEntries(Object.entries(saved).filter(([id, quantity]) => getProductById(id) && quantity > 0))
}

export default function CartProvider({ children }) {
  const [quantities, dispatch] = useReducer(cartReducer, undefined, loadCart)

  useEffect(() => {
    writeStorage(STORAGE_KEY, quantities)
  }, [quantities])

  const value = useMemo(() => {
    const items = Object.entries(quantities).map(([id, quantity]) => ({ product: getProductById(id), quantity }))

    return {
      items,
      count: items.reduce((sum, item) => sum + item.quantity, 0),
      total: items.reduce((sum, item) => sum + item.quantity * item.product.price, 0),
      getQuantity: (id) => quantities[id] ?? 0,
      add: (id) => dispatch({ type: 'add', id }),
      decrement: (id) => dispatch({ type: 'decrement', id }),
      remove: (id) => dispatch({ type: 'remove', id }),
      clear: () => dispatch({ type: 'clear' }),
    }
  }, [quantities])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
