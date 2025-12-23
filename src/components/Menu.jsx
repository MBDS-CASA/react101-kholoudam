function Menu({ page, setPage }) {
  return (
    <nav className="sidebar">
      <h2 style={{ color: "white", marginBottom: "20px" }}>Dashboard</h2>

      <button
        className={page === "notes" ? "active" : ""}
        onClick={() => setPage("notes")}
      >
        Notes
      </button>

      <button
        className={page === "etudiants" ? "active" : ""}
        onClick={() => setPage("etudiants")}
      >
        Étudiants
      </button>

      <button
        className={page === "matieres" ? "active" : ""}
        onClick={() => setPage("matieres")}
      >
        Matières
      </button>
    </nav>
  );
}

export default Menu;