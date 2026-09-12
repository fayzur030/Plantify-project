import { MoveRight } from 'lucide-react'
import { usePlants } from '../../hooks/usePlants'
import PlantCard from './PlantCard'
import Loading from '../common/Loading'
import type { Plants } from '../../types/Plants'
import type { Dispatch, SetStateAction } from 'react'

import { showSuccessToast } from '../../utils/ShowToast'
interface ICartProps {
  cart: Plants[]
  setCart: Dispatch<SetStateAction<Plants[]>>
}

const PlantList = ({ cart, setCart }: ICartProps) => {
  const { plants, loading, error } = usePlants()

  const handleAddCart = (plant: Plants) => {
    setCart([...cart, plant])
    showSuccessToast(`Added to cart successfully!`)
  }

  return (
    <div className='max-w-7xl mx-auto mt-10 space-y-2 mb-2.5'>
      <div className='flex justify-between'>
        <h1 className='text-3xl font-semibold text-green-800'>
          Popular Plants
        </h1>
        <button className='group btn btn-ghost px-2 text-green-800'>
          View All
          <MoveRight
            size={18}
            className='transition-transform duration-300 group-hover:translate-x-1'
          />
        </button>
      </div>
      {loading ? (
        <Loading />
      ) : error ? (
        <p className='text-center mt-10 text-red-500'>{error}</p>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-4 gap-16 '>
          {plants.map((item) => (
            <PlantCard
              key={item.id}
              plant={item}
              handleAddCart={handleAddCart}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default PlantList
