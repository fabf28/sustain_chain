import { Link } from 'react-router-dom'
export default function NotFound() {
  return (
    <section>
      <h2>Page not found</h2>
      <p className="muted">The page you requested does not exist.</p>
      <Link to="/" className="btn">Go Home</Link>
    </section>
  )
}