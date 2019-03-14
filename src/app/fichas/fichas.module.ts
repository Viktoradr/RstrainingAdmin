import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppBoostrapModule } from '../shared/modules/app.bootstrap.module';

import { FichaListComponent } from './ficha-list/ficha-list.component';
import { FichaFormComponent } from './ficha-form/ficha-form.component';
import { FormDebugModule } from '../shared/form-debug/form-debug.module';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule,
        AppBoostrapModule,
        FormDebugModule
    ],
    declarations: [
        FichaListComponent,
        FichaFormComponent
    ],
    exports: [],
    providers: [],
})
export class FichasModule {}
