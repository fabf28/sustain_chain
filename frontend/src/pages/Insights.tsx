import './Insights.css'

export default function Insights() {
  const IMG_BASE = import.meta.env.VITE_INSIGHTS_IMG_BASE || '/api/imgs'

  return (
    <div className="master-dashboard">
      <header className="dashboard-header">
        <h1>Supply Chain Insights Dashboard</h1>
        <div className="kpi-strip">
          <div className="kpi"><span>6.1d</span><small>Avg Delivery Time</small></div>
          <div className="kpi"><span>3.4d</span><small>Avg Processing Time</small></div>
          <div className="kpi"><span>12%</span><small>Efficiency Gain</small></div>
        </div>
      </header>

      <section className="analytics-band">
        <div className="analytics-card">
          <h2>Shipment Modes</h2>
          <img src={`${IMG_BASE}/mode_distribution.png`} alt="Mode Distribution" />
        </div>
        <div className="analytics-card">
          <h2>Delivery Time by Mode</h2>
          <img src={`${IMG_BASE}/delivery_time_vs_mode.png`} alt="Delivery Time by Mode" />
        </div>
        <div className="analytics-card text-card">
          <h2>Ai Overview</h2>
          <p>ai here</p>
        </div>
      </section>

      <section className="bottom-band">
        <div className="bottom-card">
          <h2>Processing Time by Supplier</h2>
          <img src={`${IMG_BASE}/processing_time_vs_supplierName.png`} alt="Processing Time by Supplier" />
        </div>
        <div className="bottom-card">
          <h2>Supplier Type Comparison</h2>
          <img src={`${IMG_BASE}/processing_time_vs_supplierType.png`} alt="Supplier Type Comparison" />
        </div>
        <div className="bottom-card">
          <h2>Delivery Time Distribution</h2>
          <img src={`${IMG_BASE}/processing_time_vs_deliveryTime.png`} alt="Delivery vs Processing Time" />
        </div>
      </section>

      <footer className="footer-band">
        <div className="footer-card">
          <h3>Average Delivery</h3>
          <p>6.1 days across all modes</p>
        </div>
        <div className="footer-card">
          <h3>Emission Focus</h3>
          <p>Short-haul road shipments dominate emissions</p>
        </div>
        <div className="footer-card">
          <h3>Processing Lag</h3>
          <p>Tier-2 suppliers increase cycle delays</p>
        </div>
      </footer>
    </div>
  )
}