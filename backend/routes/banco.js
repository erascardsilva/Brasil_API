const express = require('express');
const { bancob } = require('../dadaapi/apidados');
const router = express.Router();


router.get('/', async (req, res) => {
    try {
      const data = await bancob();
      console.log(data);
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao obter dados do banco' });
    }
  });

  module.exports = router;