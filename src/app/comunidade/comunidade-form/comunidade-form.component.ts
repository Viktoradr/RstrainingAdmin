import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ComunidadeService } from '../comunidade.service';
import { PostViewModel, UsuarioViewModel } from '../../shared/entites/classes';
import { UsuariosService } from '../../usuarios/usuarios.service';

@Component({
  selector: 'app-comunidade-form',
  templateUrl: './comunidade-form.component.html',
  styleUrls: ['./comunidade-form.component.css']
})
export class ComunidadeFormComponent implements OnInit {

  usuario: UsuarioViewModel;
  formulario: FormGroup;
  aparecer = false;

  constructor(
    private formBuilder: FormBuilder,
    private comunidadeService: ComunidadeService,
    private usuarioService: UsuariosService
  ) { }

  ngOnInit() {
    this.usuario = this.usuarioService.getUsuarioLogado();

    this.formulario = this.formBuilder.group({
      descricao: [null, Validators.required]
    });
  }

  onSubmit() {
    if (!this.formulario.invalid) {

      const post = new PostViewModel();
      post.Descricao = this.formulario.get('descricao').value;
      post.Usuario.ID = this.usuario.ID;

      this.comunidadeService.novoPost(post).subscribe(result => {
        console.log(result);
        this.limparForm();
      });
    }
  }

  limparForm() {
    this.formulario.reset();
    this.aparecer = false;
  }

  aplicaCssErro(campo) {
    return {
      'is-invalid': this.verificaValidTouched(campo)
    };
  }

  verificaValidTouched(campo) {
    return !this.formulario.get(campo).valid && this.formulario.get(campo).touched;
  }

  esconderForm() {
    this.aparecer = !this.aparecer;
  }

}
