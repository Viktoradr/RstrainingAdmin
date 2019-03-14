import { Component, OnInit } from '@angular/core';
import { DropdownService } from '../shared/services/dropdown.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dropdown: DropdownService) { }

  ngOnInit() {
  }

}
