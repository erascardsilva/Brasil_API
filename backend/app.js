const express = require("express");
const app = express();
const port = 9000;
const cors = require('cors');
const bancoApiRoutes = require('./routes/bancoapi');
const siteRoutes = require('./routes/sitedata');
const bitcoinRoutes = require('./routes/bitcoin');
const dolarRoutes = require('./routes/dolarapi');

app.use(cors());
app.use(express.json()); 
app.use('/backend/bancoapi', bancoApiRoutes);
app.use('/backend/sitebusca', siteRoutes);
app.use('/backend/bitcoin' , bitcoinRoutes);
app.use('/backend/dolar' , dolarRoutes);

app.listen(port, () => {
  console.log("Conectado na porta:", port);
});
