import { useState } from "react";
import data from "../data.json";

function Notes() {
  const [page, setPage] = useState(1);
  const [order, setOrder] = useState("asc"); // asc | desc
  const itemsPerPage = 10;

  // 🔽 TRI
  const sortedData = [...data].sort((a, b) => {
    return order === "asc"
      ? a.grade - b.grade
      : b.grade - a.grade;
  });

  // PAGINATION
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const currentData = sortedData.slice(start, end);

  const totalPages = Math.ceil(sortedData.length / itemsPerPage);

  // 🔁 Changer ordre
  const toggleSort = () => {
    setOrder(order === "asc" ? "desc" : "asc");
    setPage(1);
  };

  return (
    <div className="page">
      <h1>Liste des notes</h1>

      <table className="table">
        <thead>
          <tr>
            <th>Étudiant</th>
            <th>Matière</th>

            {/* TRI */}
            <th onClick={toggleSort} className="sortable">
              Note {order === "asc" ? "▲" : "▼"}
            </th>

            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item) => (
            <tr key={item.unique_id}>
              <td>
                {item.student.firstname} {item.student.lastname}
              </td>
              <td>{item.course}</td>
              <td>{item.grade}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* PAGINATION */}
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

export default Notes;