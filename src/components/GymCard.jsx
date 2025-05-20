function GymCard({ name, address, hours, image }) {
    return (
      <div className="gym-card">
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p><strong>Адрес:</strong> {address}</p>
        <p><strong>Часы работы:</strong> {hours}</p>
        <button className="btn">Подробнее</button>
      </div>
    )
  }
  
  export default GymCard