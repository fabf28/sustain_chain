import { Link } from 'react-router-dom'

export default function Home() {
  
  return (
    <section style={{ padding: '40px 0 80px' }}>
      <h1>Optimize Your Supply Chain</h1>
      <p style={{ maxWidth: '65ch', opacity: .85, margin: '12px auto 0', lineHeight: 1.6 }}>
        Supply chains run our lives. From every product on the shelf, to the food we eat, the car we drive, the bus we take.
        Optimizing those systems with sustainability and efficient practices in mind ensures a future on this earth.
      </p>
      <div style={{ marginTop: 24 }}>
        <Link to="/insights" className="btn">View Insights</Link>
      </div>
    </section>
  )
}