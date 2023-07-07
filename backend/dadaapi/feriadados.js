const axios = require('axios');

const feriadBusca = async (anoBusca) => {
    try {
        const url = `https://brasilapi.com.br/api/feriados/v1/${anoBusca}`;
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

module.exports = feriadBusca;
