import type { Dispatch, SetStateAction } from 'react'
import type { Plants } from '../../types/Plants'
import { Trash } from 'lucide-react'
import { showInfoToast } from '../../utils/ShowToast'

interface IModalProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  cart: Plants[]
  setCart: Dispatch<SetStateAction<Plants[]>>
}

const PlantCartModal = ({ setIsOpen, cart, setCart }: IModalProps) => {
  const handleRemove = (id: number) => {
    const plant = cart.find((plant) => plant.id === id)
    setCart((prev) => prev.filter((plant) => plant.id !== id))

    showInfoToast(`${plant?.name} delete successfully!`)
  }
  return (
    <div className='fixed inset-0 z-100 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm'>
      <div className='w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl'>
        {/* Header */}
        <div className='flex items-center justify-between border-b border-gray-100 px-6 py-5'>
          <div>
            <h1 className='text-2xl font-bold text-gray-800'>Cart</h1>

            <p className='mt-1 text-sm text-gray-500'>
              {cart.length} {cart.length === 1 ? 'item' : 'items'}
            </p>
          </div>

          <button
            className='flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-gray-100 text-gray-500 transition hover:bg-gray-200 hover:text-gray-800'
            onClick={() => setIsOpen(false)}
          >
            X
          </button>
        </div>

        {/* Cart */}
        <div className='max-h-[60vh] overflow-y-auto px-6 py-5'>
          {cart.length === 0 ? (
            <div className='py-10 text-center'>
              <p className='text-lg font-medium text-gray-600'>
                Your cart is empty
              </p>
            </div>
          ) : (
            <div className='space-y-4'>
              {cart.map((p) => (
                <div
                  key={p.id}
                  className='flex gap-4 rounded-xl border border-gray-100 bg-gray-50 p-3'
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    className='h-20 w-20 shrink-0 rounded-lg object-cover'
                  />

                  <div className='min-w-0 flex justify-between items-center'>
                    <div>
                      <h2 className='truncate text-lg font-semibold text-gray-800'>
                        {p.name}
                      </h2>

                      <p className='mt-1 line-clamp-2 text-sm leading-5 text-gray-500'>
                        {p.description}
                      </p>
                    </div>
                    <button
                      className='shrink-0  text-red-500 transition hover:text-red-700 cursor-pointer'
                      onClick={() => handleRemove(p.id)}
                    >
                      <Trash className='h-6 w-6' />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        {/* <button>
          <Delete />
        </button> */}
      </div>
    </div>
  )
}

export default PlantCartModal
