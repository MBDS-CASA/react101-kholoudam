import { useState } from "react";
import Menu from "./components/Menu";
import Content from "./components/Content";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [activeMenu, setActiveMenu] = useState("Notes");

  return (
    <>
      <Menu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <Header />
      <Content activeMenu={activeMenu} />
      <Footer />
    </>
  );
}

export default App;