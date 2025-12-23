import { useState } from "react";
import data from "../data.json";

function Matieres() {
  const matieres = [...new Set(data.map(d => d.course))];

  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  const start = (page - 1) * itemsPerPage;
  const current = matieres.slice(start, start + itemsPerPage);
  const totalPages = Math.ceil(matieres.length / itemsPerPage);

  return (
    <div className="page">
      <h1>Liste des matières</h1>

      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Matière</th>
          </tr>
        </thead>
        <tbody>
          {current.map((m, i) => (
            <tr key={i}>
              <td>{start + i + 1}</td>
              <td>{m}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Précédent
        </button>
        <span>Page {page} / {totalPages}</span>
        <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>
          Suivant
        </button>
      </div>
    </div>
  );
}

export default Matieres;