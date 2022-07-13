import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ExperienciasComponent } from './experiencias/experiencias.component';
import { EscolaridadeComponent } from './escolaridade/escolaridade.component';
import { ProjetosComponent } from './projetos/projetos.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    PerfilComponent,
    ExperienciasComponent,
    EscolaridadeComponent,
    ProjetosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
