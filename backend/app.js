const express = require ("express")
const app = express()
const port = 9000

app.get('/backend/conectfront', (req, res) => {
    
    const data = [
      { id: 1, name: 'Usuário 1' },
      { id: 2, name: 'Usuário 2' },
      { id: 3, name: 'Usuário 3' },
    ];
  
    res.json(data);
  });

app.listen(port , () => {
    console.log("Conectado porta 9000")
} )
