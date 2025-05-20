import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">Iron<span>Gym</span></Link>
        <nav className="nav-menu">
          <Link to="/" className="nav-link">Главная</Link>
          <Link to="/about" className="nav-link">О нас</Link>
          <Link to="/gyms" className="nav-link">Залы</Link>
          <Link to="/trainers" className="nav-link">Тренеры</Link>
          <Link to="/contacts" className="nav-link">Контакты</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header;