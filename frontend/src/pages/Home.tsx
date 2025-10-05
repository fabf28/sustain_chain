import { Link } from 'react-router-dom'
import { useState } from 'react'
// CSVUploader: only file input and upload button, no parsing or backend call
const CSVUploader = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  return (
    <div>
      <label htmlFor="csv-upload" className="btn" style={{ cursor: 'pointer', marginRight: 12 }}>
        Choose CSV File
        <input
          id="csv-upload"
          type="file"
          accept=".csv"
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
      </label>
      <button disabled={!file} className="btn">
        Upload CSV
      </button>
    </div>
  );
};
      <div style={{ margin: '48px auto', width: '100%', display: 'flex', justifyContent: 'center' }}>
        <CSVUploader />
      </div>
    
export default function Home() {
  return (
    <section className="bg" style={{ background: '#000', padding: 0, margin: 0 }}>
      {/* Hero section with background image */}
      <div className="hero-bg" style={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', paddingTop: '64px' }}>
        <h1 className='homePagePara' style={{ fontSize: '3.5rem', fontWeight: 900, textAlign: 'left', marginLeft: '19vw', marginBottom: '20px', lineHeight: 1.1 }}>
          <span style={{ whiteSpace: 'nowrap' }}>Optimize&nbsp;Your</span><br />
          <span style={{ whiteSpace: 'nowrap' }}>Supply&nbsp;Chain</span>
        </h1>
        <p style={{ maxWidth: '65ch', color: '#fff', marginTop: 24, marginLeft: '45vw', lineHeight: 1.6, textAlign: 'left', marginBottom: '20px'}}>
          Supply chains run our lives. From every product on the shelf, to the food we eat, the car we drive, the bus we take.
          Optimizing those systems with sustainability and efficient practices in mind ensures a future on this earth.
        </p>
        <div style={{ marginTop: 24 , marginLeft: '20vw'}}>
          <Link to="/Insights" className="btn">View Insights</Link>
        </div>
      </div>
      {/* White line at the end of the hero image with rounded edges */}
      <hr style={{ border: 'none', borderTop: '4px solid white', width: '60%', margin: '0 auto', borderRadius: '8px' }} />
      <div style={{ paddingTop: 40, textAlign: 'center' }}>
        <h1>Streamline Your Operations</h1>
      </div>
      <div style={{ margin: '48px auto', width: '100%', display: 'flex', justifyContent: 'center' }}>
        <CSVUploader />
      </div>
    </section>
  )
}