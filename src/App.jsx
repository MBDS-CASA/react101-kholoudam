import Header from './components/Header'
import MainContent from './components/MainContent'
import Menu from './components/Menu'
import Note from './components/Note'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <MainContent />
      <Menu />
      <Note
        matiere="React JS"
        etudiant="ALLAM Kholoud"
        note={18}
      />

      <Footer />
    </>
  )
}

export default App