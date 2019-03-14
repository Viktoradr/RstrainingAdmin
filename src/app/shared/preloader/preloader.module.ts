import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloaderComponent } from './preloader.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        PreloaderComponent
    ],
    exports: [PreloaderComponent],
    providers: [],
})
export class PreloaderModule {}
