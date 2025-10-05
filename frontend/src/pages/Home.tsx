import { Link } from 'react-router-dom'
 // optional; or keep styles in App.css

export default function Home() {
  return (
    <div className="bg">
      <h1>Optimize Your Supply Chain</h1>
      <p className="homePagePara">
        Supply chains run our lives. From every product on the shelf, to the food we eat, the car we drive, the bus we take. 
        Optimizing those systems with sustainability and efficient practices in mind ensures a future on this earth.
      </p>
      <div style={{ marginTop: 24 }}>
        <Link to="/insights" className="btn">View Insights</Link>
      </div>
    </div>
  )
}