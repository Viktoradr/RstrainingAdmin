import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsuariosService } from '../usuarios/usuarios.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UsuarioViewModel, MedidaViewModel } from '../shared/entites/classes';
import { CalculosService } from '../shared/services/calculos.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit, OnDestroy {

  formulario: FormGroup;
  usuario: UsuarioViewModel = new UsuarioViewModel();
  medida: MedidaViewModel = new MedidaViewModel();
  inscricao: Subscription;
  imc = 0;
  condicao = '';
  sexo = '';
  meta = 0;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private calculosService: CalculosService,
    private usuariosService: UsuariosService) { }

  ngOnInit() {
    // Popular objeto usuario para poder o editar usuario funcionar

    this.inscricao = this.route.data.subscribe(
      (info: { usuario: UsuarioViewModel }) => {
        if (info.usuario != null) {
          console.log('Perfil', info.usuario);
          this.usuario = info.usuario;
          this.sexo = this.usuario.Sexo == 1 ? 'M' : 'F';

          if (this.usuario.ListaMedidas != null && this.usuario.ListaMedidas.length > 0) {
            console.log('this.usuario.ListaMedidas', this.usuario.ListaMedidas);
            this.medida = this.usuario.ListaMedidas.find(x => x.ID == 0);
          }

          this.calculoDoIMC(this.usuario);
          this.calculoMetaDiaria(this.usuario);
        }
      }
    );

    this.formulario = this.formBuilder.group({
      BracoEsquerdo: [null, Validators.required],
      BracoDireito: [null, Validators.required],
      Torax: [null, Validators.required],
      AntebracoEsquerdo: [null, Validators.required],
      AntebracoDireito: [null, Validators.required],
      CoxaEsquerda: [null, Validators.required],
      CoxaDireita: [null, Validators.required],
      Quadril: [null, Validators.required],
      PernaEsquerda: [null, Validators.required],
      PernaDireita: [null, Validators.required],
      Cintura: [null, Validators.required]
    });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  editarUsuario() {
    this.router.navigate(['/usuarios', this.usuario.ID, 'Editar']);
  }

  calculoDoIMC(usuario) {
    this.imc = this.calculosService.calcularIMC(usuario.Altura, usuario.PesoCorporal);
    this.condicao = this.calculosService.condicaoIMC(this.imc, this.sexo);
  }

  calculoMetaDiaria(usuario) {
    this.meta = this.calculosService.calcularMetasDiarias(3, 5, usuario.Idade, usuario.Altura, usuario.PesoCorporal, this.sexo);
  }


  onSubmit() {
    console.log(this.formulario.value, this.formulario.invalid);
    if (!this.formulario.invalid) {

      this.usuario.ListaMedidas.push(this.formulario.value);
      console.log(this.usuario);

      this.usuariosService.novasMedidas(this.usuario).subscribe(result => {
        console.log(result);
        this.medida = this.formulario.value;
        // this.formulario.reset();
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
