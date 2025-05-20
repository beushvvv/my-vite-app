import GymCard from '../components/GymCard'
import { gymsData } from '../data/gyms'

function Gyms() {
  return (
    <div className="gyms-page">
      <h1>Наши залы</h1>
      <div className="gyms-grid">
        {gymsData.map(gym => (
          <GymCard 
            key={gym.id}
            name={gym.name}
            address={gym.address}
            hours={gym.hours}
            image={gym.image}
          />
        ))}
      </div>
    </div>
  )
}

export default Gyms