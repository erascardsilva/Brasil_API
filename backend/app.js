
const express = require("express");
const app = express();
const port = 9000;
const cors = require('cors');
const { bancob, bankbusca } = require('./dadaapi/apidados');

app.use(cors());
app.use(express.json()); 

app.get('/backend/banco', async (req, res) => {
  try {
    const data = await bancob();
    console.log(data);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao obter dados do banco' });
  }
});

app.post('/backend/bancoapi', async (req, res) => {
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

app.listen(port, () => {
  console.log("Conectado na porta:", port);
});
