const axios = require('axios');

const dolarData = async () => {
    try {
        const response = await axios.get('https://economia.awesomeapi.com.br/last/USD-BRL');
        return [response.data];
    } catch (error) {
        console.error(error);
        throw error;
    }

};

module.exports = dolarData;


