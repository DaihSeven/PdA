import express from 'express';
import { LivroController } from '../controllers/LivroController.js';

const router = express.Router();
const livroController = new LivroController();

//3 rotas get
router.get('./', (req, res) => livroController.getLivros(req, res));
router.get('./id', (req, res) => livroController.getLivrosPorID(req, res));
router.get('./autor', (req, res) => livroController.getLivrosPorAutor(req, res));

export default router;