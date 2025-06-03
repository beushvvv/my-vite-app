import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>IronGym</h3>
            <p>Лучшие тренажерные залы в вашем городе с 2010 года</p>
          </div>
          
          <div className="footer-section">
            <h3>Быстрые ссылки</h3>
            <nav>
              <Link to="/">Главная</Link>
              {' '}
              <Link to="/about">О нас</Link>
              {' '}
              <Link to="/gyms">Залы</Link>
              {' '}
              <Link to="/trainers">Тренеры</Link>
              {' '}
              <Link to="/contacts">Контакты</Link>
              {' '}
              <Link to="/items">Все элементы</Link>
            </nav>
          </div>
          
          <div className="footer-section">
            <h3>Контакты</h3>
            <p>info@irongym.ru</p>
            <p>+7 (800) 555-35-35</p>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} IronGym. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;