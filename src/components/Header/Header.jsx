import { useState } from 'react'
import { Link } from 'react-router-dom'
import SearchBox from '../SearchBox/SearchBox.jsx'
import CategoryNav from '../CategoryNav/CategoryNav.jsx'
import LoginDialog from '../LoginDialog/LoginDialog.jsx'
import CartDrawer from '../CartDrawer/CartDrawer.jsx'
import { useAuth } from '../../context/auth-context.js'
import { useCart } from '../../context/cart-context.js'
import logo from '../../assets/icons/logo.svg'
import locationIcon from '../../assets/icons/location.svg'
import truckIcon from '../../assets/icons/truck.svg'
import discountIcon from '../../assets/icons/discount.svg'
import userIcon from '../../assets/icons/user.svg'
import cartIcon from '../../assets/icons/cart.svg'
import './Header.css'

export default function Header() {
  const { user } = useAuth()
  const { count } = useCart()
  const [loginOpen, setLoginOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <header className="header">
      <div className="topbar">
        <div className="container topbar__inner">
          <p className="topbar__delivery">Delivery in 10 minutes</p>
          <ul className="topbar__links">
            <li>
              <a className="topbar__link" href="#">
                <span className="icon icon--18">
                  <img src={locationIcon} alt="" />
                </span>
                <span>
                  Deliver to <b className="topbar__accent">411017</b>
                </span>
              </a>
            </li>
            <li>
              <a className="topbar__link" href="#">
                <span className="icon icon--18">
                  <img src={truckIcon} alt="" />
                </span>
                Track your order
              </a>
            </li>
            <li>
              <a className="topbar__link" href="#">
                <span className="icon icon--18">
                  <img src={discountIcon} alt="" />
                </span>
                All Offers
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mainbar">
        <div className="container mainbar__inner">
          <Link className="mainbar__logo" to="/" aria-label="Freshcart — home">
            <img src={logo} alt="" />
          </Link>

          <SearchBox />

          <div className="user-actions">
            <button
              className="user-actions__item"
              type="button"
              onClick={() => setLoginOpen(true)}
              aria-label={user ? `My account (${user.name})` : 'Login'}
            >
              <span className="icon icon--24">
                <img src={userIcon} alt="" />
              </span>
              <span className="user-actions__label">{user ? user.name : 'Login'}</span>
            </button>
            <button
              className="user-actions__item"
              type="button"
              onClick={() => setCartOpen(true)}
              aria-label={count ? `Cart, ${count} items` : 'Cart'}
            >
              <span className="icon icon--24 user-actions__cart">
                <img src={cartIcon} alt="" />
                {count > 0 && <span className="user-actions__badge">{count}</span>}
              </span>
              <span className="user-actions__label">Cart</span>
            </button>
          </div>
        </div>
      </div>

      <CategoryNav />

      <LoginDialog open={loginOpen} onClose={() => setLoginOpen(false)} />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </header>
  )
}
