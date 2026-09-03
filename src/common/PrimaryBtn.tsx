interface ButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

const PrimaryBtn = ({ children, onClick, className }: ButtonProps) => {
  return (
    <button
      type='button'
      className={`w-full rounded-xl bg-green-600 px-4 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-green-700 hover:shadow-lg active:scale-[0.98] cursor-pointer ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default PrimaryBtn
