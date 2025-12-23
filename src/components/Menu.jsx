function Menu() {
  const items = ["Notes", "Etudiants", "Matières", "A propos"];

  return (
    <nav className="menu">
      {items.map((item, index) => (
        <button key={index} onClick={() => alert(item)}>
          {item}
        </button>
      ))}
    </nav>
  );
}

export default Menu;