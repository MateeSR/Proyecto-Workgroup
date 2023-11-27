import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../Servicios/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NormalRoleGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (this.authService.tieneRol('admin')) {
      return true; // Permite la navegación si el usuario tiene el rol 'normal'
    } else {
      // Redirige a alguna otra página (puede ser la página de inicio o una página de acceso denegado)
      this.router.navigate(['']);
      return false;
    }
  }
}