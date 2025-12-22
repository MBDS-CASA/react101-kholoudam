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

function Content() {
  return (
    <main>
      <p>
        <strong>
          <em>
            Ici, nous afficherons des informations intéressantes
          </em>
        </strong>
      </p>
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer">
      © Tous les droits sont réservés – ALLAM Kholoud
    </footer>
  );
}

function App() {
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
}

export default App;