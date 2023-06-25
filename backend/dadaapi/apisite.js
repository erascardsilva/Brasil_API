const axios = require('axios');

const siteBusca = async (nomesite) => {
    try {
        const response = await axios.get(`https://brasilapi.com.br/api/registrobr/v1/${nomesite}`);
        return [response.data];
    } catch (error) {
        console.error(error);
        throw error;
    }
};
module.exports =  siteBusca ;