import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioViewModel } from '../shared/entites/classes';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado = false;
  mostrarAdminEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  logar(usuario: UsuarioViewModel) {
    console.log(usuario);
    if (usuario.Email === '1' && usuario.Senha === '1') {
      this.usuarioAutenticado = true;
      this.mostrarAdminEmitter.emit(true);
      this.router.navigate(['/Home']);
    } else {
      this.usuarioAutenticado = false;
      this.mostrarAdminEmitter.emit(false);
    }
  }

  isAutenticado() {
    return this.usuarioAutenticado;
  }
}
