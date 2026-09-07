import type { Plants } from '../../types/Plants'
import PrimaryBtn from '../../ui/PrimaryBtn'
import SecondaryBtn from '../../ui/SecondaryBtn'

interface IPlant {
  plant: Plants
  handleAddCart: (plant: Plants) => void
}

const PlantCard = ({ plant, handleAddCart }: IPlant) => {
  return (
    <div className='group overflow-hidden rounded-2xl border border-gray-200 bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl'>
      {/* Image */}
      <div className='relative h-56 overflow-hidden bg-gray-100'>
        <img
          src={plant.image}
          alt={plant.name}
          className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
        />

        {/* Badge */}
        <span className='absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-green-700 shadow-sm backdrop-blur'>
          Plant
        </span>
      </div>

      {/* Content */}
      <div className='p-5'>
        <h2 className='line-clamp-1 text-xl font-bold text-gray-800'>
          {plant.name}
        </h2>

        <p className='mt-2 line-clamp-2 text-sm leading-6 text-gray-500'>
          {plant.description}
        </p>

        {/* Buttons */}
        <div className='mt-5 flex gap-3'>
          <PrimaryBtn onClick={() => handleAddCart(plant)}>Add cart</PrimaryBtn>
          <SecondaryBtn>Buy Now</SecondaryBtn>
        </div>
      </div>
    </div>
  )
}

export default PlantCard
