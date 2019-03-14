import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppBoostrapModule } from '../shared/modules/app.bootstrap.module';

import { ComunidadeListComponent } from './comunidade-list/comunidade-list.component';
import { ComunidadeFormComponent } from './comunidade-form/comunidade-form.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule,
        AppBoostrapModule
    ],
    declarations: [
        ComunidadeListComponent,
        ComunidadeFormComponent
    ],
    exports: [],
    providers: [],
})
export class ComunidadeModule {}
