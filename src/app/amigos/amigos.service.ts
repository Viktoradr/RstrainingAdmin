import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerManagerService } from '../shared/services/server.manager.service';
import { UsuarioViewModel } from '../shared/entites/classes';

@Injectable({
    providedIn: 'root'
})
export class AmigosService {

    constructor(private http: HttpClient, private server: ServerManagerService) { }

    getMeusAmigos(usuario: UsuarioViewModel) {
        return this.http.post(this.server.request('Friend', 'GetAll'), usuario);
    }

    novoAmigo(amigo: any) {
        console.log(amigo);
        return this.http.post(this.server.request('Friend', 'Adicionar'), amigo);
    }

}
