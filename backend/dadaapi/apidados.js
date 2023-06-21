const axios = require('axios');

let bankbusca = "001";

const bancob = async () => {
    try {
        const response = await axios.get(`https://brasilapi.com.br/api/banks/v1/${bankbusca}`);
        return [response.data];
    } catch (error) {
        console.error(error);
        throw error;
    }
};

module.exports = bancob;

