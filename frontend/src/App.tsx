import { Routes, Route, Outlet } from 'react-router-dom'
import Navbar from './components/Navbar.tsx'
import Home from './pages/Home'
import Insights from './pages/Insights'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function Layout() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Outlet />
      </main>
    </>
  )
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* REAL HOMEPAGE */}
        <Route index element={<Home />} />
        <Route path="insights" element={<Insights />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}