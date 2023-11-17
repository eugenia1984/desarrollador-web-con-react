import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

const Header = () => {
  return (
    <header>
      Header
      <div>
        <img src={ viteLogo } className="logo" alt="Vite logo" />
        <img src={ reactLogo } className="logo react" alt="React logo" />
      </div>
    </header>
  )
}

export default Header