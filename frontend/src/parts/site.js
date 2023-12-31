import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

function SiteBusca() {
  const [formData, setFormData] = useState('');
  const [connectionStatus, setConnectionStatus] = useState('');
  const [siteData, setSiteData] = useState([]);
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (/^\d+$/.test(formData)) {
      setError('Digite um site válido.');
      return;
    }

    try {
      const response = await axios.post("http://localhost:9000/backend/sitebusca", { name: formData });
      console.log(response.data);
      setSiteData(response.data);
      setConnectionStatus('Conectado com sucesso!');
      setError('');
    } catch (error) {
      console.error('Erro ao conectar no Backend', error);
      setConnectionStatus('Erro ao buscar dados no banco');
      setError('');
    }
  };

  return (
    <div>
      <center>
        <h3>Brasil API consultas</h3>
      </center>
      <p id="connection-status">{connectionStatus}</p>
      <center>
        <h4>Descubra dados do site</h4>
      </center>
      <center>
        <form onSubmit={handleSubmit} id="busca">
          <input
            type="text"
            value={formData}
            onChange={(e) => setFormData(e.target.value)}
            placeholder="Digite o site aqui"
          />
          <center>
            <button type="submit">Buscar Site</button>
          </center>
        </form>
        {error && <p id="error-message">{error}</p>}
      </center>
      <hr />
      <SiteMostra siteData={siteData} connectionStatus={connectionStatus} />
    </div>
  );
}

function SiteMostra({ siteData }) {
  return (
    <div>
      <ul>
        {siteData.map((site) => (
          <li key={site.id}>
            <center>
              <h3>Status: {site.status} | Nome: {site.fqdn}</h3>
            </center>
            <hr />
            <center>
              <h3>Data expiração</h3>
              <h3>{site['expires-at']}</h3>
            </center>
            <hr />
            <center>
              <h3>Hosts</h3>
              {site.hosts.map((host, index) => (
                <h4 key={index}>{host}</h4>
              ))}
            </center>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

export { SiteMostra };
export default SiteBusca;
