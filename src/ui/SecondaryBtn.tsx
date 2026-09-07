interface ButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

const SecondaryBtn = ({ children, onClick, className }: ButtonProps) => {
  return (
    <button
      type='button'
      className='flex-1 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 cursor-pointer'
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default SecondaryBtn
