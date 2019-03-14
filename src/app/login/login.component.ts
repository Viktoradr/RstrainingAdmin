import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { UsuarioViewModel } from '../shared/entites/classes';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

public usuario: UsuarioViewModel = new UsuarioViewModel();

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.usuario.Email = '1';
    this.usuario.Senha = '1';
  }

  fazerLogin() {
    this.authService.logar(this.usuario);
  }

}
