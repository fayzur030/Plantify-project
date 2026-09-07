import { usePlants } from '../../hooks/usePlants'
import PlantCard from './PlantCard'

const PlantList = () => {
  const plant = usePlants()
  console.log(plant)
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-16 mt-10 container mx-auto'>
      {plant.map((item) => (
        <PlantCard key={item.id} plant={item} />
      ))}
    </div>
  )
}

export default PlantList
