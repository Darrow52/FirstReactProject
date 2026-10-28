import { useEffect, useMemo, useState } from 'react'
import { AuthContext } from './auth-context.js'
import { readStorage, writeStorage } from '../utils/storage.js'

const STORAGE_KEY = 'freshcart-user'

// Front-end only: there is no backend yet, so "login" just remembers the email
export default function AuthProvider({ children }) {
  const [user, setUser] = useState(() => readStorage(STORAGE_KEY, null))

  useEffect(() => {
    writeStorage(STORAGE_KEY, user)
  }, [user])

  const value = useMemo(
    () => ({
      user,
      login: (email) => setUser({ email, name: email.split('@')[0] }),
      logout: () => setUser(null),
    }),
    [user],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
