import { UsuarioViewModel } from './../../shared/entites/classes';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { GrupoMensagemViewModel, MensagemViewModel, FriendViewModel } from '../../shared/entites/classes';
import { UsuariosService } from './../../usuarios/usuarios.service';
import { MensagensService } from './../mensagens.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'app-mensagen-list',
  templateUrl: './mensagen-list.component.html',
  styleUrls: ['./mensagen-list.component.css']
})
export class MensagenListComponent implements OnInit {

  grupos: GrupoMensagemViewModel[] = [];
  mensagens: MensagemViewModel[] = [];
  modalRef: BsModalRef;
  usuario: UsuarioViewModel;

  constructor(
    private mensagemService: MensagensService,
    private usuarioService: UsuariosService,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.usuario = this.usuarioService.getUsuarioLogado();

    this.mensagemService.getMensagens(this.usuario).subscribe((dados: GrupoMensagemViewModel[]) => {
      this.grupos = dados;
      console.log(this.grupos);
    });
  }

  openModal(template: TemplateRef<any>, item: GrupoMensagemViewModel) {
    this.modalRef = this.modalService.show(template);
    this.mensagens = item.ListaMensagem;
  }

}
