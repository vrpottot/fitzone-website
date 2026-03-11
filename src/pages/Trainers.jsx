import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Trainers = () => {
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

        const animatedElements = document.querySelectorAll('.trainer-card');
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.6s ease';
            fadeInObserver.observe(el);
        });

        return () => fadeInObserver.disconnect();
    }, []);

    const handleBookTrainer = (trainerName) => {
        alert(`Запись к тренеру ${trainerName}. Мы свяжемся с вами для уточнения времени.`);
    };

    const trainers = [
        {
            name: "Алексей Иванов",
            specialty: "Силовые тренировки, бодибилдинг",
            exp: "Опыт: 12 лет",
            badge: "Главный тренер",
            image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400",
            certs: [{ icon: "fa-certificate", text: "ISSA" }, { icon: "fa-certificate", text: "ACE" }]
        },
        {
            name: "Мария Петрова",
            specialty: "Кроссфит, функциональный тренинг",
            exp: "Опыт: 8 лет",
            badge: "Мастер-тренер",
            image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400",
            certs: [{ icon: "fa-certificate", text: "CrossFit L2" }]
        },
        {
            name: "Дмитрий Соколов",
            specialty: "Бокс, кикбоксинг",
            exp: "Опыт: 15 лет",
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
            certs: [{ icon: "fa-medal", text: "КМС по боксу" }]
        },
        {
            name: "Елена Волкова",
            specialty: "Йога, пилатес, стретчинг",
            exp: "Опыт: 10 лет",
            image: "https://images.unsplash.com/photo-1518459031867-a89b944bffe4?w=400",
            certs: [{ icon: "fa-certificate", text: "RYT 500" }]
        },
        {
            name: "Сергей Морозов",
            specialty: "Плавание, аквааэробика",
            exp: "Опыт: 9 лет",
            image: "https://images.unsplash.com/photo-1567598508481-65985588e295?w=400",
            certs: [{ icon: "fa-medal", text: "МС по плаванию" }]
        },
        {
            name: "Анна Смирнова",
            specialty: "Танцы, зумба, стрип-пластика",
            exp: "Опыт: 7 лет",
            image: "https://images.unsplash.com/photo-1550345332-09e3ac987658?w=400",
            certs: [{ icon: "fa-certificate", text: "Zumba Basic" }]
        }
    ];

    return (
        <>
            <section className="page-hero">
                <div className="container">
                    <h1 className="page-title">Наши тренеры</h1>
                    <p className="page-subtitle">Профессиональная команда для достижения ваших целей</p>
                </div>
            </section>

            <section className="trainers-section">
                <div className="container">
                    <div className="trainers-grid">
                        {trainers.map((trainer, idx) => (
                            <div key={idx} className="trainer-card">
                                <div className="trainer-image">
                                    <img src={trainer.image} alt="Тренер" />
                                    {trainer.badge && <div className="trainer-badge">{trainer.badge}</div>}
                                </div>
                                <div className="trainer-info">
                                    <h3>{trainer.name}</h3>
                                    <p className="trainer-specialty">{trainer.specialty}</p>
                                    <p className="trainer-exp">{trainer.exp}</p>
                                    <div className="trainer-certs">
                                        {trainer.certs.map((cert, cIdx) => (
                                            <span key={cIdx}><i className={`fas ${cert.icon}`}></i> {cert.text}</span>
                                        ))}
                                    </div>
                                    <button onClick={() => handleBookTrainer(trainer.name)} className="btn btn-primary btn-sm">Записаться</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Выбери своего тренера</h2>
                        <p>Персональный подход и профессиональная поддержка</p>
                        <Link to="/contact" className="btn btn-light">
                            <i className="fas fa-user-plus"></i>
                            Записаться к тренеру
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Trainers;
