import { Link } from 'react-router-dom'
export default function NotFound() {
  return (
    <section style={{ padding:'40px 0' }}>
      <h2>Page not found</h2>
      <p style={{ opacity:.8 }}>The page you requested does not exist.</p>
      <Link to="/" className="btn">Go Home</Link>
    </section>
  )
}