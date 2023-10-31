import { Component, OnInit } from '@angular/core';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../Servicios/auth.service';
import { StatusService } from '../Servicios/status.service';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';





@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  constructor(public api:AuthService, private router: Router, public status: StatusService) { }

    usuario: any;

    faUsers = faUsers;
    faBook = faBook;
    faBell = faBell;
    faUser = faUser;

    ngOnInit() {
      this.obtenerUsuario();
    }

    public loggedIn: boolean=false;

    logout(){
      this.api.sendLogout().subscribe();
      localStorage.removeItem("accessToken");
      this.status.isLoggedIn = false;
      this.router.navigateByUrl("/login")
      
    
    }


    obtenerUsuario() {
      this.api.obtenerDatosUserLogueado().subscribe((res) => {
        this.usuario = res;

      }
    );
  }


}
