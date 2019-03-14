import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { PerfilComponent } from './perfil.component';
import { AppBoostrapModule } from '../shared/modules/app.bootstrap.module';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppBoostrapModule
    ],
    declarations: [PerfilComponent],
    exports: [PerfilComponent],
    providers: []
})
export class PerfilModule { }
