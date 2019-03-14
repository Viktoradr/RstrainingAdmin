import { Component, OnInit, OnDestroy } from '@angular/core';
import { DropdownService } from '../../shared/services/dropdown.service';
import { DropdownViewModel } from '../../shared/entites/classes';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit, OnDestroy {

  listas: DropdownViewModel = new DropdownViewModel();
  inscricao: Subscription;

  constructor(private dropdownService: DropdownService) { }

  ngOnInit() {
    this.inscricao = this.dropdownService.getListas().subscribe((dados: DropdownViewModel)  => {
      console.log(dados);
      this.listas = dados;
    });
  }

  ngOnDestroy() {
    // this.inscricao.unsubscribe();
  }


  deletarItem(item) {
    console.log(item);
  }

}
