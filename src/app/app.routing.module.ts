import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';
import { LoginComponent } from './login/login.component';
import { ComunidadeListComponent } from './comunidade/comunidade-list/comunidade-list.component';
import { MensagenListComponent } from './mensagens/mensagem-list/mensagen-list.component';
import { EvolucaoComponent } from './evolucao/evolucao.component';
import { AmigoListComponent } from './amigos/amigo-list/amigo-list.component';
import { FichaListComponent } from './fichas/ficha-list/ficha-list.component';

import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';

import { AuthGuard } from './guards/auth.guard';
import { DetalheResolver } from './guards/detalhe.resolver';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'Login' },
  { path: 'Login', component: LoginComponent },
  {
    path: 'Home', component: HomeComponent,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  },
  {
    path: 'Perfil', component: PerfilComponent,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    resolve: { usuario: DetalheResolver }
  },
  {
    path: 'Comunidade', component: ComunidadeListComponent,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  },
  {
    path: 'Mensagens', component: MensagenListComponent,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  },
  {
    path: 'Evolucao', component: EvolucaoComponent,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  },
  {
    path: 'Fichas', component: FichaListComponent,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  },
  {
    path: 'Amigos',
    loadChildren: './amigos/amigos.module#AmigosModule',
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  },
  {
    path: 'Usuarios',
    // loadChildren: () => UsuariosModule,
    loadChildren: './usuarios/usuarios.module#UsuariosModule',
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  },
  {
    path: 'Admin',
    loadChildren: './admin/admin.module#AdminModule',
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  },
  { path: '**', component: NaoEncontradoComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
      { enableTracing: true }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
