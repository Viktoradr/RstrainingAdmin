import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AmigoListComponent } from './amigo-list/amigo-list.component';
import { AmigoFormComponent } from './amigo-form/amigo-form.component';
import { PerfilComponent } from '../perfil/perfil.component';
import { DetalheResolver } from '../guards/detalhe.resolver';
import { UsuariosGuard } from '../guards/usuarios.guard';

const amigosRoutes: Routes = [
    {
        path: '', component: AmigoListComponent,
        canActivateChild: [UsuariosGuard],
        children: [
            { path: 'Novo', component: AmigoFormComponent },
            {
                path: ':id',
                component: PerfilComponent,
                resolve: { usuario: DetalheResolver }
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(amigosRoutes)],
    exports: [RouterModule]
})
export class AmigosRoutingModule { }
