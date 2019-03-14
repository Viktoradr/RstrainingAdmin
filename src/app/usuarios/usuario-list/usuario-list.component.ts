import { UsuarioViewModel } from './../../shared/entites/classes';
import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  usuarios: UsuarioViewModel[] = [];

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit() {
    this.usuariosService.getUsuarios().subscribe(
      (dados: UsuarioViewModel[]) => {
        console.log(dados);
        this.usuarios = dados;
      }
    );
  }

}
