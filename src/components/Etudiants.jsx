import { useState } from "react";
import data from "../data.json";

function Etudiants() {
  // Étudiants uniques
  const students = Array.from(
    new Map(data.map(d => [d.student.id, d.student])).values()
  );

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const itemsPerPage = 10;

  // 🔍 Filtrage
  const filteredStudents = students.filter(s =>
    `${s.firstname} ${s.lastname} ${s.id}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  // Pagination après filtrage
  const totalPages = Math.ceil(filteredStudents.length / itemsPerPage);
  const start = (page - 1) * itemsPerPage;
  const current = filteredStudents.slice(start, start + itemsPerPage);

  // Notes de l'étudiant sélectionné
  const studentNotes = selectedStudent
    ? data.filter(d => d.student.id === selectedStudent.id)
    : [];

  // Reset page quand on recherche
  const handleSearch = (e) => {
    setSearch(e.target.value);
    setPage(1);
    setSelectedStudent(null);
  };

  return (
    <div className="page">
      <h1>Liste des étudiants</h1>

      {/* RECHERCHE */}
      <input
        type="text"
        placeholder="Rechercher par nom, prénom ou ID..."
        value={search}
        onChange={handleSearch}
        className="search-input"
      />

      {/* TABLEAU */}
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Prénom</th>
            <th>Nom</th>
          </tr>
        </thead>
        <tbody>
          {current.length > 0 ? (
            current.map((s) => (
              <tr
                key={s.id}
                className="clickable"
                onClick={() => setSelectedStudent(s)}
              >
                <td>{s.id}</td>
                <td>{s.firstname}</td>
                <td>{s.lastname}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" style={{ textAlign: "center" }}>
                Aucun étudiant trouvé
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div className="pagination">
          <button disabled={page === 1} onClick={() => setPage(page - 1)}>
            Précédent
          </button>
          <span>Page {page} / {totalPages}</span>
          <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>
            Suivant
          </button>
        </div>
      )}

      {/* DÉTAILS */}
      {selectedStudent && (
        <div className="details">
          <h2>Détails de l’étudiant</h2>
          <p><strong>ID :</strong> {selectedStudent.id}</p>
          <p>
            <strong>Nom :</strong> {selectedStudent.firstname}{" "}
            {selectedStudent.lastname}
          </p>

          <h3>Notes</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Matière</th>
                <th>Note</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {studentNotes.map(n => (
                <tr key={n.unique_id}>
                  <td>{n.course}</td>
                  <td>{n.grade}</td>
                  <td>{n.date}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <button
            className="close-btn"
            onClick={() => setSelectedStudent(null)}
          >
            Fermer
          </button>
        </div>
      )}
    </div>
  );
}

export default Etudiants;