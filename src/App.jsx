import { useState } from 'react'
import Emsi from './assets/logo_emsi.png'
import UCA from './assets/LOGO_UCA.jpg'
import './App.css'

function Header() {
  return (
    <header>
      <div>
        <img src={Emsi} className="logo Emsi" alt="Emsi" />
        <img src={UCA} className="logo UCA" alt="UCA" />
      </div>
      <h1>Introduction à React</h1>
      <h4>A la découverte des premières notions de React</h4>
    </header>
  );
}

function MainContent() {
  const now = new Date();

  const jour = now.getDate();
  const mois = now.getMonth() + 1;
  const annee = now.getFullYear();
  const heure = now.getHours();
  const minute = now.getMinutes();
  const seconde = now.getSeconds();

  return (
    <main>
      <p>
        Bonjour, on est le {jour}, {mois}, {annee} et il est {heure}:{minute}:{seconde}
      </p>
    </main>
  );
}

function Footer() {
  const annee = new Date().getFullYear();

  return (
    <footer className="footer">
      © {annee} - ALLAM Kholoud, Tous droits réservés.
    </footer>
  );
}

function App() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;