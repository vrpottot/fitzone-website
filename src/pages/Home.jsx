import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const fadeInObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        const animatedElements = document.querySelectorAll(
            '.feature-card, .program-card, .trainer-card, .schedule-item, .contact-info-card'
        );

        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.6s ease';
            fadeInObserver.observe(el);
        });

        return () => fadeInObserver.disconnect();
    }, []);

    return (
        <>
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-overlay"></div>
                <div className="container">
                    <div className="hero-content">
                        <span className="hero-badge">Открыт набор на новый сезон</span>
                        <h1 className="hero-title">
                            Твоя лучшая версия<br />
                            <span className="gradient-text">начинается здесь</span>
                        </h1>
                        <p className="hero-text">
                            Современный фитнес-клуб с профессиональным оборудованием,<br />
                            опытными тренерами и программами для любого уровня подготовки
                        </p>
                        <div className="hero-buttons">
                            <Link to="/programs" className="btn btn-primary">
                                <i className="fas fa-fire"></i>
                                Выбрать программу
                            </Link>
                            <a href="#video" className="btn btn-secondary">
                                <i className="fas fa-play"></i>
                                Видео тур
                            </a>
                        </div>
                        <div className="hero-stats">
                            <div className="stat-item">
                                <div className="stat-number">5000+</div>
                                <div className="stat-label">Довольных клиентов</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">15</div>
                                <div className="stat-label">Опытных тренеров</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">24/7</div>
                                <div className="stat-label">Круглосуточно</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">Преимущества</span>
                        <h2 className="section-title">Почему выбирают FitZone</h2>
                    </div>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">
                                <i className="fas fa-dumbbell"></i>
                            </div>
                            <h3>Новейшее оборудование</h3>
                            <p>Современные тренажеры от ведущих мировых производителей</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">
                                <i className="fas fa-user-tie"></i>
                            </div>
                            <h3>Профессиональные тренеры</h3>
                            <p>Сертифицированные специалисты с опытом работы от 5 лет</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">
                                <i className="fas fa-clock"></i>
                            </div>
                            <h3>Удобный график</h3>
                            <p>Работаем 24/7, выбирайте удобное для вас время</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">
                                <i className="fas fa-swimming-pool"></i>
                            </div>
                            <h3>Бассейн и сауна</h3>
                            <p>25-метровый бассейн, финская сауна и хаммам</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">
                                <i className="fas fa-utensils"></i>
                            </div>
                            <h3>Спорт-бар</h3>
                            <p>Здоровое питание и спортивные коктейли</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">
                                <i className="fas fa-users"></i>
                            </div>
                            <h3>Групповые занятия</h3>
                            <p>Йога, пилатес, зумба, кроссфит и многое другое</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Programs Preview */}
            <section className="programs-preview">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">Программы</span>
                        <h2 className="section-title">Популярные направления</h2>
                    </div>
                    <div className="programs-grid">
                        <div className="program-card">
                            <div className="program-image">
                                <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600"
                                    alt="Тренажерный зал" />
                                <div className="program-badge">Хит</div>
                            </div>
                            <div className="program-content">
                                <h3>Тренажерный зал</h3>
                                <p>Силовые тренировки для набора массы и рельефа</p>
                                <Link to="/programs#gym" className="program-link">
                                    Подробнее <i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="program-card">
                            <div className="program-image">
                                <img src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600" alt="Кроссфит" />
                                <div className="program-badge">Популярно</div>
                            </div>
                            <div className="program-content">
                                <h3>Кроссфит</h3>
                                <p>Функциональные тренировки высокой интенсивности</p>
                                <Link to="/programs#crossfit" className="program-link">
                                    Подробнее <i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="program-card">
                            <div className="program-image">
                                <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600" alt="Йога" />
                            </div>
                            <div className="program-content">
                                <h3>Йога и пилатес</h3>
                                <p>Гибкость, баланс и гармония тела и духа</p>
                                <Link to="/programs#yoga" className="program-link">
                                    Подробнее <i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="program-card">
                            <div className="program-image">
                                <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600" alt="Бокс" />
                                <div className="program-badge">Новинка</div>
                            </div>
                            <div className="program-content">
                                <h3>Бокс и единоборства</h3>
                                <p>Боевые искусства для всех уровней подготовки</p>
                                <Link to="/programs#boxing" className="program-link">
                                    Подробнее <i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="program-card">
                            <div className="program-image">
                                <img src="https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=600" alt="Плавание" />
                            </div>
                            <div className="program-content">
                                <h3>Плавание</h3>
                                <p>Олимпийский бассейн и аквааэробика</p>
                                <Link to="/programs#swim" className="program-link">
                                    Подробнее <i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="program-card">
                            <div className="program-image">
                                <img src="https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=600" alt="Танцы" />
                                <div className="program-badge">Топ</div>
                            </div>
                            <div className="program-content">
                                <h3>Танцевальные направления</h3>
                                <p>Зумба, хип-хоп, латина для пластики</p>
                                <Link to="/programs#dance" className="program-link">
                                    Подробнее <i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">Отзывы</span>
                        <h2 className="section-title">Что говорят наши атлеты</h2>
                    </div>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="testimonial-content">
                                <div className="stars"><i className="fas fa-star"></i><i className="fas fa-star"></i><i
                                    className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></div>
                                <p>"Лучший зал в городе! Оборудование всегда в отличном состоянии, а атмосфера мотивирует на
                                    новые рекорды."</p>
                                <div className="testimonial-author">
                                    <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100"
                                        alt="Александр" />
                                    <div>
                                        <strong>Александр Попов</strong>
                                        <span>3 года с нами</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="feature-card">
                            <div className="testimonial-content">
                                <div className="stars"><i className="fas fa-star"></i><i className="fas fa-star"></i><i
                                    className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></div>
                                <p>"Профессиональные тренеры и очень чистый бассейн. Результаты пришли гораздо быстрее, чем я
                                    ожидала!"</p>
                                <div className="testimonial-author">
                                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100" alt="Мария" />
                                    <div>
                                        <strong>Мария Иванова</strong>
                                        <span>1 год с нами</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="pricing" id="pricing">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">Тарифы</span>
                        <h2 className="section-title">Выберите свой формат тренировок</h2>
                    </div>
                    <div className="features-grid">
                        <div className="feature-card pricing-card">
                            <h3>Базовый</h3>
                            <div className="price">
                                <span className="amount">2 900 ₽</span>
                                <span className="period">/ месяц</span>
                            </div>
                            <ul className="pricing-features" style={{ listStyle: 'none', margin: '2rem 0', textAlign: 'left' }}>
                                <li><i className="fas fa-check" style={{ color: 'var(--primary)', marginRight: '0.5rem' }}></i> Безлимитный зал</li>
                                <li><i className="fas fa-check" style={{ color: 'var(--primary)', marginRight: '0.5rem' }}></i> Бесплатная вода</li>
                                <li style={{ opacity: 0.5 }}><i className="fas fa-times" style={{ marginRight: '0.5rem' }}></i> Групповые занятия</li>
                            </ul>
                            <button className="btn btn-primary btn-block">Начать сейчас</button>
                        </div>
                        <div className="feature-card pricing-card active" style={{ border: '2px solid var(--primary)' }}>
                            <div className="program-badge">Топ</div>
                            <h3>Премиум</h3>
                            <div className="price">
                                <span className="amount">5 900 ₽</span>
                                <span className="period">/ месяц</span>
                            </div>
                            <ul className="pricing-features" style={{ listStyle: 'none', margin: '2rem 0', textAlign: 'left' }}>
                                <li><i className="fas fa-check" style={{ color: 'var(--primary)', marginRight: '0.5rem' }}></i> Зал + Бассейн</li>
                                <li><i className="fas fa-check" style={{ color: 'var(--primary)', marginRight: '0.5rem' }}></i> Все групповые занятия</li>
                                <li><i className="fas fa-check" style={{ color: 'var(--primary)', marginRight: '0.5rem' }}></i> 2 гостевых визита</li>
                            </ul>
                            <button className="btn btn-primary btn-block">Начать сейчас</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Начни свой путь к идеальной форме</h2>
                        <p>Первая тренировка бесплатно! Убедись сам в качестве нашего клуба</p>
                        <Link to="/contact" className="btn btn-light">
                            <i className="fas fa-calendar-plus"></i>
                            Записаться на пробное занятие
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
