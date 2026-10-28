import { useState } from 'react'
import Dialog from '../Dialog/Dialog.jsx'
import { useAuth } from '../../context/auth-context.js'
import './LoginDialog.css'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 6

const validate = ({ email, password }) => {
  const errors = {}
  if (!EMAIL_PATTERN.test(email.trim())) errors.email = 'Enter a valid email'
  if (password.length < MIN_PASSWORD_LENGTH) errors.password = `At least ${MIN_PASSWORD_LENGTH} characters`
  return errors
}

export default function LoginDialog({ open, onClose }) {
  const { user, login, logout } = useAuth()
  const [values, setValues] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})

  const handleClose = () => {
    setValues({ email: '', password: '' })
    setErrors({})
    onClose()
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: undefined }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return
    login(values.email.trim())
    handleClose()
  }

  const handleLogout = () => {
    logout()
    handleClose()
  }

  if (user) {
    return (
      <Dialog open={open} onClose={handleClose} title="My account">
        <div className="login">
          <p className="login__text">
            You are logged in as <b>{user.email}</b>
          </p>
          <button className="login__submit" type="button" onClick={handleLogout}>
            Log out
          </button>
        </div>
      </Dialog>
    )
  }

  return (
    <Dialog open={open} onClose={handleClose} title="Login">
      <form className="login" onSubmit={handleSubmit} noValidate>
        <p className="login__text">Log in to save your cart and track orders.</p>

        <label className="login__field">
          <span className="login__label">Email</span>
          <input
            className="login__input"
            type="email"
            name="email"
            autoComplete="email"
            value={values.email}
            onChange={handleChange}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'login-email-error' : undefined}
          />
          {errors.email && (
            <span className="login__error" id="login-email-error">
              {errors.email}
            </span>
          )}
        </label>

        <label className="login__field">
          <span className="login__label">Password</span>
          <input
            className="login__input"
            type="password"
            name="password"
            autoComplete="current-password"
            value={values.password}
            onChange={handleChange}
            aria-invalid={Boolean(errors.password)}
            aria-describedby={errors.password ? 'login-password-error' : undefined}
          />
          {errors.password && (
            <span className="login__error" id="login-password-error">
              {errors.password}
            </span>
          )}
        </label>

        <button className="login__submit" type="submit">
          Log in
        </button>
      </form>
    </Dialog>
  )
}
