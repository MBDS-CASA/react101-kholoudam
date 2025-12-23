import data from "../data.json";
import { useState } from "react";

function Note() {

  // 1️⃣ Fonction qui retourne un élément aléatoire
  const getRandomItem = () => {
    const index = Math.floor(Math.random() * data.length);
    return data[index];
  };

  // 2️⃣ État pour stocker l'élément affiché
  const [item, setItem] = useState(getRandomItem());

  return (
    <div className="note">
      <h3>{item.titre}</h3>
      <p><strong>Note :</strong> {item.note}</p>
      <p>{item.commentaire}</p>

      {/* Bouton pour re-trier */}
      <button onClick={() => setItem(getRandomItem())}>
        Changer la note
      </button>
    </div>
  );
}

export default Note;