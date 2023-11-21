import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { Tarefa } from "src/app/models/tarefa.model";

@Component({
  selector: "app-listar-tarefas-concluidas",
  templateUrl: "./listar-tarefas-concluidas.component.html",
  styleUrls: ["./listar-tarefas-concluidas.component.css"],
})
export class ListarTarefasConcluidasComponent {
  tarefas: Tarefa[] = [];

  constructor(private client: HttpClient) {}

  ngOnInit(): void {
    this.client
      .get<Tarefa[]>("https://localhost:7015/api/tarefa/concluidas")
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
