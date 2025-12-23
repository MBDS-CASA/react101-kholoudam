import data from "../data.json";

function Matieres() {
  return (
    <div className="card-container">
      {data.matieres.map((m) => (
        <div className="card" key={m.id}>
          <h3>{m.libelle}</h3>

          {data.notes
            .filter(n => n.matiereId === m.id)
            .map(n => {
              const etudiant = data.etudiants.find(e => e.id === n.etudiantId);
              return (
                <p key={n.id}>
                  {etudiant.nom} : {n.note}
                </p>
              );
            })}
        </div>
      ))}
    </div>
  );
}

export default Matieres;