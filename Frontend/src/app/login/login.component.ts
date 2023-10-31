import { Component } from '@angular/core';
import { AuthService } from '../Servicios/auth.service';
import { Router } from '@angular/router';
import { StatusService } from '../Servicios/status.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public loginError: boolean = false;
  public loginStatus: boolean = false;
  
  constructor(private api: AuthService, private router: Router, private status: StatusService) {}
  sendLogin(credentials: any){

    return this.api.sendLogin(credentials).subscribe( 
      (res:any) => {
        localStorage.setItem('accessToken', res.access_token);
        this.status.isLoggedIn = true;
        this.router.navigateByUrl('/');
      },

      (error) => {
        this.loginError = true;

      }

    );
  }
}
