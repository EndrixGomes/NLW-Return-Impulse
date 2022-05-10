import express from 'express'
import cors from 'cors'
import { routes } from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);



//GET = Buscar infos do backend
//POST = Cadastar infos
//PUT = Atualizar infos de uma entidade
//PATCH = Atualizar info única de uma entidade
//DELETE = Deletar uma info



app.listen(process.env.PORT || 3333, () => {
    console.log('HTTP server running!')
});