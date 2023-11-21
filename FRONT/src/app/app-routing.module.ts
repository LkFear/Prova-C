import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarTarefasComponent } from './pages/tarefa/listar-tarefas/listar-tarefas.component';
import { CadastrarTarefaComponent } from './pages/tarefa/cadastrar-tarefa/cadastrar-tarefa.component';
import { AlterarTarefaComponent } from './pages/tarefa/alterar-tarefa/alterar-tarefa.component';
import { ListarTarefasConcluidasComponent } from './pages/tarefa/listar-tarefas-concluidas/listar-tarefas-concluidas.component';
import { ListarnaoconcluidasComponent } from './pages/tarefa/listarnaoconcluidas/listarnaoconcluidas.component';

const routes: Routes = [
  {
    path: "",
    component: ListarTarefasComponent
  },
  {
    path: "pages/tarefa/listar-tarefas",
    component: ListarTarefasComponent
  },
  {
    path: "pages/tarefa/cadastrar-tarefa",
    component: CadastrarTarefaComponent
  },
  {
    path: "pages/tarefa/alterar-tarefa",
    component: AlterarTarefaComponent
  },
  {
    path: "pages/tarefa/listar-tarefas-concluidas",
    component: ListarTarefasConcluidasComponent
  },
  {
    path: "pages/tarefa/listarnaoconcluidas",
    component: ListarnaoconcluidasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
