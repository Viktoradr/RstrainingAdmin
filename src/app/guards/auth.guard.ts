import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  /*
    AUTH GUARD É RESPONSÁVEL POR VERIFICAR SE O
    USUARIO ESTÁ LOGADO/AUTENTICADO OU NÃO.
  */

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    console.log('AuthGuard canActivate');
    return this.verificarAcesso();
  }

  canLoad(route: Route): Observable<boolean>|Promise<boolean>|boolean {
    console.log('AuthGuard canLoad');
    return this.verificarAcesso();
  }

  private verificarAcesso() {
    if (this.authService.isAutenticado()) {
      return true;
    }
    this.router.navigate(['/Login']);
    return false;
  }
}
