import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { FichaViewModel, FichaInfoViewModel, GrupoFichaViewModel } from '../../shared/entites/classes';

@Component({
  selector: 'app-ficha-form',
  templateUrl: './ficha-form.component.html',
  styleUrls: ['./ficha-form.component.css']
})
export class FichaFormComponent implements OnInit {

  formulario: FormGroup;
  grupo: GrupoFichaViewModel;
  ficha: FichaViewModel;
  fichaInfo: FichaInfoViewModel;

  checks: any[] = [
    { id: 1, nome: 'Série A', ativo: false },
    { id: 2, nome: 'Série B', ativo: true },
    { id: 3, nome: 'Série C', ativo: true },
    { id: 4, nome: 'Série D', ativo: true },
    { id: 5, nome: 'Série E', ativo: true },
  ];

  modalAddFicha: BsModalRef;
  modalAddFichaInfo: BsModalRef;

  modal: any = { title: '', config: {
    class: 'modal-dialog-centered',
    keyboard: false,
    backdrop: true,
    ignoreBackdropClick: true,
    animated: true }};

  constructor(
    private formBuilder: FormBuilder,
    private modalService: BsModalService) { }

  ngOnInit() {
    this.grupo = new GrupoFichaViewModel();
    this.ficha = new FichaViewModel();
    this.fichaInfo = new FichaInfoViewModel();

    this.formulario = this.formBuilder.group({
      tipo: this.formBuilder.group({
        id: [0, [Validators.required, Validators.min(1)]]
      }),
      listaFicha: this.formBuilder.array([], [Validators.required, Validators.minLength(1)])
    });
  }

  criarFicha() {
    const nome = this.ficha.Nome;
    const observacao = this.ficha.Observacao;

    console.log(nome);

    return this.formBuilder.group({
      nome: [nome != null && nome !== '' ? nome : null, Validators.required],
      observacao: [observacao != null && observacao !== '' ? observacao : null],
      tipo: this.formBuilder.group({
        id: [null, [Validators.required, Validators.min(1)]]
      }),
      listaFichaInfo: this.formBuilder.array([], [Validators.required, Validators.minLength(1)])
    });
  }

  criarFichaInfo() {
    const carga = this.fichaInfo.Carga;
    const quantidadeRepeticao = this.fichaInfo.QuantidadeRepeticao;
    const quantidadeSerie = this.fichaInfo.QuantidadeSerie;

    return this.formBuilder.group({
      carga: [carga != null && carga !== '' ? carga : null, Validators.required],
      quantidadeRepeticao: [quantidadeRepeticao != null && quantidadeRepeticao !== '' ? quantidadeRepeticao : null, Validators.required],
      quantidadeSerie: [quantidadeSerie != null && quantidadeSerie !== '' ? quantidadeSerie : null, Validators.required],
      exercicio: this.formBuilder.group({
        id: [null, [Validators.required, Validators.min(1)]]
      }),
      observacao: this.formBuilder.group({
        id: [null, [Validators.required, Validators.min(1)]]
      }),
    });
  }

   addFicha(): void {
     const fichas = this.formulario.get('listaFicha') as FormArray;
     fichas.push(this.criarFicha());
     this.modalAddFicha.hide();
     console.log(this.formulario.value);
   }

   addFichaInfo(): void {
     const fichaInfos = this.formulario.get('listaFichaInfo') as FormArray;
     fichaInfos.push(this.criarFichaInfo());
   }

   removerUltimaFicha() {
     const lst = this.formulario.get('listaFicha') as FormArray;
     lst.removeAt(lst.length - 1);
     this.ficha = new FichaViewModel();
   }

  isChecked(_id, template: TemplateRef<any>) {
    this.checks.forEach(element => {
      if (element.id === _id) {
        this.ficha.Tipo.ID = _id;

        element.ativo = !element.ativo;
        if (element.ativo) {
          this.removerUltimaFicha();
        } else {
          this.openModal(_id, template);
        }
      }
    });
  }

  openModal(_id, template: TemplateRef<any>) {
    const info = this.checks.find(x => x.id === _id);
    this.modal.title = info.nome;
    this.modalAddFicha = this.modalService.show(
      template,
      Object.assign({}, this.modal.config));
  }

  openModalInfo(template: TemplateRef<any>) {
    this.modalAddFichaInfo = this.modalService.show(
      template,
      Object.assign({}, this.modal.config));
  }

  onSubmit() {
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
