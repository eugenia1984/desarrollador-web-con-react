import { useEffect } from 'react'
import './PopUpStyles.css'

interface PopupProps {
  message: string
  onClose: () => void
}

const PopUp: React.FC<PopupProps> = ({
  message,
  onClose
}) => {
  
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onClose();
    }, 5000)

    return () => clearTimeout(timeoutId)
  }, [onClose])

  return (
    <div className="popup-container">
      <div className="popup-content">
        <p>{message}</p>
      </div>
    </div>
  )
}

export default PopUp
