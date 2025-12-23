import Notes from "./Notes";
import Etudiants from "./Etudiants";
import Matieres from "./Matieres";
import Apropos from "./Apropos";

function Content({ activeMenu }) {
  switch (activeMenu) {
    case "Notes":
      return <Notes />;
    case "Etudiants":
      return <Etudiants />;
    case "Matieres":
      return <Matieres />;
    case "A propos":
      return <Apropos />;
    default:
      return <p>Sélectionnez un menu</p>;
  }
}

export default Content;