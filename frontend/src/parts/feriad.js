import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

function FeriaStart() {
  const [formData, setFormData] = useState('');
  const [connectionStatus, setConnectionStatus] = useState('');
  const [feriadData, setFeriadData] = useState([]);

  const fetchFeriadData = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:9000/backend/buscaferiado/${formData}`);
      console.log(response.data);
      setFeriadData(response.data);
      setConnectionStatus('Conexão efetuada com sucesso!');
    } catch (error) {
      console.error('Erro ao buscar dados', error);
      setConnectionStatus('Erro ao buscar dados no Banco');
    }
  }, [formData]);

  useEffect(() => {
    fetchFeriadData();
  }, [fetchFeriadData]);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchFeriadData();
  };

  function FeriadB({ feriadData }) {
    return (
      <div>
        <ul>
          {feriadData.map((feriado, index) => (
            <li key={index}>
              <center>
                <h3>Data: {feriado.date}</h3>
                <h3>Nome: {feriado.name}</h3>
                <h3>Tipo: {feriado.type}</h3>
              </center>
              <hr />
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div>
      <center>
        <h3>Brasil API consultas</h3>
      </center>
      <p id="connection-status">{connectionStatus}</p>
      <center>
        <h4>Digite o ano</h4>
      </center>
      <center>
        <form onSubmit={handleSubmit} id="busca">
          <input
            type="text"
            value={formData}
            onChange={(e) => setFormData(e.target.value)}
            placeholder="Digite o ano com 4 dígitos"
          />
          <center>
            <h4>Buscar feriados</h4>
          </center>
        </form>
      </center>
      {feriadData.length > 0 ? (
        <FeriadB feriadData={feriadData} />
      ) : (
        <p>Nenhum feriado encontrado</p>
      )}
    </div>
  );
}

export default FeriaStart;
