import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Tarefa } from 'src/app/models/tarefa.model';

@Component({
  selector: 'app-listarnaoconcluidas',
  templateUrl: './listarnaoconcluidas.component.html',
  styleUrls: ['./listarnaoconcluidas.component.css']
})
export class ListarnaoconcluidasComponent {
  tarefas: Tarefa[] = [];

  constructor(private client: HttpClient) {}

  ngOnInit(): void {
    this.client
      .get<Tarefa[]>("https://localhost:7015/api/tarefa/naoconcluidas")
      .subscribe({
        next: (tarefas) => {
          this.tarefas = tarefas;
          console.table(tarefas);
        },
        error: (erro) => {
          console.log(erro);
        },
      });
  }
}
