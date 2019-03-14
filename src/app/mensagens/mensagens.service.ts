import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerManagerService } from '../shared/services/server.manager.service';
import { UsuarioViewModel } from '../shared/entites/classes';

@Injectable({
    providedIn: 'root'
})
export class MensagensService {

    constructor(private http: HttpClient, private server: ServerManagerService) { }

    getMensagens(usuario: UsuarioViewModel) {
        return this.http.post(this.server.request('Usuario', 'Mensagens'), usuario);
    }
}
