import { Routes, Route, Outlet } from 'react-router-dom'
import Navbar from './components/Navbar.tsx'
import Home from './pages/Home.tsx'
import AboutUs from './pages/AboutUs.tsx'
import Contact from './pages/Contact.tsx'
import NotFound from './pages/NotFound.tsx'
import './App.css'
import Insights from './pages/Insights.tsx'

function Layout() {
  return (
    <>
      <Navbar />
      <main className="container" style={{ paddingTop: 80 }}>
        <Outlet />
      </main>
    </>
  )
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="Insights" element={<Insights />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}