import Emsi from '../assets/logo_emsi.png';

function Header() {
  return (
    <header className="header">
      <img src={Emsi} alt="Logo Formation" className="logo" />
      <div>
        <h1>Introduction à React</h1>
        <h2>A la découverte des premières notions de React</h2>
      </div>
    </header>
  );
}

export default Header;