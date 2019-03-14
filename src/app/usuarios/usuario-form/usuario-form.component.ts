import { Component, OnInit } from '@angular/core';
import { ICanDeactivateForm } from '../../guards/interfaces/icandeactivate.form';
import { DropdownViewModel } from '../../shared/entites/classes';
import { DropdownService } from '../../shared/services/dropdown.service';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {

  listas: DropdownViewModel = new DropdownViewModel();

  constructor(private dropdownService: DropdownService) { }

  ngOnInit() {
    this.dropdownService.getListas().subscribe((dados: DropdownViewModel) => {
      console.log(dados);
      this.listas = dados;
    });
  }
}
