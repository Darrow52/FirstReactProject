// localStorage can be unavailable (private mode, blocked site data), so every access is guarded.
export const readStorage = (key, fallback) => {
  try {
    const value = localStorage.getItem(key)
    return value === null ? fallback : JSON.parse(value)
  } catch {
    return fallback
  }
}

export const writeStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
    // Not critical: the state just won't survive a reload
  }
}
