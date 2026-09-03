import { Leaf, Search } from 'lucide-react'

const Banner = () => {
  return (
    <div className='banner flex items-center justify-start text-start'>
      <div className='max-w-7xl px-6 md:px-12 space-y-4 mt-4 w-full'>
        <div className='inline-flex items-center gap-1.5 rounded-full border border-green-200 bg-[#8ec4a3] px-3 py-1 text-xs font-semibold text-[#0F5132] shadow-sm'>
          <Leaf className='h-3.5 w-3.5' />
          <span>Discover Nature</span>
        </div>

        <div>
          <h1 className='text-5xl font-semibold text-[#166534] max-w-lg leading-tight'>
            Bring{' '}
            <span className='text-[#0F5132]'>Greenery Into Your Life</span>
          </h1>
          <p className='text-[#374151] font-medium max-w-md pt-3'>
            Explore a wide variety of beautiful plants, learn about their care,
            and make your space healthier and happier.
          </p>
        </div>

        {/* Search Box with Right Button */}
        <div className='relative w-full max-w-md'>
          <Search className='absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0F5132]/60' />
          <input
            type='text'
            placeholder='Search nature, plants...'
            className='w-full rounded-full border border-green-200 bg-white py-2.5 pl-10 pr-24 text-sm text-[#0F5132] placeholder-[#0F5132]/60 outline-none transition-all focus:border-[#8ec4a3] focus:bg-white focus:ring-2 focus:ring-[#8ec4a3]/40 shadow-xl'
          />
          <button
            type='button'
            className='absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-[#0F5132] px-4 py-1.5 text-xs font-medium text-white transition-all hover:bg-[#0F5132]/90'
          >
            Search
          </button>
        </div>
      </div>
    </div>
  )
}

export default Banner
