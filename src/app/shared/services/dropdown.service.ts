import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerManagerService } from './server.manager.service';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  listas: any;

  constructor(private http: HttpClient, private server: ServerManagerService) {}

  getListas() {
    return this.http.get(this.server.request('Admin', 'RecuperarTodasListas'));
  }

  getExercicios() {}

  getPerfis() {}

  getPlanos() {}

  getTipoAtividades() {}

  getTipoFichas() {}

  getTipoGrupoFichas() {}

  getTipoObjetivos() {}

  getTipoObservacoes() {}
}
