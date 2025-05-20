import { trainersData } from '../data/trainers';
import './Trainers.css';

function Trainers() {
  return (
    <div className="trainers-page">
      <section className="trainers-hero">
        <h1>Наши тренеры</h1>
        <p>Профессионалы с многолетним опытом</p>
      </section>

      <div className="container">
        <div className="trainers-grid">
          {trainersData.map((trainer) => (
            <div key={trainer.id} className="trainer-card">
              <div className="trainer-image">
                <img src={trainer.image} alt={trainer.name} />
              </div>
              <div className="trainer-info">
                <h3>{trainer.name}</h3>
                <p className="specialization">{trainer.specialization}</p>
                <p className="experience">Опыт: {trainer.experience}</p>
                <div className="trainer-skills">
                  {trainer.skills.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
                <button className="btn schedule-btn">Расписание</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Trainers;