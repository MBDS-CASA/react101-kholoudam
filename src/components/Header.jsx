import logo from "../assets/logo_emsi.png";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="EMSI" className="logo" />
      <div>
        <h1>Introduction à React</h1>
        <p>À la découverte des premières notions de React</p>
      </div>
    </header>
  );
}

export default Header;