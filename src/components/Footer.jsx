function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      © {year} - ALLAM Kholoud, Tous droits réservés.
    </footer>
  );
}

export default Footer;