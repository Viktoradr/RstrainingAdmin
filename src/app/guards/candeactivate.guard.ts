import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ICanDeactivateForm } from './interfaces/icandeactivate.form';

@Injectable({
    providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<ICanDeactivateForm> {

    /*
        DEACTIVATE GUARD É RESPONSÁVEL POR VERIFICAR SE O
        USUARIO DESEJAR SAIR DO FORMULARIO QUE O MESMO
        ESTA PREENCHENDO.
    */

    canDeactivate(
        component: ICanDeactivateForm,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {
        console.log('canDeactivate');
        return component.poderDesativar();
    }
}
