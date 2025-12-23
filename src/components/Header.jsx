import Emsi from '../assets/logo_emsi.png'
import UCA from '../assets/LOGO_UCA.jpg'

function Header() {
  return (
    <header>
      <div>
        <img src={Emsi} className="logo Emsi" alt="Emsi" />
        <img src={UCA} className="logo UCA" alt="UCA" />
      </div>
      <h1>Introduction à React</h1>
      <h4>A la découverte des premières notions de React</h4>
    </header>
  )
}

export default Header