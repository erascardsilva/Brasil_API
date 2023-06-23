const axios = require('axios');

const bankbusca = async (nome) => {
    try {
        const response = await axios.get(`https://brasilapi.com.br/api/banks/v1/${nome}`);
        return [response.data];
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const bancob = async () => {
    try {
        const response = await axios.get(`https://brasilapi.com.br/api/banks/v1/1`);
        return [response.data];
    } catch (error) {
        console.error(error);
        throw error;
    }
};

module.exports = {bancob , bankbusca};

