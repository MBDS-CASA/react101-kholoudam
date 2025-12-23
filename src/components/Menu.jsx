function Menu() {
  const handleClick = (item) => {
    alert(item)
  }

  return (
    <nav>
      <ul>
        <li onClick={() => handleClick("Notes")}>Notes</li>
        <li onClick={() => handleClick("Étudiants")}>Étudiants</li>
        <li onClick={() => handleClick("Matières")}>Matières</li>
        <li onClick={() => handleClick("À propos")}>À propos</li>
      </ul>
    </nav>
  )
}

export default Menu