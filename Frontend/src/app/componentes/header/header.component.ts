import { Component, OnInit } from '@angular/core';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/Servicios/auth.service';
import { StatusService } from 'src/app/Servicios/status.service';
import { Router } from '@angular/router';





@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  constructor(public api:AuthService, private router: Router, public status: StatusService) { }
    rol:any;

    usuario: any;

    faUsers = faUsers;
    faBook = faBook;
    faBell = faBell;
    faUser = faUser;

    ngOnInit() {
      this.obtenerUsuario();
      this.obtenerRolDeUsuario();
    }

    public loggedIn: boolean=false;

    logout(){
      this.api.sendLogout().subscribe();
      localStorage.removeItem("accessToken");
      this.status.isLoggedIn = false;
      this.router.navigateByUrl("/login")
      
    
    }

    obtenerRolDeUsuario() {
      this.api.obtenerRolesUsuario().subscribe((res: string[]) => {
          this.rol = res;
          console.log('Roles del usuario:', this.rol.join(', '));

        }
      );

    }
    
   

    obtenerUsuario() {
      this.api.obtenerDatosUserLogueado().subscribe((res) => {
        this.usuario = res;

      }
    );
  }


}
