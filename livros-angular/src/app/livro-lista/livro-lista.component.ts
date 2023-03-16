import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Editora} from '../editora'
import {Livro} from '../livro'
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css']
})
export class LivroListaComponent implements OnInit{
  public editoras: Array<Editora> = [];
  public livros: Array<Livro> = [];

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService,
    private router: Router
    ) { }
  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
    this.livros = this.servLivros.obterlivros();
  }
  
  excluir = (codigo : number) : void => {
    this.servLivros.excluir(codigo)
    this.livros = this.servLivros.obterlivros()
  }
  
  obternome = (codeditora : number) : string => {
    return this.servEditora.getNomeEditora(codeditora)
  }
}
