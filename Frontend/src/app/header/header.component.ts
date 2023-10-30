import { Component } from '@angular/core';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../Servicios/auth.service';
import { StatusService } from '../Servicios/status.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public api:AuthService, private router: Router, public status: StatusService) { }

  ngOnInit(): void {

  }
  
    users : any;
    
    faUsers = faUsers;
    faBook = faBook;
    faBell = faBell;
    faUser = faUser;

    public loggedIn: boolean=false;

    logout(){
      this.api.sendLogout().subscribe();
      localStorage.removeItem("accessToken");
      this.status.isLoggedIn = false;
      this.router.navigateByUrl("/login")
      
    }



}
