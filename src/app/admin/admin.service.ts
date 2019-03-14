import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerManagerService } from '../shared/services/server.manager.service';
import { TipoViewModel } from '../shared/entites/classes';

@Injectable({
    providedIn: 'root'
})
export class AdminService {

    constructor(private http: HttpClient, private server: ServerManagerService) { }

    retornarUrlLista(_ID: number): string {
        switch (_ID) {
            case 1:
                return this.server.request('Admin', 'CadastrarPerfil');
            case 2:
                return this.server.request('Admin', 'CadastrarExercicio');
            case 3:
                return this.server.request('Admin', 'CadastrarTipoPlano');
            case 4:
                return this.server.request('Admin', 'CadastrarTipoObservacao');
            case 5:
                return this.server.request('Admin', 'CadastrarTipoObjetivo');
            case 6:
                return this.server.request('Admin', 'CadastrarTipoGrupoFicha');
            case 7:
                return this.server.request('Admin', 'CadastrarTipoFicha');
            case 8:
                return this.server.request('Admin', 'CadastrarTipoAtividade');
        }
    }

    novaLista(tipo: TipoViewModel) {
        console.log(tipo, this.retornarUrlLista(tipo.ID));
        return this.http.post(this.retornarUrlLista(tipo.ID), tipo);
    }
}
