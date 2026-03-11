import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Header = () => {
    const [isNavActive, setIsNavActive] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    // Reset mobile menu on route change
    useEffect(() => {
        setIsNavActive(false);
    }, [location.pathname]);

    // Header Scroll Effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleNav = () => {
        setIsNavActive(!isNavActive);
    };

    const navLinks = [
        { path: '/', label: 'Главная' },
        { path: '/programs', label: 'Программы' },
        { path: '/trainers', label: 'Тренеры' },
        { path: '/schedule', label: 'Расписание' },
        { path: '/contact', label: 'Контакты' },
    ];

    return (
        <header
            className="header"
            style={{
                padding: isScrolled ? '0.5rem 0' : '0.75rem 0',
                background: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.8)',
                boxShadow: isScrolled ? '0 10px 30px rgba(0,0,0,0.1)' : '0 2px 20px rgba(0,0,0,0.05)',
            }}
        >
            <div className="container">
                <div className="header-content">
                    <Link to="/" className="logo">
                        <i className="fas fa-dumbbell"></i>
                        <span>FIT<strong>ZONE</strong></span>
                    </Link>
                    
                    <nav className={`nav ${isNavActive ? 'active' : ''}`} id="nav">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    <Link to="/contact" className="cta-btn">Пробное занятие</Link>
                    
                    <button className="mobile-toggle" id="mobileToggle" onClick={toggleNav}>
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
