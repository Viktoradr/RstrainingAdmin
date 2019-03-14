import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { UsuariosRoutingModule } from './usuarios.routing.module';

import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';

import { UsuariosService } from './usuarios.service';
import { PerfilModule } from '../perfil/perfil.module';
import { UsuarioFormProfessorComponent } from './usuario-form-professor/usuario-form-professor.component';
import { UsuarioEditComponent } from './usuario-edit/usuario-edit.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    UsuariosRoutingModule,
    PerfilModule
  ],
  declarations: [
    UsuarioListComponent,
    UsuarioFormComponent,
    UsuarioFormProfessorComponent,
    UsuarioEditComponent
  ],
  exports: [],
  providers: [
    UsuariosService
  ],
})
export class UsuariosModule { }
