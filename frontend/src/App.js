
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/backend/conectfront');
        setData(response.data);
      } catch (error) {
        console.error('Erro ao conectar no Backend', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Lista de Consultas..</h1>
        <ul>
          {data.map((user) => (
            <React.Fragment key={user.id}>
              <li>{user.name}</li>
            </React.Fragment>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
