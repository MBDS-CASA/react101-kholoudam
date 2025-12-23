function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      © {year} - Kholoud Allam, Tous droits réservés.
    </footer>
  );
}

export default Footer;