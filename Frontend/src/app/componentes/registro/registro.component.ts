import { Component } from '@angular/core';
import { AuthService } from 'src/app/Servicios/auth.service';
import { Router } from '@angular/router';
import { StatusService } from 'src/app/Servicios/status.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  
  
  public sinCredenciales: boolean = false;
  public passwordSinCoincidir: boolean = false;




  constructor(private api: AuthService, private router: Router, private status: StatusService) {}

  registroUsuario(credentials: any) {
    if (
      !credentials.nombre ||
      !credentials.apellido ||
      !credentials.email || 
      !credentials.password || 
      !credentials.c_password) 
      {
      this.sinCredenciales = true;
      return;
    }

    if (credentials.password !== credentials.c_password) {
      this.passwordSinCoincidir = true;
      return;
    }



    this.api.registro(credentials).subscribe(
      (res: any) => {
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Error al registrar usuario:', error);
      }
    );
  }











}
