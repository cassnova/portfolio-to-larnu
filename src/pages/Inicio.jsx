import React from "react";
import axios from "axios";
import { useEffect } from "react";

const Inicio = ({
  dataToken,
  setDataToken,
  checked,
  setChecked,
  baseUrl,
  token,
}) => {
  async function checkToken() {
    axios
      .get(`${baseUrl}/auth/check`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setDataToken(res.data);
        setChecked(true);
        console.log(res);
      });
  }

  useEffect(() => {
    checkToken();
  });

  return (
    <div>
      {checked ? <h1>Welcome {dataToken.username}</h1> : <p>Cargando...</p>}
    </div>
  );
};

export default Inicio;
