import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';

function BitcoinStart() {
    const [connectionStatus, setConnectionStatus] = useState('');
    const [bitcoinData, setBitcoinData] = useState(null);

    useEffect(() => {
        fetchBitcoinData();
    }, []);

    const fetchBitcoinData = async () => {
        try {
            const response = await axios.post('http://localhost:9000/backend/bitcoin');
            const data = response.data[0].data;
            setBitcoinData(data);
            setConnectionStatus('Conectado com sucesso!');
        } catch (error) {
            console.error('Erro ao conectar à API', error);
            setConnectionStatus('Erro ao buscar dados na API');
        }
    };



    return (
        <div>
            <h3 className="center">Brasil API consultas</h3>
            <p id="connection-status">{connectionStatus}</p>
            <hr />
            <BitcoinDetails bitcoinData={bitcoinData} />
        </div>
    );
}

function BitcoinDetails({ bitcoinData }) {
    if (!bitcoinData) {
        return <p>Nenhum dado de Bitcoin disponível</p>;
    }
    const formattedPrice = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'USD'
    }).format(parseFloat(bitcoinData.priceUsd));

    const formattedVar24 = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'USD'
    }).format(parseFloat(bitcoinData.changePercent24Hr));


    return (
        <div>
            <ul>
                <li key={bitcoinData.id}>
                    <center>
                        <h3>Nome: {bitcoinData.name} </h3>
                        <h3>ID: {bitcoinData.id}</h3>
                        <hr />
                        <h3>Preço</h3>
                        <h3>{formattedPrice}</h3>
                        <h3>Variação em 24HRS</h3>
                        <h3>{formattedVar24}</h3>
                        <hr />
                        <h3>Rank</h3>
                        <h3>{bitcoinData.rank}</h3>
                        <h3>Fonte</h3>
                        <h3><a href="https://www.blockchain.com/explorer">{bitcoinData.explorer}</a></h3>

                    </center>
                </li>
            </ul>
        </div>
    );
}

export default BitcoinStart;
