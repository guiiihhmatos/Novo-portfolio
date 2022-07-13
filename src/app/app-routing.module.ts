import { ProjetosComponent } from './projetos/projetos.component';
import { EscolaridadeComponent } from './escolaridade/escolaridade.component';
import { ExperienciasComponent } from './experiencias/experiencias.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes =
[
  {
    path: 'home', component: HomeComponent
  },
  {
    path: '', pathMatch: 'full', redirectTo: 'home'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'experiencias', component: ExperienciasComponent
  },
  {
    path: 'escolaridade', component: EscolaridadeComponent
  },
  {
    path: 'projetos', component: ProjetosComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
