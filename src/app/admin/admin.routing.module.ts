import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CanDeactivateGuard } from '../guards/candeactivate.guard';

import { AdminListComponent } from './admin-list/admin-list.component';
import { AdminFormComponent } from './admin-form/admin-form.component';

const adminRoutes: Routes = [
    {
        path: '', component: AdminListComponent,
        children: [
            { path: 'Novo', component: AdminFormComponent },
            {
                path: ':id/:item/Editar', component: AdminFormComponent,
                canDeactivate: [CanDeactivateGuard]
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(adminRoutes)
    ],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
