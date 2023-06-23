import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [connectionStatus, setConnectionStatus] = useState('');
  const [formData, setFormData] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:9000/backend/bancoapi", { name: formData });
      console.log(response.data);
      setData(response.data);
      setConnectionStatus('Conectado com sucesso!');
    } catch (error) {
      console.error('Erro ao conectar no Backend', error);
      setConnectionStatus('Erro ao buscar dados no banco');
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:9000/backend/banco");
        //setData(response.data);
        setConnectionStatus('Conectado com sucesso!');
      } catch (error) {
        console.error('Erro ao buscar dados no banco', error);
        setConnectionStatus(' Codigo errado tente novamente', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <div id="item-0">
        <div class="logo-container">
          <img width="160" src="./images/apilogo.png" alt="Logo" />
          
        </div>
        <div class="button-container">
          <button className="custom-button">Bancos</button>
          <button className="custom-button">Nomes</button>
          <button className="custom-button">Endereços</button>
          <button className="custom-button">Dolar</button>
        </div>
      </div>


      <div id="item-1">
        <center><h3>Brasil API consultas</h3></center> <hr />
        <center><h4>Digite o codigo bancario</h4></center>
        <center>
          <form onSubmit={handleSubmit} id="busca">
            <input
              type="text"
              value={formData}
              onChange={(e) => setFormData(e.target.value)}
              placeholder="Digite o nome"
            />
            <center> <button type="submit">Buscar Banco</button> </center>
          </form>
        </center>
        <hr />

        <p id="connection-status">{connectionStatus}</p>
      </div>

      <div id="item-2">
        <div className="App">
          <header className="App-header">
            <ul>
              {data.map((bank) => (
                <React.Fragment key={bank.id}>
                  <h3>Número: {bank.code}</h3>
                  <h3>ISPB: {bank.ispb}</h3>
                  <hr />
                  <h3>Nome do Banco:</h3>
                  <h3>{bank.name}</h3>
                  <hr />
                  <h3>{bank.fullName}</h3>
                  <hr />
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
