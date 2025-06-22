import Alkopoly from "./alkopoly";
import Ano from "./ano";
import Button from "./common/components/Button";
import { Route, Routes, useNavigate } from "react-router-dom";

function App() {
  return (
    <main className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ano" element={<Ano />} />
        <Route path="/alkopoly" element={<Alkopoly />} />
      </Routes>
    </main>
  );
}

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="header">Witaj w ANO & Alkopoly</h1>
      <div className="home__btn-container">
        <Button onClick={() => navigate("/alkopoly")}>Zagraj w Alkopoly</Button>
        <Button onClick={() => navigate("/ano")}>Zagraj w ANO</Button>
      </div>
    </>
  );
};

export default App;
