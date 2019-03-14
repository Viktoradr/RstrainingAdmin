import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppBoostrapModule } from '../shared/modules/app.bootstrap.module';

import { AdminRoutingModule } from 'src/app/admin/admin.routing.module';

import { AdminListComponent } from './admin-list/admin-list.component';
import { AdminFormComponent } from './admin-form/admin-form.component';
import { FormDebugModule } from '../shared/form-debug/form-debug.module';
import { PreloaderModule } from '../shared/preloader/preloader.module';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule,
        AdminRoutingModule,
        AppBoostrapModule,
        FormDebugModule,
        PreloaderModule
    ],
    declarations: [
        AdminListComponent,
        AdminFormComponent
    ],
    exports: [],
    providers: [],
})
export class AdminModule { }
