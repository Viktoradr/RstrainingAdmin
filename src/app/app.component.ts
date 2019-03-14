import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'Rstraining';
  mostrarAdmin = false;
  // Rever quando esta true, aparece mas como a pessoa não esta logada não era pra aparecer o menu

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.mostrarAdminEmitter.subscribe(
      mostrar => this.mostrarAdmin = mostrar
    );
  }

  ngOnDestroy(): void {
    this.authService.mostrarAdminEmitter.unsubscribe();
    this.mostrarAdmin = false;
  }

}
