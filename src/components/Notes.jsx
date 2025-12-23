import data from "../data.json";

function Notes() {
  return (
    <div className="card-container">
      {data.notes.map((n) => {
        const etudiant = data.etudiants.find(e => e.id === n.etudiantId);
        const matiere = data.matieres.find(m => m.id === n.matiereId);

        return (
          <div className="card" key={n.id}>
            <p><strong>Étudiant :</strong> {etudiant.nom}</p>
            <p><strong>Matière :</strong> {matiere.libelle}</p>
            <p><strong>Note :</strong> {n.note}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Notes;