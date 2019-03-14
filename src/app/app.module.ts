import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';

import { AppBoostrapModule } from './shared/modules/app.bootstrap.module';

import { PerfilModule } from './perfil/perfil.module';
import { ComunidadeModule } from './comunidade/comunidade.module';
import { MensagensModule } from './mensagens/mensagens.module';
import { FichasModule } from './fichas/fichas.module';

import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { EvolucaoComponent } from './evolucao/evolucao.component';

import { AuthService } from './login/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { UsuariosGuard } from './guards/usuarios.guard';
import { CanDeactivateGuard } from './guards/candeactivate.guard';

import { DetalheResolver } from './guards/detalhe.resolver';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    LoginComponent,
    NaoEncontradoComponent,
    EvolucaoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    PerfilModule,
    FichasModule,
    ComunidadeModule,
    MensagensModule,
    AppBoostrapModule,
  ],
  providers: [
    AuthService,
    AuthGuard,
    UsuariosGuard,
    CanDeactivateGuard,
    DetalheResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
