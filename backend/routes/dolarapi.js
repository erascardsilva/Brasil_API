const express = require('express');
const router = express.Router();

const dolarData = require('../dadaapi/dolardata');

router.post('/', async (req, res) => {
    const  dolarinfo  = req.body;
    try {
        const data = await dolarData(dolarinfo);
        console.log(data);
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao Buscar dados" });
    }
});

module.exports = router;