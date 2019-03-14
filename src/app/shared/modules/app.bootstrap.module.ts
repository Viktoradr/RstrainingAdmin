import { NgModule } from '@angular/core';
import { ButtonsModule, BsDropdownModule, CollapseModule, BsDatepickerModule, ModalModule, TabsModule  } from 'ngx-bootstrap';

@NgModule({
    imports: [
        ButtonsModule.forRoot(),
        BsDropdownModule.forRoot(),
        CollapseModule.forRoot(),
        BsDatepickerModule.forRoot(),
        ModalModule.forRoot(),
        TabsModule.forRoot()
    ],
    exports: [
        ButtonsModule,
        BsDropdownModule,
        CollapseModule,
        BsDatepickerModule,
        ModalModule,
        TabsModule
    ]
})
export class AppBoostrapModule { }
