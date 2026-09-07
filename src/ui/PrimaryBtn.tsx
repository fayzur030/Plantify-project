interface ButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

const PrimaryBtn = ({ children, onClick, className }: ButtonProps) => {
  return (
    <button
      type='button'
      className='flex-1 rounded-lg border border-green-600 px-4 py-2.5 text-sm font-semibold text-green-600 transition cursor-pointer hover:bg-green-50 '
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default PrimaryBtn
