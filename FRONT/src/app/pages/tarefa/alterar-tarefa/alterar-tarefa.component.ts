import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Tarefa } from 'src/app/models/tarefa.model';

@Component({
  selector: 'app-alterar-tarefa',
  templateUrl: './alterar-tarefa.component.html',
  styleUrls: ['./alterar-tarefa.component.css']
})
export class AlterarTarefaComponent {
  tarefaId: number = 0;
  tarefas: Tarefa[] = [];

  constructor(private client: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.client.get<Tarefa[]>("https://localhost:7015/api/tarefa/listar")
    .subscribe({
      next: (tarefas) => {
        this.tarefas = tarefas
      }, 
      error: (erro) => {
        console.log(erro);
      }
    })
  }

  alterarStatus(): void {
    let tarefa: Tarefa = {
      titulo: '',
      descricao: '',
      status: 'Não iniciada',
      categoriaId: 0,
    };
    
    this.client.patch("https://localhost:7015/api/tarefa/alterar/{id}", tarefa.tarefaId).subscribe({
      next: (tarefa) => {
        this.router.navigate(["pages/tarefa/listar-tarefas"])
      },
      error: (erro) => {
        console.log(erro);
      },
    })
  }
}
