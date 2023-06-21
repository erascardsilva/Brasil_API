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
    <div className="App">
      <header className="App-header">
        <h1>Lista de Consultas..  TESTES</h1>
        
        <ul>

          {data.map((user) => (
            <React.Fragment key={user.id}>
              <li>{user.code}</li>
              <li>{user.name}</li>
              <li>{user.fullName}</li>
              
            </React.Fragment>
          ))}
        </ul>
        <p>{connectionStatus}</p>
      </header>
    </div>
  );
}

export default App;
