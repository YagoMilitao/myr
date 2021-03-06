import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { GerenciamentoComponent } from './gerenciamento/gerenciamento.component';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CadastroComponent,
    GerenciamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
