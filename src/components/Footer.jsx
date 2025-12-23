function Footer() {
  const annee = new Date().getFullYear()

  return (
    <footer className="footer">
      © {annee} - ALLAM Kholoud, Tous droits réservés.
    </footer>
  )
}

export default Footer