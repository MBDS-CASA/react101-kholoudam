import data from "../data.json";

function Etudiants() {
  return (
    <div className="card-container">
      {data.etudiants.map((e) => (
        <div className="card" key={e.id}>
          <h3>{e.nom}</h3>

          {data.notes
            .filter(n => n.etudiantId === e.id)
            .map(n => {
              const matiere = data.matieres.find(m => m.id === n.matiereId);
              return (
                <p key={n.id}>
                  {matiere.libelle} : {n.note}
                </p>
              );
            })}
        </div>
      ))}
    </div>
  );
}

export default Etudiants;