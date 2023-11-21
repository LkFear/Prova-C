import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tarefa } from 'src/app/models/tarefa.model';


@Component({
  selector: 'app-listar-tarefas',
  templateUrl: './listar-tarefas.component.html',
  styleUrls: ['./listar-tarefas.component.css']
})
export class ListarTarefasComponent {

  tarefas: Tarefa[] = [];

  constructor(private client: HttpClient){

  }

  ngOnInit() : void{
    this.client.get<Tarefa[]>("https://localhost:7015/api/tarefa/listar")
    .subscribe({
      next: (tarefas) => {
        this.tarefas = tarefas
        console.table(tarefas);
      }, 
      error: (erro) => {
        console.log(erro);
      }
    })
  }
}
