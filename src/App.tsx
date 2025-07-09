import { useEffect } from "react";
import Alkopoly from "./alkopoly";
import Ano from "./ano";
import Button from "./common/components/Button";
import { Route, Routes, useNavigate } from "react-router-dom";
import socket from "./common/sockets";

function App() {
  useEffect(() => {
    const onConnect = () => console.log("🎉 Socket is working!");
    socket.on("connect", onConnect);

    return () => {
      socket.off("connect", onConnect); // odpinamy listener, ale NIE rozłączamy socketu!
    };
  }, []);

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
