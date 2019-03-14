import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { PerfilComponent } from '../perfil/perfil.component';

import { UsuariosGuard } from '../guards/usuarios.guard';
import { CanDeactivateGuard } from '../guards/candeactivate.guard';
import { DetalheResolver } from '../guards/detalhe.resolver';
import { UsuarioFormProfessorComponent } from './usuario-form-professor/usuario-form-professor.component';
import { UsuarioEditComponent } from './usuario-edit/usuario-edit.component';

const usuariosRoutes: Routes = [
    {
        path: '', component: UsuarioListComponent,
        canActivateChild: [UsuariosGuard],
        children: [
            {
                path: 'Novo', component: UsuarioFormComponent
            },
            {
                path: 'Novo/Professor', component: UsuarioFormProfessorComponent
            },
            {
                path: ':id',
                component: PerfilComponent,
                resolve: { usuario: DetalheResolver }
            },
            {
                path: ':id/Editar', component: UsuarioEditComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(usuariosRoutes)],
    exports: [RouterModule]
})
export class UsuariosRoutingModule { }
