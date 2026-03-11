import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Programs = () => {
    const location = useLocation();

    useEffect(() => {
        // Handle scroll to hash if present
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }

        // Setup observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const fadeInObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) translateX(0)';
                }
            });
        }, observerOptions);

        const programDetails = document.querySelectorAll('.program-detail');
        programDetails.forEach(detail => {
            const image = detail.querySelector('.program-detail-image');
            const content = detail.querySelector('.program-detail-content');
            
            if (image && content) {
                image.style.opacity = '0';
                image.style.transform = 'translateX(-50px)';
                image.style.transition = 'all 0.8s ease';
                
                content.style.opacity = '0';
                content.style.transform = 'translateX(50px)';
                content.style.transition = 'all 0.8s ease 0.2s';
                
                fadeInObserver.observe(image);
                fadeInObserver.observe(content);
            }
        });

        return () => fadeInObserver.disconnect();
    }, [location]);

    const handleSelectProgram = (programName) => {
        alert(`Вы выбрали программу "${programName}". Перенаправляем на страницу оформления...`);
        // We'll let React handle this natively or simulate it with a simple redirect below
    };

    return (
        <>
            {/* Page Hero */}
            <section className="page-hero">
                <div className="container">
                    <h1 className="page-title">Программы тренировок</h1>
                    <p className="page-subtitle">Выбери программу под свои цели и уровень подготовки</p>
                </div>
            </section>

            {/* Programs Detailed */}
            <section className="programs-detailed">
                <div className="container">
                    {/* Program 1 */}
                    <div className="program-detail" id="gym">
                        <div className="program-detail-image">
                            <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800" alt="Тренажерный зал" />
                            <div className="program-detail-badge">Самая популярная</div>
                        </div>
                        <div className="program-detail-content">
                            <h2>Тренажерный зал</h2>
                            <p className="program-description">
                                Силовые тренировки на современном оборудовании от ведущих мировых брендов.
                                Идеально подходит для набора мышечной массы, работы над рельефом и увеличения силовых показателей.
                            </p>
                            <div className="program-features">
                                <div className="program-feature-item">
                                    <i className="fas fa-check-circle"></i>
                                    <span>Более 100 тренажеров</span>
                                </div>
                                <div className="program-feature-item">
                                    <i className="fas fa-check-circle"></i>
                                    <span>Свободные веса до 200 кг</span>
                                </div>
                                <div className="program-feature-item">
                                    <i className="fas fa-check-circle"></i>
                                    <span>Кардио-зона</span>
                                </div>
                                <div className="program-feature-item">
                                    <i className="fas fa-check-circle"></i>
                                    <span>Персональные программы</span>
                                </div>
                            </div>
                            <div className="program-price">
                                <span className="price-label">от</span>
                                <span className="price-value">3500₽</span>
                                <span className="price-period">/ месяц</span>
                            </div>
                            <Link to="/contact" onClick={() => handleSelectProgram("Тренажерный зал")} className="btn btn-primary">Выбрать программу</Link>
                        </div>
                    </div>

                    {/* Program 2 */}
                    <div className="program-detail" id="crossfit">
                        <div className="program-detail-content">
                            <h2>Кроссфит</h2>
                            <p className="program-description">
                                Функциональные тренировки высокой интенсивности. Развивает силу, выносливость,
                                скорость и координацию. Подходит для тех, кто ищет максимальный вызов.
                            </p>
                            <div className="program-features">
                                <div className="program-feature-item">
                                    <i className="fas fa-check-circle"></i>
                                    <span>Групповые WOD тренировки</span>
                                </div>
                                <div className="program-feature-item">
                                    <i className="fas fa-check-circle"></i>
                                    <span>Специализированная зона</span>
                                </div>
                                <div className="program-feature-item">
                                    <i className="fas fa-check-circle"></i>
                                    <span>Сертифицированные тренеры</span>
                                </div>
                                <div className="program-feature-item">
                                    <i className="fas fa-check-circle"></i>
                                    <span>Программы для всех уровней</span>
                                </div>
                            </div>
                            <div className="program-price">
                                <span className="price-label">от</span>
                                <span className="price-value">4500₽</span>
                                <span className="price-period">/ месяц</span>
                            </div>
                            <Link to="/contact" onClick={() => handleSelectProgram("Кроссфит")} className="btn btn-primary">Выбрать программу</Link>
                        </div>
                        <div className="program-detail-image">
                            <img src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800" alt="Кроссфит" />
                            <div className="program-detail-badge">Высокая интенсивность</div>
                        </div>
                    </div>

                    {/* Program 3 */}
                    <div className="program-detail" id="yoga">
                        <div className="program-detail-image">
                            <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800" alt="Йога" />
                            <div className="program-detail-badge">Для души и тела</div>
                        </div>
                        <div className="program-detail-content">
                            <h2>Йога и пилатес</h2>
                            <p className="program-description">
                                Практики для развития гибкости, баланса и внутренней гармонии.
                                Включает хатха-йогу, виньяса флоу, пилатес и стретчинг.
                            </p>
                            <div className="program-features">
                                <div className="program-feature-item">
                                    <i className="fas fa-check-circle"></i>
                                    <span>5 направлений йоги</span>
                                </div>
                                <div className="program-feature-item">
                                    <i className="fas fa-check-circle"></i>
                                    <span>Утренние и вечерние занятия</span>
                                </div>
                                <div className="program-feature-item">
                                    <i className="fas fa-check-circle"></i>
                                    <span>Опытные инструкторы</span>
                                </div>
                                <div className="program-feature-item">
                                    <i className="fas fa-check-circle"></i>
                                    <span>Медитация и дыхательные практики</span>
                                </div>
                            </div>
                            <div className="program-price">
                                <span className="price-label">от</span>
                                <span className="price-value">3000₽</span>
                                <span className="price-period">/ месяц</span>
                            </div>
                            <Link to="/contact" onClick={() => handleSelectProgram("Йога и пилатес")} className="btn btn-primary">Выбрать программу</Link>
                        </div>
                    </div>

                    {/* Program 4 */}
                    <div className="program-detail" id="boxing">
                        <div className="program-detail-content">
                            <h2>Бокс и единоборства</h2>
                            <p className="program-description">
                                Боевые искусства для самозащиты, развития реакции и выносливости.
                                Включает бокс, кикбоксинг, тайский бокс и ММА.
                            </p>
                            <div className="program-features">
                                <div className="program-feature-item">
                                    <i className="fas fa-check-circle"></i>
                                    <span>Профессиональный ринг</span>
                                </div>
                                <div className="program-feature-item">
                                    <i className="fas fa-check-circle"></i>
                                    <span>Боксерские мешки и груши</span>
                                </div>
                                <div className="program-feature-item">
                                    <i className="fas fa-check-circle"></i>
                                    <span>Спарринги</span>
                                </div>
                                <div className="program-feature-item">
                                    <i className="fas fa-check-circle"></i>
                                    <span>Мастер-классы от чемпионов</span>
                                </div>
                            </div>
                            <div className="program-price">
                                <span className="price-label">от</span>
                                <span className="price-value">4000₽</span>
                                <span className="price-period">/ месяц</span>
                            </div>
                            <Link to="/contact" onClick={() => handleSelectProgram("Бокс и единоборства")} className="btn btn-primary">Выбрать программу</Link>
                        </div>
                        <div className="program-detail-image">
                            <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800" alt="Бокс" />
                            <div className="program-detail-badge">Новинка</div>
                        </div>
                    </div>

                    {/* Program 5 */}
                    <div className="program-detail" id="swim">
                        <div className="program-detail-image">
                            <img src="https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=800" alt="Плавание" />
                        </div>
                        <div className="program-detail-content">
                            <h2>Плавание</h2>
                            <p className="program-description">
                                25-метровый бассейн с 6 дорожками. Занятия для всех уровней: от начинающих до профессионалов.
                                Аквааэробика и водная гимнастика.
                            </p>
                            <div className="program-features">
                                <div className="program-feature-item">
                                    <i className="fas fa-check-circle"></i>
                                    <span>Олимпийский бассейн 25м</span>
                                </div>
                                <div className="program-feature-item">
                                    <i className="fas fa-check-circle"></i>
                                    <span>Аквааэробика</span>
                                </div>
                                <div className="program-feature-item">
                                    <i className="fas fa-check-circle"></i>
                                    <span>Детские группы</span>
                                </div>
                                <div className="program-feature-item">
                                    <i className="fas fa-check-circle"></i>
                                    <span>Современная система очистки</span>
                                </div>
                            </div>
                            <div className="program-price">
                                <span className="price-label">от</span>
                                <span className="price-value">3500₽</span>
                                <span className="price-period">/ месяц</span>
                            </div>
                            <Link to="/contact" onClick={() => handleSelectProgram("Плавание")} className="btn btn-primary">Выбрать программу</Link>
                        </div>
                    </div>

                    {/* Program 6 */}
                    <div className="program-detail" id="dance">
                        <div className="program-detail-content">
                            <h2>Танцевальные направления</h2>
                            <p className="program-description">
                                Зумба, стрип-пластика, хип-хоп, латина и contemporary.
                                Развивай пластику, координацию и получай удовольствие от движения.
                            </p>
                            <div className="program-features">
                                <div className="program-feature-item">
                                    <i className="fas fa-check-circle"></i>
                                    <span>8 танцевальных стилей</span>
                                </div>
                                <div className="program-feature-item">
                                    <i className="fas fa-check-circle"></i>
                                    <span>Зеркальный зал</span>
                                </div>
                                <div className="program-feature-item">
                                    <i className="fas fa-check-circle"></i>
                                    <span>Профессиональные хореографы</span>
                                </div>
                                <div className="program-feature-item">
                                    <i className="fas fa-check-circle"></i>
                                    <span>Отчетные концерты</span>
                                </div>
                            </div>
                            <div className="program-price">
                                <span className="price-label">от</span>
                                <span className="price-value">2500₽</span>
                                <span className="price-period">/ месяц</span>
                            </div>
                            <Link to="/contact" onClick={() => handleSelectProgram("Танцевальные направления")} className="btn btn-primary">Выбрать программу</Link>
                        </div>
                        <div className="program-detail-image">
                            <img src="https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=800" alt="Танцы" />
                            <div className="program-detail-badge">Весело и энергично</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Не знаешь, что выбрать?</h2>
                        <p>Запишись на бесплатную консультацию с тренером</p>
                        <Link to="/contact" className="btn btn-light">
                            <i className="fas fa-calendar-check"></i>
                            Получить консультацию
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Programs;
