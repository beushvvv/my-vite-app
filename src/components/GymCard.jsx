function GymCard({ name, address, hours, image }) {
    return (
      <div className="gym-card">
        <div className="text-center">
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p><strong>Адрес:</strong> {address}</p>
        <p><strong>Часы работы:</strong> {hours}</p>
        <button className="btn mx-auto flex justify-center gap-4">Подробнее</button>
      </div>
      </div>
    )
  }
  
  export default GymCard