const axios = require('axios');

const bitData = async() => {
    try {
        const response = await axios.get('https://api.coincap.io/v2/assets/bitcoin');
        return [response.data];
    } catch (error){
        console.error(error);
        throw error;
    }
};

module.exports = bitData;