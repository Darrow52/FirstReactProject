import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout.jsx'
import Home from './pages/Home/Home.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}
