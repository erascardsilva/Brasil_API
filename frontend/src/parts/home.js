
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function HomeStart() {
  const [connectionStatus, setConnectionStatus] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:9000/backend/banco");
        setConnectionStatus('Conectado com sucesso!');
        console.log(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados no banco', error);
        setConnectionStatus('Erro ao buscar dados no banco');
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <center>
        <h3>Brasil API consultas</h3>
      </center>
      <hr />
      <center>
        <h4>Bem-vindo à página inicial</h4>
      </center>
      <p id="connection-status">{connectionStatus}</p>
    </>
  );
}

export default HomeStart;
