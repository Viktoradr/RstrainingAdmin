import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppBoostrapModule } from '../shared/modules/app.bootstrap.module';

import { AmigoListComponent } from './amigo-list/amigo-list.component';
import { AmigoFormComponent } from './amigo-form/amigo-form.component';
import { AmigosRoutingModule } from './amigos.routing.module';
import { PerfilModule } from '../perfil/perfil.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AppBoostrapModule,
    AmigosRoutingModule,
    PerfilModule
  ],
  declarations: [
    AmigoListComponent,
    AmigoFormComponent
  ]
})
export class AmigosModule { }
