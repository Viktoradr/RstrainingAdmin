import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppBoostrapModule } from '../shared/modules/app.bootstrap.module';

import { MensagenListComponent } from './mensagem-list/mensagen-list.component';
import { MensagemFormComponent } from './mensagem-form/mensagem-form.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule,
        AppBoostrapModule
    ],
    declarations: [
        MensagenListComponent,
        MensagemFormComponent
    ],
    exports: [],
    providers: [],
})
export class MensagensModule {}
