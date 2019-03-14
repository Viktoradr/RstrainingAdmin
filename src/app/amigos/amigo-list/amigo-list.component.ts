import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../usuarios/usuarios.service';
import { FriendViewModel, UsuarioViewModel } from '../../shared/entites/classes';
import { AmigosService } from '../amigos.service';

@Component({
  selector: 'app-amigo-list',
  templateUrl: './amigo-list.component.html',
  styleUrls: ['./amigo-list.component.css']
})
export class AmigoListComponent implements OnInit {

  amigos: FriendViewModel[] = [];
  usuario: UsuarioViewModel;

  constructor(
    private amigosService: AmigosService,
    private usuarioService: UsuariosService
  ) {}

  ngOnInit() {
    this.usuario = this.usuarioService.getUsuarioLogado();

    console.log(this.usuario, this.usuario != null);

    this.amigosService.getMeusAmigos(this.usuario).subscribe((dados: FriendViewModel[]) => {
      this.amigos = dados;
    });
  }

}
