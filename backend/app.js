/* BACKEND    
    App desenvolvido por
                       Erasmo Cardoso
                                Objetivo acessar dados de APIS externas */

const express = require("express");
const app = express();
const port = 9000;
const cors = require('cors');
const bancoApiRoutes = require('./routes/bancoapi');
const siteRoutes = require('./routes/sitedata');
const bitcoinRoutes = require('./routes/bitcoin');
const dolarRoutes = require('./routes/dolarapi');
const feriaRoutes = require('./routes/feriadapi');

app.use(cors());
app.use(express.json());
app.use('/backend/bancoapi', bancoApiRoutes);
app.use('/backend/sitebusca', siteRoutes);
app.use('/backend/bitcoin', bitcoinRoutes);
app.use('/backend/dolar', dolarRoutes);
app.use('/backend/buscaferiado', feriaRoutes);

app.listen(port, () => {
  console.log("Conectado na porta:", port);
});
