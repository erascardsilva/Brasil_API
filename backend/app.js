const express = require ("express")
const app = express()
const port = 9000
const cors = require('cors');
const bankb = require ('./dadaapi/apidados');

app.use(cors());


app.get('/backend/banco', async (req, res) => {
  try {
    const data = await bankb();
    console.log(data); 
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao obter dados do banco' });
  }
});

app.listen(port , () => {
    console.log("Conectado porta : ", port)
} )
