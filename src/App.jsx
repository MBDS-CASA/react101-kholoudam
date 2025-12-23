import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import MainContent from "./components/MainContent";
import Notes from "./components/Notes";
import Etudiants from "./components/Etudiants";
import Matieres from "./components/Matieres";

function App() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    switch (page) {
      case "notes":
        return <Notes />;
      case "etudiants":
        return <Etudiants />;
      case "matieres":
        return <Matieres />;
      default:
        return <MainContent />;
    }
  };

  return (
    <div className="app">
      {/* SIDEBAR */}
      <Menu page={page} setPage={setPage} />

      {/* ZONE DROITE */}
      <div className="content">
        <Header />          {/* ← DÉBUTE APRÈS LA NAVBAR */}
        {renderPage()}
        <Footer />
      </div>
    </div>
  );
}

export default App;