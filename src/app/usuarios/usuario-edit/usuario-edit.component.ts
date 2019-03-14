import { Component, OnInit } from '@angular/core';
import { DropdownViewModel } from '../../shared/entites/classes';
import { DropdownService } from '../../shared/services/dropdown.service';
import { ICanDeactivateForm } from '../../guards/interfaces/icandeactivate.form';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.css']
})
export class UsuarioEditComponent implements OnInit {

  listas: DropdownViewModel = new DropdownViewModel();

  constructor(private dropdownService: DropdownService) { }

  ngOnInit() {
    this.dropdownService.getListas().subscribe((dados: DropdownViewModel) => {
      console.log(dados);
      this.listas = dados;
    });
  }

}
