import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [connectionStatus, setConnectionStatus] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:9000/backend/banco");
        setData(response.data);
        setConnectionStatus('Conectado com sucesso!');
      } catch (error) {
        console.error('Erro ao conectar no Backend', error);
        setConnectionStatus('Erro ao conectar no Backend');
      }
    };

    fetchData();
  }, []);

  return (
<div class="App">
  <div id="item-0">
  <h1>Lista de Consultas..  TESTES</h1>
  </div>
  <div id="item-1">
  <center><h4>Menu de consultas</h4></center> <hr />
        <button> Bancos </button>
        <button> Nomes </button>
        <button> Endereços</button>
        <button> Dolar </button>
        <hr />
        <p id="connection-status">{connectionStatus}</p>
  </div>
  <div id="item-2">

  <div className="App">
      <header className="App-header">
          <ul>

          {data.map((bank) => (
            <React.Fragment key={bank.id}>
              <h3> Número :  {bank.code}</h3><hr />
              <h3> Nome do Banco :  </h3>
              <h3> {bank.name}</h3>
              <h3> {bank.fullName}</h3><hr />

            </React.Fragment>
          ))}
        </ul>
        
      </header>
    </div>
  </div>
  
</div>

  );
}

export default App;
