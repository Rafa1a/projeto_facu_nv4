import { Injectable } from '@angular/core';
import { Livro } from './livro';
@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  livros : Livro[] = [
    { codigo: 1, codEditora: 1, titulo: 'Livro 1', resumo: 'Resumo do livro 1', autores: ['Autor 1', 'Autor 2']},
    { codigo: 2, codEditora: 2, titulo: 'Livro 2', resumo: 'Resumo do livro 2', autores: ['Autor 3', 'Autor 4']},
    { codigo: 3, codEditora: 3, titulo: 'Livro 3', resumo: 'Resumo do livro 3', autores: ['Autor 5', 'Autor 6']}
  ]
  constructor() { }

  obterlivros() : Livro[]{
    return this.livros
  }

  incluir (livro: Livro) : void{
    const novocodigo = this.livros.reduce((codigoatual, livro) => {
      return livro.codigo > codigoatual? livro.codigo : codigoatual
    }, 0) + 1
    livro.codigo = novocodigo
    this.livros.push(livro)
  }

  excluir(codigo:number):void {
    const indice = this.livros.findIndex(livro => livro.codigo === codigo)

    if (indice !== -1){
      this.livros.splice(indice, 1)
    }
  }

}
