import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { ICanDeactivateForm } from '../../guards/interfaces/icandeactivate.form';
import { TipoViewModel } from './../../shared/entites/classes';

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.css']
})
export class AdminFormComponent implements OnInit, ICanDeactivateForm {

  formulario: FormGroup;
  formMudou: false;

  constructor(
    private formBuilder: FormBuilder,
    private adminService: AdminService,
    private router: Router) { }

  ngOnInit() {

    this.formulario = this.formBuilder.group({
      tipo: [0, [Validators.required, Validators.min(1)]],
      descricao: [null, Validators.required]
    });

  }

  poderDesativar() {
    if (this.formMudou) {
      confirm('Tem certeza que deseja sair?');
    }
    return true;
  }

  onSubmit() {
    if (!this.formulario.invalid) {

      const _tp = new TipoViewModel();
      _tp.ID = Number(this.formulario.get('tipo').value);
      _tp.Nome = this.formulario.get('descricao').value;

      this.adminService.novaLista(_tp).subscribe(result => {
        console.log(result);
        this.router.navigate(['/Admin']);
      });
    }
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
