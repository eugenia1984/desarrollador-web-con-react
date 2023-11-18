import './FooterStyles.css'
import ReactLogo from '../../assets/react.svg'

const Footer = () => {
  return (
    <footer className="bg-y">
      <section className="container">
        <p>Práctica con <img className="logo" src={ ReactLogo }
          width="30px" alt="React logo" /> de <a className="footer-logo" href="https://www.linkedin.com/in/maria-eugenia-costa/" target="_blank" > MEC</a></p>
      </section>
    </footer>
  )
}

export default Footer