import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private url = 'http://127.0.0.1:8001/api/v1/user';
  private loginUrl = "http://127.0.0.1:8001/oauth/token";
  private logoutUrl = "http://127.0.0.1:8001/api/v1/logout";
  private perfilUrl = "http://127.0.0.1:8001/api/v1/user";
  private modificacionUrl = "http://127.0.0.1:8001/api/v1/user"

  constructor(private http: HttpClient) { }
  
  sendLogin(credentials: any){
    const body = {
      grant_type: "password",
      client_id: "1",
      client_secret: "FLlF2Oamj0BfdkitldKE8qt4sNM7Pi0TGtowPFVy",
      username: credentials.email,
      password: credentials.password
    }

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post(this.loginUrl, body, httpOptions);
    
  }


  sendLogout(){
    const httpOptions = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer ' + localStorage.getItem("accessToken") 
      })
    };

    return this.http.get(this.logoutUrl, httpOptions) ;
  }

  registro(credentials:any) {
      const body = {
        nombre: credentials.nombre,
        apellido:credentials.apellido,
        email:credentials.email,
        password:credentials.password,
        c_password:credentials.c_password

      }
      const httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };
      return this.http.post(this.url, body, httpOptions);
    }

    
  obtenerDatosUserLogueado() {
    const httpOptions = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer ' + localStorage.getItem("accessToken") 
      })
    };

    return this.http.get(this.perfilUrl, httpOptions)

  }


  modificarPerfil(credentials: any, id: number): Observable<any> {  
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    const body = {
      cumpleanos: credentials.cumpleanos,
      acercademi: credentials.acercademi
    };

    return this.http.put(`${this.modificacionUrl}/${id}`, body, httpOptions);
  }
}

  



