import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <nav>
        <Link to="/" className="logo-container">
          <img src="/image_1.jpg" alt="Repair Center Logo" className="logo-image" />
          <div className="logo">REPAIR CENTER</div>
        </Link>
        <ul className="nav-links">
          <li><a href="/#services">Services</a></li>
          <li><a href="/#about">About</a></li>
          <li><a href="/#faq">FAQ</a></li>
          <li><a href="/#contact">Contact</a></li>
          <li><a href="/#shipping">Shipping</a></li>
          <li><a href="/#terms">Terms</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
