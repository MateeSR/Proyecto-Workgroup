import { Component } from '@angular/core';
import { AuthService } from '../Servicios/auth.service';
import { Router } from '@angular/router';
import { StatusService } from '../Servicios/status.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  constructor(private api: AuthService, private router: Router, private status: StatusService) {}

  registroUsuario(credentials: any) {
    this.api.registro(credentials).subscribe(
      (resultado: any) => {
        this.router.navigate(['/login']);
      },
      (error: any) => {
        console.error('Error al registrar usuario:', error);
      }
    );
  }











}
