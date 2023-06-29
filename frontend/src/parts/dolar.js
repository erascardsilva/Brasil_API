import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DolarStart() {
  const [connectionStatus, setConnectionStatus] = useState('');
  const [dolarData, setDolarData] = useState(null);

  useEffect(() => {
    fetchDolarData();
  }, []);

  const fetchDolarData = async () => {
    try {
      const response = await axios.post('http://localhost:9000/backend/dolar');
      const data = response.data[0].USDBRL;
      setDolarData(data);
      setConnectionStatus('Conectado com Sucesso no backend');
    } catch (error) {
      console.error('Erro ao conectar no Backend', error);
      setConnectionStatus('Erro ao conectar na API');
    }
  };

  return (
    <div>
      <center>
        <h3>Brasil API consultas</h3>
      </center>
      <p id="connection-status">{connectionStatus}</p>

      <ul>
        <li>
          <center>
            <h3>Nome: {dolarData ? dolarData.name : 'Carregando...'}</h3>
            <h3>Codigo : {dolarData ? dolarData.code : 'Carregando...'}</h3>
            <hr />
            <h3>Valor Converção Real 1 dolar</h3>
            <h3> R$ :{dolarData ? dolarData.ask : 'Carregando...'}</h3>
            <h3>Variação compra</h3>
            <h3> R$ :  {dolarData ? dolarData.varBid : 'Carregando...'}</h3>
            <hr />
            <h3>Data da info</h3>
            <h3>{dolarData ? dolarData.create_date : 'Carregando...'}</h3>
          </center>
        </li>
      </ul>
    </div>
  );
}

export default DolarStart;
