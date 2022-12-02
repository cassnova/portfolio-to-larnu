import "./App.css";
import { useState } from "react";
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
      <div className="App">
        {logged ? (
          <Inicio
            token={token}
            setToken={setToken}
            dataToken={dataToken}
            setDataToken={setDataToken}
            checked={checked}
            setChecked={setChecked}
            baseUrl={baseUrl}
          />
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
    </div>
  );
}

export default App;
