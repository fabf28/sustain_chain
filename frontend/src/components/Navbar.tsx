import { NavLink, Link } from 'react-router-dom'
import styles from './Navbar.module.css'

// Define the shape of the className callback arg
type NavState = { isActive: boolean; isPending: boolean; isTransitioning: boolean };

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className="container" style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
        <Link to="/" className={styles.brand}>
          SustainChain.<span className={styles.sub}></span>
        </Link>

        <nav aria-label="Primary" className={styles.nav}>
          <NavLink
            to="/"
            end
            className={({ isActive }: NavState) => (isActive ? styles.active : styles.link)}
          >
            Home
          </NavLink>

          <NavLink
            to="/aboutus"
            className={({ isActive }: NavState) => (isActive ? styles.active : styles.link)}
          >
            About Us
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }: NavState) => (isActive ? styles.active : styles.link)}
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  )
}