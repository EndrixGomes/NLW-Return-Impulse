"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(routes_1.routes);
//GET = Buscar infos do backend
//POST = Cadastar infos
//PUT = Atualizar infos de uma entidade
//PATCH = Atualizar info única de uma entidade
//DELETE = Deletar uma info
app.listen(3333, () => {
    console.log('HTTP server running!');
});
