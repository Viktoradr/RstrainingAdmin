import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerManagerService } from '../shared/services/server.manager.service';
import { UsuarioViewModel } from '../shared/entites/classes';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient, private server: ServerManagerService) { }

  getUsuarios() {
    return this.http.get(this.server.request('Usuario', 'GetAll'));
  }

  getUsuario(id: number) {
    return this.http.get(this.server.request('Usuario', 'Get', id.toString()));
  }

  getUsuarioLogado() {
    // return this.http.get(this.server.request('Usuario', 'Get', '1'));

    const usuario = new UsuarioViewModel;
    usuario.ID = 1;
    usuario.Nome = 'Victor Alves Dutra Rodrigues';
    usuario.Email = 'viktor@gmail.com';
    usuario.Atividade.Nome = '2x por semana';
    usuario.Objetivo.Nome = 'Ganho de Massa';
    usuario.Perfil.Nome = 'Administrador';
    usuario.Idade = 25;
    usuario.PesoAlvo = '80';
    usuario.PesoCorporal = '77';
    usuario.Sexo = 1;
    usuario.Altura = '174';
    console.log('getUsuarioLogado', usuario);
    return usuario;
  }

  novasMedidas(usuario) {
    return this.http.post(this.server.request('Usuario', 'CadastrarMedidas'), usuario);
  }
}
