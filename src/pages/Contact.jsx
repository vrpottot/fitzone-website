import { useEffect } from 'react';

const Contact = () => {
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

        const animatedElements = document.querySelectorAll('.contact-info-card');
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.6s ease';
            fadeInObserver.observe(el);
        });

        return () => fadeInObserver.disconnect();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        
        console.log('Form submitted:', data);
        alert('Спасибо за вашу заявку! Мы свяжемся с вами в ближайшее время.');
        e.target.reset();
    };

    return (
        <>
            <section className="page-hero">
                <div className="container">
                    <h1 className="page-title">Свяжитесь с нами</h1>
                    <p className="page-subtitle">Мы всегда рады ответить на ваши вопросы</p>
                </div>
            </section>

            <section className="contact-page">
                <div className="container">
                    <div className="contact-grid">
                        <div className="contact-form-wrap">
                            <h2>Записаться на пробное занятие</h2>
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <input type="text" name="name" placeholder="Ваше имя" required />
                                </div>
                                <div className="form-group">
                                    <input type="tel" name="phone" placeholder="Телефон" required />
                                </div>
                                <div className="form-group">
                                    <input type="email" name="email" placeholder="Email" required />
                                </div>
                                <div className="form-group">
                                    <select name="program" required defaultValue="">
                                        <option value="" disabled>Выберите программу</option>
                                        <option value="Тренажерный зал">Тренажерный зал</option>
                                        <option value="Кроссфит">Кроссфит</option>
                                        <option value="Йога">Йога</option>
                                        <option value="Бокс">Бокс</option>
                                        <option value="Плавание">Плавание</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <textarea name="comment" placeholder="Комментарий" rows="4"></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">
                                    <i className="fas fa-paper-plane"></i> Отправить заявку
                                </button>
                            </form>
                        </div>

                        <div className="contact-info-wrap">
                            <div className="contact-info-card">
                                <div className="contact-info-icon">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div className="contact-info-content">
                                    <h3>Адрес</h3>
                                    <p>г. Москва, ул. Ленина, 123<br />ТЦ "Спортивный", 3 этаж</p>
                                </div>
                            </div>

                            <div className="contact-info-card">
                                <div className="contact-info-icon">
                                    <i className="fas fa-phone"></i>
                                </div>
                                <div className="contact-info-content">
                                    <h3>Телефон</h3>
                                    <p>+7 (495) 123-45-67<br />+7 (925) 123-45-67</p>
                                </div>
                            </div>

                            <div className="contact-info-card">
                                <div className="contact-info-icon">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div className="contact-info-content">
                                    <h3>Email</h3>
                                    <p>info@fitzone.ru<br />support@fitzone.ru</p>
                                </div>
                            </div>

                            <div className="contact-info-card">
                                <div className="contact-info-icon">
                                    <i className="fas fa-clock"></i>
                                </div>
                                <div className="contact-info-content">
                                    <h3>Режим работы</h3>
                                    <p>Круглосуточно 24/7<br />Без выходных</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
