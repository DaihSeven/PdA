import LivroModel from '../models/livros.js';

export class LivrosController {
    constructor() {
        this.livroModel = new Livro();
};

getLivros(req, res) {
    const livros = this.livroModel.getLivros();
    res.json(livros);
}

}