import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

function BankStart() {
  const [formData, setFormData] = useState('');
  const [connectionStatus, setConnectionStatus] = useState('');
  const [bankData, setBankData] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:9000/backend/bancoapi", { name: formData });
      console.log(response.data);
      setBankData(response.data);
      setConnectionStatus('Conectado com sucesso!');
    } catch (error) {
      console.error('Erro ao conectar no Backend', error);
      setConnectionStatus('Erro ao buscar dados no banco');
    }
  };

  return (
    <div>
      <center>
        <h3>Brasil API consultas</h3>
      </center>
      <p id="connection-status">{connectionStatus}</p>
      <center>
        <h4>Digite o código bancário</h4>
      </center>
      <center>
        <form onSubmit={handleSubmit} id="busca">
          <input
            type="text"
            value={formData}
            onChange={(e) => setFormData(e.target.value)}
            placeholder="Digite o código"
          />
          <center>
            <button type="submit">Buscar Banco</button>
          </center>
        </form>
      </center>
      <hr />
      <DashB bankData={bankData} connectionStatus={connectionStatus} />
    </div>
  );
}

function DashB({ bankData, connectionStatus }) {
  return (
    <div>

      <ul>
        {bankData.map((bank) => (
          <li key={bank.id} >
            <center><h3>Número: {bank.code}  |  ISPB: {bank.ispb}</h3></center>
            <hr />
            <center><h3>Nome do Banco:  {bank.name}</h3></center>
            <hr />
            <center><h3>Nome completo do Banco </h3></center>
            <center><h3>{bank.fullName}</h3></center>
            <hr />
          </li>
        ))}
      </ul>

    </div>
  );
}

export { DashB };
export default BankStart;
