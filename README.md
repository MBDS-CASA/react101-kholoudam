# 📘 Projet React – Gestion des listes dynamiques

Ce projet est réalisé dans le cadre des travaux dirigés (TD) du module **Introduction à React**.  
Il a pour objectif de découvrir et pratiquer les bases de React à travers la création de composants, la gestion des états, des événements et des listes dynamiques.

---

## 🎯 Objectifs pédagogiques

- Créer et structurer une application React
- Comprendre les composants React et les props
- Gérer l’état (state) et les événements
- Manipuler des listes de données (tableaux)
- Afficher dynamiquement du contenu à partir d’un fichier `data.json`
- Mettre en place un menu dynamique avec contenu associé

---

## 🛠️ Technologies utilisées

- **React JS** (avec Vite / Create React App)
- **JavaScript (ES6+)**
- **CSS**
- **Git & GitHub**

---

## 📁 Structure du projet

src/
├─ components/
│ ├─ Header.jsx
│ ├─ Menu.jsx
│ ├─ Content.jsx
│ ├─ Notes.jsx
│ ├─ Etudiants.jsx
│ ├─ Matieres.jsx
│ └─ Footer.jsx
├─ data.json
├─ App.jsx
├─ main.jsx
└─ index.css

markdown
Copier le code

---

## 📊 Données (`data.json`)

Les données sont stockées dans un fichier `data.json` sous forme de tableaux :

- **Étudiants**
- **Matières**
- **Notes**

Chaque note est liée à :
- un étudiant (`etudiantId`)
- une matière (`matiereId`)

Cela permet de gérer des relations simples entre les entités.

---

## 📌 Fonctionnalités réalisées

### 🔹 TD01 – Composants React
- Création des composants :
  - `Header`
  - `MainContent`
  - `Footer`
- Structuration de la page principale

### 🔹 TD02 – Contenu dynamique
- Affichage dynamique de la date et de l’heure
- Mise à jour automatique de l’heure
- Année dynamique dans le footer

### 🔹 TD03 – Utilisation des props et des données
- Lecture des données depuis `data.json`
- Sélection aléatoire d’un élément
- Affichage dynamique via un composant dédié

### 🔹 TD04 – Gestion des événements
- Création d’un menu dynamique
- Utilisation d’une liste pour éviter la répétition de code
- Gestion de l’élément actif
- Affichage du contenu selon le menu sélectionné

### 🔹 Session 02 – Gestion des listes dynamiques
- Menu dynamique avec contenu associé
- Composants :
  - **Notes** : affichage des notes par étudiant et matière
  - **Etudiants** : affichage des étudiants et leurs notes
  - **Matieres** : affichage des matières et des notes associées
- Données affichées sous forme de cartes (listes dynamiques)
