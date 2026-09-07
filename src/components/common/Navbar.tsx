import { Heart, ShoppingCart, User } from 'lucide-react'
import logo from '../../assets/plantfyLogo-removebg-preview.png'
import type { Plants } from '../../types/Plants'
import { useState, type Dispatch, type SetStateAction } from 'react'
import PlantCartModal from '../cart/PlantCartModal'
const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Plants', href: '/plants' },
  { name: 'My Plants', href: '/my-plants' },
  { name: 'About', href: '/about' },
]

interface ICartProps {
  cart: Plants[]
  setCart: Dispatch<SetStateAction<Plants[]>>
}

const Navbar = ({ cart, setCart }: ICartProps) => {
  // console.log(cart)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <nav className='border-b border-gray-100 bg-white sticky top-0 z-50'>
      <div className='mx-auto flex max-w-7xl items-center justify-between px-5 py-4'>
        {/* Logo + Nav Items */}
        <div className='flex items-center gap-8'>
          {/* Logo */}
          <a href='/' className='flex items-center gap-2'>
            {/* <Leaf size={27} strokeWidth={2} className='text-[#166534]' /> */}
            <img src={logo} alt='Plantify Logo' className='h-8 w-24' />
            {/* <span className='text-xl font-bold text-[#0F5132]'>Plantify</span> */}
          </a>

          {/* Nav Items */}
          <div className='hidden items-center gap-6 md:flex'>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className='text-sm font-medium text-[#374151] transition hover:text-[#166534]'
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        {/* Right Side Actions */}
        <div className='flex items-center gap-4'>
          {/* Wishlist */}
          <button
            type='button'
            aria-label='Wishlist'
            className='text-[#0F5132] transition hover:text-[#22C55E]'
          >
            <Heart size={22} strokeWidth={1.8} />
          </button>

          {/* Cart */}
          <button
            type='button'
            aria-label='Shopping cart'
            className='relative text-[#0F5132] transition hover:text-[#22C55E] cursor-pointer'
            onClick={() => setIsOpen(!isOpen)}
          >
            <ShoppingCart size={23} strokeWidth={1.8} />

            {cart.length > 0 && (
              <span className='cursor-pointer absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#22C55E] text-[10px] font-semibold text-white'>
                {cart.length}
              </span>
            )}
          </button>

          {/* Profile */}
          <button
            type='button'
            aria-label='Profile'
            className='flex h-9 w-9 items-center justify-center rounded-full bg-[#0F5132] text-white transition hover:bg-[#166534] cursor-pointer'
          >
            <User size={19} />
          </button>
        </div>
        {isOpen && (
          <PlantCartModal setIsOpen={setIsOpen} cart={cart} setCart={setCart} />
        )}
      </div>
    </nav>
  )
}

export default Navbar
