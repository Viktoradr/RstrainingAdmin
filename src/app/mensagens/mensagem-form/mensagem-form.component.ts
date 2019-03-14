import { Component, OnInit } from '@angular/core';
import { FriendViewModel, UsuarioViewModel } from '../../shared/entites/classes';
import { UsuariosService } from '../../usuarios/usuarios.service';
import { AmigosService } from '../../amigos/amigos.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ICanDeactivateForm } from '../../guards/interfaces/icandeactivate.form';

@Component({
  selector: 'app-mensagem-form',
  templateUrl: './mensagem-form.component.html',
  styleUrls: ['./mensagem-form.component.css']
})
export class MensagemFormComponent implements OnInit, ICanDeactivateForm {

  amigos: FriendViewModel[];
  usuario: UsuarioViewModel;
  formulario: FormGroup;
  formMudou: false;

   constructor(
    private amigosService: AmigosService,
    private usuarioService: UsuariosService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      Destinatarios: [[], [Validators.required, Validators.min(1)]],
      Mensagem: [null, Validators.required],
      Nome: [null, Validators.required]
    });

    this.usuario = this.usuarioService.getUsuarioLogado();
    this.amigosService.getMeusAmigos(this.usuario).subscribe((dados: FriendViewModel[]) => {
      this.amigos = dados;
    });
  }

  poderDesativar() {
    if (this.formMudou) {
      confirm('Tem certeza que deseja sair?');
    }
    return true;
  }

  onSubmit() {
    // POST
    console.log(this.formulario.value);
    console.log(this.formulario.get('Destinatarios'));
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
