import express from 'express';
import { router } from './routes/Routes';

// cria uma app express
const app = express();
//define o uso de json nas rotas
app.use(express.json())
//objeto das rotas
app.use(router)

// define o numero da porta de funcionamento da app
const port = 3000;

// inicia o servidor na porta especificada
app.listen(port, () => {
  // Log a message when the server is successfully running
  console.log(`Servidor rodando na porta: ${port}`);
});