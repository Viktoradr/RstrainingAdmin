
import { Component, OnInit} from '@angular/core';
import { UsuariosService } from '../usuarios/usuarios.service';
import { UsuarioViewModel } from '../shared/entites/classes';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  usuario: UsuarioViewModel;

  constructor(private usuarioService: UsuariosService) { }

  ngOnInit() {
    this.usuario = this.usuarioService.getUsuarioLogado();
  }
}
