import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Schedule = () => {
    const [activeDay, setActiveDay] = useState('monday');

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

        const animatedElements = document.querySelectorAll('.schedule-item');
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.6s ease';
            fadeInObserver.observe(el);
        });

        return () => fadeInObserver.disconnect();
    }, [activeDay]);

    const handleBook = (className, time) => {
        alert(`Вы записались на "${className}" в ${time}`);
    };

    const scheduleData = {
        monday: [
            { time: "07:00 - 08:30", name: "Утренняя йога", trainer: "Елена Волкова", room: "Зал №1" },
            { time: "09:00 - 10:00", name: "Кроссфит WOD", trainer: "Мария Петрова", room: "CrossFit зона" },
            { time: "11:00 - 12:00", name: "Бокс для начинающих", trainer: "Дмитрий Соколов", room: "Ринг" },
            { time: "18:00 - 19:00", name: "Зумба", trainer: "Анна Смирнова", room: "Зал №2" },
            { time: "19:30 - 20:30", name: "Плавание взрослые", trainer: "Сергей Морозов", room: "Бассейн" }
        ],
        tuesday: [
            { time: "08:00 - 09:30", name: "Пилатес", trainer: "Елена Волкова", room: "Зал №1" },
            { time: "10:00 - 11:30", name: "Тяжелая атлетика", trainer: "Алексей Иванов", room: "Тренажерный зал" },
            { time: "17:00 - 18:00", name: "Аквааэробика", trainer: "Сергей Морозов", room: "Бассейн" }
        ],
        wednesday: [
             { time: "07:00 - 08:30", name: "Утренняя йога", trainer: "Елена Волкова", room: "Зал №1" },
             { time: "18:00 - 19:00", name: "Стрип-пластика", trainer: "Анна Смирнова", room: "Зал №2" },
             { time: "19:00 - 20:30", name: "Кикбоксинг", trainer: "Дмитрий Соколов", room: "Ринг" }
        ],
        thursday: [
            { time: "09:00 - 10:00", name: "Кроссфит WOD", trainer: "Мария Петрова", room: "CrossFit зона" },
            { time: "18:30 - 19:30", name: "Силовая тренировка", trainer: "Алексей Иванов", room: "Тренажерный зал" }
        ],
        friday: [
             { time: "08:00 - 09:30", name: "Стретчинг", trainer: "Елена Волкова", room: "Зал №1" },
             { time: "17:00 - 18:00", name: "Зумба", trainer: "Анна Смирнова", room: "Зал №2" },
             { time: "19:00 - 20:00", name: "Спарринги", trainer: "Дмитрий Соколов", room: "Ринг" }
        ],
        saturday: [
             { time: "10:00 - 11:00", name: "Йога выходного дня", trainer: "Елена Волкова", room: "Зал №1" },
             { time: "11:30 - 13:00", name: "Мастер-класс по кроссфиту", trainer: "Мария Петрова", room: "CrossFit зона" }
        ],
        sunday: [
             { time: "11:00 - 12:00", name: "Детское плавание", trainer: "Сергей Морозов", room: "Бассейн" },
             { time: "12:30 - 14:00", name: "Бодибилдинг база", trainer: "Алексей Иванов", room: "Тренажерный зал" }
        ]
    };

    const days = [
        { id: 'monday', label: 'Понедельник' },
        { id: 'tuesday', label: 'Вторник' },
        { id: 'wednesday', label: 'Среда' },
        { id: 'thursday', label: 'Четверг' },
        { id: 'friday', label: 'Пятница' },
        { id: 'saturday', label: 'Суббота' },
        { id: 'sunday', label: 'Воскресенье' }
    ];

    return (
        <>
            <section className="page-hero">
                <div className="container">
                    <h1 className="page-title">Расписание занятий</h1>
                    <p className="page-subtitle">Выбери удобное время для тренировок</p>
                </div>
            </section>

            <section className="schedule-section">
                <div className="container">
                    <div className="schedule-filters">
                        {days.map(day => (
                            <button
                                key={day.id}
                                className={`schedule-filter ${activeDay === day.id ? 'active' : ''}`}
                                onClick={() => setActiveDay(day.id)}
                            >
                                {day.label}
                            </button>
                        ))}
                    </div>

                    <div className="schedule-content">
                        <div className="schedule-day active">
                            {scheduleData[activeDay]?.map((item, idx) => (
                                <div key={idx} className="schedule-item">
                                    <div className="schedule-time">{item.time}</div>
                                    <div className="schedule-class">
                                        <h3>{item.name}</h3>
                                        <p>{item.trainer}</p>
                                    </div>
                                    <div className="schedule-room">{item.room}</div>
                                    <button
                                        onClick={() => handleBook(item.name, item.time)}
                                        className="btn btn-primary btn-sm"
                                    >
                                        Записаться
                                    </button>
                                </div>
                            )) || <p style={{textAlign: 'center', opacity: 0.7}}>В этот день занятий нет.</p>}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Schedule;
