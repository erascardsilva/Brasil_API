const express = require ("express")
const app = express()
const port = 9005
const cors = require('cors');

app.use(cors());
app.get('/backend/list', (req, res) => {
    
    const data = [
      { id: 1, name: 'Erasmo Cardoso' },
      { id: 2, name: 'Jamile Raquel' },
      { id: 3, name: 'Isabelli do Vale Silva' },
      { id: 4, name: 'Alice do Vale Silva' },
    ];
  
    res.json(data);
  });

app.listen(port , () => {
    console.log("Conectado porta : ", port)
} )
module.exports = app;