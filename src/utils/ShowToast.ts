import { toast } from 'react-toastify'
interface ToastConfigProps {
  position: 'bottom-right'
  autoClose: number
  hideProgressBar: boolean
  closeOnClick: boolean
  pauseOnHover: boolean
  draggable: boolean
  progress: undefined
  theme: 'light' | 'dark'
  // transition: Bounce,
}

const toastConfig: ToastConfigProps = {
  position: 'bottom-right',
  autoClose: 1000,
  hideProgressBar: false,
  closeOnClick: false,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'light',
}

export const showSuccessToast = (message: string) => {
  return toast.success(message, toastConfig)
}
export const showInfoToast = (message: string) => {
  return toast.info(message, toastConfig)
}
