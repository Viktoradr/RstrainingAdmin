import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../usuarios/usuarios.service';
import { FriendViewModel, UsuarioViewModel } from '../../shared/entites/classes';
import { AmigosService } from '../amigos.service';
import { ICanDeactivateForm } from '../../guards/interfaces/icandeactivate.form';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-amigo-form',
  templateUrl: './amigo-form.component.html',
  styleUrls: ['./amigo-form.component.css']
})
export class AmigoFormComponent implements OnInit, ICanDeactivateForm {

  amigos: FriendViewModel[] = [];
  usuario: UsuarioViewModel;
  formulario: FormGroup;
  formMudou: false;


  constructor(
    private formBuilder: FormBuilder,
    private amigosService: AmigosService,
    private usuarioService: UsuariosService,
    private router: Router
  ) { }

  ngOnInit() {
    this.usuario = this.usuarioService.getUsuarioLogado();

    this.amigosService.getMeusAmigos(this.usuario).subscribe((dados: FriendViewModel[]) => {
      this.amigos = dados;
    });

    this.formulario = this.formBuilder.group({
      UsuarioID: [this.usuario.ID, [Validators.required, Validators.min(1)]],
      AmigoID: [0, [Validators.required, Validators.min(1)]]
    });

  }

  poderDesativar() {
    if (this.formMudou) {
      confirm('Tem certeza que deseja sair?');
    }
    return true;
  }

  onSubmit() {
    console.log(this.formulario.value);

    this.amigosService.novoAmigo(this.formulario.value).subscribe(result => {
      console.log(result);
      this.router.navigate(['/Amigos']);
    });
  }

  limparForm() {
    this.formulario.reset();
  }

  aplicaCssErro(campo) {
    return {
      'is-invalid': this.verificaValidTouched(campo)
    };
  }

  verificaValidTouched(campo) {
    return !this.formulario.get(campo).valid && this.formulario.get(campo).touched;
  }
}
