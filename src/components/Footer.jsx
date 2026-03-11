import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-col">
                        <div className="footer-logo logo">
                            <i className="fas fa-dumbbell"></i>
                            <span>FIT<strong>ZONE</strong></span>
                        </div>
                        <p>Фитнес-клуб премиум класса в центре города</p>
                        <div className="social-links">
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-facebook"></i></a>
                            <a href="#"><i className="fab fa-youtube"></i></a>
                            <a href="#"><i className="fab fa-telegram"></i></a>
                        </div>
                    </div>
                    <div className="footer-col">
                        <h4>Навигация</h4>
                        <ul>
                            <li><Link to="/programs">Программы</Link></li>
                            <li><Link to="/trainers">Тренеры</Link></li>
                            <li><Link to="/schedule">Расписание</Link></li>
                            <li><Link to="/contact">Контакты</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Контакты</h4>
                        <ul className="contact-list">
                            <li>
                                <i className="fas fa-map-marker-alt"></i>
                                г. Москва, ул. Ленина, 123
                            </li>
                            <li>
                                <i className="fas fa-phone"></i>
                                +7 (495) 123-45-67
                            </li>
                            <li>
                                <i className="fas fa-envelope"></i>
                                info@fitzone.ru
                            </li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Режим работы</h4>
                        <ul>
                            <li>Понедельник - Пятница: 24/7</li>
                            <li>Суббота - Воскресенье: 24/7</li>
                            <li>Без выходных и праздников</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2025 FitZone. Все права защищены.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
