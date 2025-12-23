function MainContent() {
  const now = new Date()

  const jour = now.getDate()
  const mois = now.getMonth() + 1
  const annee = now.getFullYear()
  const heure = now.getHours()
  const minute = now.getMinutes()
  const seconde = now.getSeconds()

  return (
    <main>
      <p>
        Bonjour, on est le {jour}, {mois}, {annee} et il est {heure}:{minute}:{seconde}
      </p>
    </main>
  )
}

export default MainContent