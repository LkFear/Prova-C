import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { ListarTarefasComponent } from './pages/tarefa/listar-tarefas/listar-tarefas.component';
import { CadastrarTarefaComponent } from './pages/tarefa/cadastrar-tarefa/cadastrar-tarefa.component';
import { AlterarTarefaComponent } from './pages/tarefa/alterar-tarefa/alterar-tarefa.component';
import { ListarTarefasConcluidasComponent } from './pages/tarefa/listar-tarefas-concluidas/listar-tarefas-concluidas.component';
import { ListarnaoconcluidasComponent } from './pages/tarefa/listarnaoconcluidas/listarnaoconcluidas.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarTarefasComponent,
    CadastrarTarefaComponent,
    AlterarTarefaComponent,
    ListarTarefasConcluidasComponent,
    ListarnaoconcluidasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
