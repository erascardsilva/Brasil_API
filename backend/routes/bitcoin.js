const express = require('express');
const router = express.Router();

const  bitData  = require('../dadaapi/bitcoindata');


router.post('/', async(req, res) => {
    const { bitcoinf } = req.body;
    try{
        const data = await bitData(bitcoinf);
        console.log(data);
        res.json(data);
    }catch (error){
        console.error(error);
        res.status(500).json({ error: "Erro ao buscar dados"});
    }
});

module.exports = router;