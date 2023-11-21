import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria.model';
import { Tarefa } from 'src/app/models/tarefa.model';

@Component({
  selector: 'app-cadastrar-tarefa',
  templateUrl: './cadastrar-tarefa.component.html',
  styleUrls: ['./cadastrar-tarefa.component.css']
})
export class CadastrarTarefaComponent {
  titulo: string = "";
  descricao: string = "";
  categoriaId: number = 0;
  categorias: Categoria[] = [];

  constructor(private client: HttpClient, private router: Router) {}


  ngOnInit(): void {
    this.client.get<Categoria[]>("https://localhost:7015/api/categoria/listar")
    .subscribe({
      next: (categorias) => {
        this.categorias = categorias
      }, 
      error: (erro) => {
        console.log(erro);
      }
    })
  }

  cadastrar(): void {
    let tarefa: Tarefa = {
      titulo: this.titulo,
      descricao: this.descricao,
      categoriaId: this.categoriaId,
      status: 'Não iniciada',
    };

    this.client.post<Tarefa>("https://localhost:7015/api/tarefa/cadastrar", tarefa).subscribe({
      next: (tarefa) => {
        this.router.navigate(["pages/tarefa/listar-tarefas"])
      },
      error: (erro) => {
        console.log(erro);
      },
    })
  }
}
