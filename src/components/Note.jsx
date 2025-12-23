function Note({ matiere, note, etudiant }) {
  return (
    <div className="note">
      <h3>Matière : {matiere}</h3>
      <p>Étudiant : {etudiant}</p>
      <p>Note : {note}</p>
    </div>
  )
}

export default Note