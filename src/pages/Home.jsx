import GymCard from '../components/GymCard.jsx';

// Временные изображения с Unsplash
const gymImage = "https://images.unsplash.com/photo-1581009137042-c552e485697a?w=500&auto=format&fit=crop";
const heroBg = "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1000&auto=format&fit=crop";

function Home() {
  return (
    <div className="home">
      <section 
        className="hero" 
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${heroBg})` }}
      >
        <h1>Добро пожаловать в IronGym</h1>
        <p>Лучшие тренажерные залы в вашем городе</p>
        <button className="btn">Присоединиться</button>
      </section>

      <section className="featured-gym">
        <div className="text-center">
          <h2>Зал месяца</h2>
          <GymCard 
            name="IronGym Premium" 
            address="ул. Спортивная, 15" 
            hours="06:00 - 23:00" 
            image={gymImage}
          />
        </div>
      </section>
    </div>
  );
}

export default Home;