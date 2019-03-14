import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioViewModel } from '../shared/entites/classes';
import { UsuariosService } from '../usuarios/usuarios.service';

@Injectable({
    providedIn: 'root'
})
export class DetalheResolver implements Resolve<UsuarioViewModel> {

    constructor(private usuarioServive: UsuariosService) {}

    /*
        GUARD RESOLVER É RESPONSÁVEL POR REALIZAR A REQUISIÇÃO AJAX
        E DEVOLVER A INFORMAÇÃO PARA O COMPONENTE NO ONINIT.
    */

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
        ): Observable<any>|Promise<any>|any {
            const id = route.params['id'];
            console.log('DetalheResolver', id);

            if (id != null) {
                return this.usuarioServive.getUsuario(id);
            }

            return this.usuarioServive.getUsuarioLogado();
    }
}
