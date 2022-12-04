import "./App.css";
import { useState } from "react";
import SobreMi from "./pages/SobreMi";
import Portafolio from "./pages/Portafolio";
import Contacto from "./pages/Contacto";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Inicio from "./pages/Inicio";

function App() {
  const [token, setToken] = useState(null);
  const [logged, setLogged] = useState(false);
  const [dataToken, setDataToken] = useState(null);
  const [checked, setChecked] = useState(false);
  const baseUrl = "https://ms-discord-upy5mhs63a-rj.a.run.app";

  return (
    <div className="App">
      {logged ? (
        <Routes>
          <Route
            path="*"
            element={
              <Inicio
                token={token}
                setToken={setToken}
                dataToken={dataToken}
                setDataToken={setDataToken}
                checked={checked}
                setChecked={setChecked}
                baseUrl={baseUrl}
              />
            }
          ></Route>
          <Route path="/sobre-mi" element={<SobreMi />}></Route>
          <Route path="/portafolio" element={<Portafolio />}></Route>
          <Route path="/contacto" element={<Contacto />}></Route>
        </Routes>
      ) : (
        <Login
          token={token}
          setToken={setToken}
          logged={logged}
          setLogged={setLogged}
          baseUrl={baseUrl}
        />
      )}
    </div>
  );
}

export default App;
