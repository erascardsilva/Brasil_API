const express = require('express');
const router = express.Router();
const feriadBusca = require('../dadaapi/feriadados');

router.get('/:ano', async (req, res) => {
  const anoBusca = req.params.ano;
  try {
    const data = await feriadBusca(anoBusca);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar dados de feriados' });
  }
});

module.exports = router;

