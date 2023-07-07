const express = require('express');
const router = express.Router();

const { bankbusca } = require('../dadaapi/apidados');

router.post('/', async (req, res) => {
    const { name } = req.body; 
    
    try {
      const data = await bankbusca(name);
      console.log(data);
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao buscar dados no banco' });
    }
  });

  module.exports = router;