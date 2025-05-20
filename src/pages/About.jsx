function About() {
    return (
      <div className="about-page">
        <section className="about-hero">
          <h1>О нашей сети</h1>
        </section>
        
        <section className="about-content">
          <div className="container">
            <h2>Наша история</h2>
            <p>
              IronGym начал свою работу в 2010 году с одного небольшого зала в центре города. 
              Сегодня это сеть из 15 современных тренажерных залов по всей стране.
            </p>
            
            <h2>Наша философия</h2>
            <p>
              Мы верим, что спорт должен быть доступен каждому. Наши залы оборудованы 
              профессиональными тренажерами, а тренеры помогут вам достичь любых целей.
            </p>
            
            <div className="stats">
              <div className="stat-item">
                <h3>15+</h3>
                <p>залов по стране</p>
              </div>
              <div className="stat-item">
                <h3>50+</h3>
                <p>профессиональных тренеров</p>
              </div>
              <div className="stat-item">
                <h3>10 000+</h3>
                <p>довольных клиентов</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
  
  export default About