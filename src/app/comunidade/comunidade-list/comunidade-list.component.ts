import { ComentarioViewModel, UsuarioViewModel } from './../../shared/entites/classes';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { ComunidadeService } from '../comunidade.service';
import { PostViewModel } from '../../shared/entites/classes';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { UsuariosService } from '../../usuarios/usuarios.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-comunidade-list',
  templateUrl: './comunidade-list.component.html',
  styleUrls: ['./comunidade-list.component.css']
})
export class ComunidadeListComponent implements OnInit {

  usuario: UsuarioViewModel;
  posts: PostViewModel[] = [];
  modalRef: BsModalRef;
  comentarios: ComentarioViewModel[];
  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private comunidadeService: ComunidadeService,
    private usuarioService: UsuariosService,
    private modalService: BsModalService) {
  }

  ngOnInit() {
    this.usuario = this.usuarioService.getUsuarioLogado();

    this.comunidadeService.getPosts().subscribe((dados: PostViewModel[]) => {
      this.posts = dados;
      console.log(this.posts);
    });

    this.formulario = this.formBuilder.group({
      id: [null, [Validators.required, Validators.min(1)]],
      descricao: [null, Validators.required]
    });
  }

  liked(_id, alike) {
    console.log(alike);
    const post = new PostViewModel();
    post.ID = Number(_id);
    post.Usuario.ID = this.usuario.ID;

    this.comunidadeService.liked(post).subscribe(result => {
      console.log(result);
    });
  }

  desliked(_id) {
    console.log(_id);
    const post = new PostViewModel();
    post.ID = Number(_id);
    post.Usuario.ID = this.usuario.ID;

    this.comunidadeService.desliked(post).subscribe(result => {
      console.log(result);
    });
  }

  onSubmit() {
    if (!this.formulario.invalid) {

      const post = new PostViewModel();
      post.ID = this.formulario.get('id').value;
      const comment = new ComentarioViewModel();
      comment.Descricao = this.formulario.get('descricao').value;
      comment.Usuario = new UsuarioViewModel();
      comment.Usuario.ID = this.usuario.ID;
      post.ListaComentario.push(comment);

      this.comunidadeService.novoComentario(post).subscribe(result => {
        console.log(result);
      });
    }
  }


  openModal(template: TemplateRef<any>, post: PostViewModel) {
    this.modalRef = this.modalService.show(template);
    this.comentarios = post.ListaComentario;
    this.formulario.patchValue({ id: post.ID });
    console.log(this.formulario.value);
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
