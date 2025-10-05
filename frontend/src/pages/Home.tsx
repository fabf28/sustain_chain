import { Link, Navigate } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
// CSVUploader: only file input and upload button, no parsing or backend call


const CSVUploader = () => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
      setError(null);
    }
  };

  const handleUpload = async () => {
    if (!file) return;
    setLoading(true);
    setError(null);
    try {
      const formData = new FormData();
      formData.append('file', file);
      const response = await fetch('http://localhost:8000/insights/', {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) throw new Error('Upload failed');
      const data = await response.json();
      navigate('/Insights', { state: { insights: data } });
    } catch (err: any) {
      setError('Upload failed. Please try again.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <label htmlFor="csv-upload" className="btn" style={{ fontFamily: "monty", fontSize: '1rem', cursor: 'pointer', marginRight: 12, color: 'white', fontWeight: 800, border: 'none', borderRadius: 999, padding: '12px 22px', marginLeft: 8 }}>
        Choose CSV File
        <input
          id="csv-upload"
          type="file"
          accept=".csv"
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
      </label>
      <button
        disabled={!file || loading}
        onClick={handleUpload}
        className="btn"
        style={{ marginBottom: 50, fontFamily: "monty", fontSize: '1rem', background: 'linear-gradient(90deg,#025401,#14ff00)', color: 'white', border: 'none', borderRadius: 999, padding: '12px 22px', marginLeft: 8, marginTop: 50 }}
      >
        {loading ? 'Analyzing...' : 'Analyse'}
      </button>
      {error && <div style={{ color: 'red', marginTop: 8 }}>{error}</div>}
    </div>
  );
};
    
export default function Home() {
  return (
    <section className="bg">
      {/* Hero section with background image */}
      <div className="hero-bg">
        <h1 className='body' style={{ fontSize: '3.5rem', fontWeight: 900, textAlign: 'left', marginLeft: '19vw', marginBottom: '32px', lineHeight: 1.1 }}>
          <span style={{ whiteSpace: 'nowrap' }}>Optimize&nbsp;Your</span><br />
          <span style={{ whiteSpace: 'nowrap' }}>Supply&nbsp;Chain</span>
        </h1>
        <p className='homePagePara'>
          Supply chains run our lives. From every product on the shelf, to the food we eat, the car we drive, the bus we take.
          Optimizing those systems with sustainability and efficient practices in mind ensures a future on this earth.
        </p>
        <div style={{ marginTop: 32, marginLeft: '20vw' }}>
          <Link to="/Insights" className="btn">View Insights</Link>
        </div>
      </div>

      {/* Decorative rounded box for streamline section */}
      <div style={{
        margin: '0 auto',
        marginTop: 80,
        marginBottom: 80,
        width: '80vw',
        maxWidth: 1100,
  background: '#000',
        borderRadius: 32,
        boxShadow: '0 8px 32px 0 rgba(0,0,0,0.25)',
        padding: '48px 5vw 40px 5vw',
        textAlign: 'center',
        position: 'relative',
  border: '3px solid #fff',
        overflow: 'hidden',
      }}>
        {/* Decorative element: green gradient circle */}
        <div style={{
          position: 'absolute',
          top: -40,
          right: -40,
          width: 120,
          height: 120,
          background: 'radial-gradient(circle at 30% 30%, #14ff00 60%, transparent 100%)',
          opacity: 0.35,
          borderRadius: '50%',
          zIndex: 0,
        }} />
        <h1 style={{ position: 'relative', zIndex: 1, color: '#fff', fontWeight: 800, fontSize: '2rem', marginBottom: 32 }}>Streamline Your Operations</h1>
  <div style={{ position: 'relative', zIndex: 1, marginBottom: 8, color: '#fff', fontSize: '1.1rem', fontWeight: 400, letterSpacing: 0.1, lineHeight: 1.5, fontFamily: 'monty-light, monty, serif' }}>
          Upload your CSV file below to get started with analysis.<br/>
          Please make sure it follows the format in <a href="https://docs.google.com/spreadsheets/d/154o2DtI_UaIOucdpa5cUBMcoTwkxsLutqLzByIFo1nI/edit?usp=sharing" target="_blank" rel="noopener noreferrer" style={{ color: '#14ff00', textDecoration: 'underline' }}>this example</a>.
        </div>
  <div style={{ position: 'relative', zIndex: 1, paddingTop: 2, paddingBottom: 8 }}>
          <CSVUploader />
        </div>
        {/* Decorative element: bottom left accent */}
        <div style={{
          position: 'absolute',
          left: -30,
          bottom: -30,
          width: 80,
          height: 80,
          background: 'radial-gradient(circle at 70% 70%, #025401 60%, transparent 100%)',
          opacity: 0.28,
          borderRadius: '50%',
          zIndex: 0,
        }} />
        {/* Extra decorative circles */}
        <div style={{
          position: 'absolute',
          top: 40,
          left: 60,
          width: 60,
          height: 60,
          background: 'radial-gradient(circle at 60% 40%, #14ff00 60%, transparent 100%)',
          opacity: 0.22,
          borderRadius: '50%',
          zIndex: 0,
        }} />
        <div style={{
          position: 'absolute',
          bottom: 40,
          right: 80,
          width: 40,
          height: 40,
          background: 'radial-gradient(circle at 40% 60%, #fff 60%, transparent 100%)',
          opacity: 0.18,
          borderRadius: '50%',
          zIndex: 0,
        }} />
        <div style={{
          position: 'absolute',
          top: 120,
          right: 120,
          width: 32,
          height: 32,
          background: 'radial-gradient(circle at 50% 50%, #14ff00 60%, transparent 100%)',
          opacity: 0.25,
          borderRadius: '50%',
          zIndex: 0,
        }} />
      </div>
    </section>
  )
}
