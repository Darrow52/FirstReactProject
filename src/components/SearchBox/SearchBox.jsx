import { useCallback, useMemo, useRef, useState } from 'react'
import AddToCart from '../AddToCart/AddToCart.jsx'
import useDismiss from '../../hooks/useDismiss.js'
import { allProducts } from '../../data/products.js'
import searchIcon from '../../assets/icons/search.svg'
import './SearchBox.css'

const MAX_RESULTS = 6

export default function SearchBox() {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  const term = query.trim().toLowerCase()
  const results = useMemo(
    () =>
      term
        ? allProducts
            .filter((product) => `${product.name} ${product.weight ?? ''}`.toLowerCase().includes(term))
            .slice(0, MAX_RESULTS)
        : [],
    [term],
  )

  const close = useCallback(() => setOpen(false), [])
  const showResults = open && term !== ''
  useDismiss(ref, showResults, close)

  return (
    <div className="search" ref={ref}>
      <form className="search__form" role="search" onSubmit={(event) => event.preventDefault()}>
        <span className="icon icon--18">
          <img src={searchIcon} alt="" />
        </span>
        <label className="visually-hidden" htmlFor="site-search">
          Search
        </label>
        <input
          className="search__input"
          id="site-search"
          type="search"
          placeholder="Search essentials, groceries and more..."
          autoComplete="off"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value)
            setOpen(true)
          }}
          onFocus={() => setOpen(true)}
          aria-expanded={showResults}
          aria-controls="search-results"
        />
      </form>

      {showResults && (
        <div className="search__results" id="search-results">
          {results.length === 0 ? (
            <p className="search__empty">Nothing found for “{query.trim()}”</p>
          ) : (
            <ul>
              {results.map((product) => (
                <li key={product.id} className="search-result">
                  <img className="search-result__image" src={product.image.src} alt="" />
                  <div className="search-result__info">
                    <p className="search-result__name">{product.name}</p>
                    <p className="search-result__meta">
                      {product.weight && `${product.weight} · `}₹{product.price}
                    </p>
                  </div>
                  <AddToCart product={product} />
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  )
}
