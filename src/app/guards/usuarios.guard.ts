import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../login/auth.service';

@Injectable({
    providedIn: 'root'
})
export class UsuariosGuard implements CanActivateChild {

    constructor(
        private authService: AuthService,
        private router: Router
      ) { }

    /*
        GUARD FILHA É RESPONSÁVEL POR VERIFICAR SE O
        USUARIO POSSUI PERMISSÃO PARA ACESSAR A ROTA FILHA.
    */

    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {
        console.log('UsuariosGuard');

        if (state.url.includes('Editar')) {
            alert('Usuário sem acesso');
            return false;
        }

        return true;
    }
}
