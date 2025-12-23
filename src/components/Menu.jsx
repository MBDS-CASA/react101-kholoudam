function Menu({ activeMenu, setActiveMenu }) {
  const menus = ["Notes", "Etudiants", "Matieres", "A propos"];

  return (
    <nav className="menu">
      {menus.map((menu) => (
        <button
          key={menu}
          className={activeMenu === menu ? "active" : ""}
          onClick={() => setActiveMenu(menu)}
        >
          {menu}
        </button>
      ))}
    </nav>
  );
}

export default Menu;