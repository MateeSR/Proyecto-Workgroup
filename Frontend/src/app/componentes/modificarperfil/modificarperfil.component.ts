import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Servicios/auth.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-modificarperfil',
  templateUrl: './modificarperfil.component.html',
  styleUrls: ['./modificarperfil.component.css']
})
export class ModificarperfilComponent implements OnInit{
  id: any;
  usuario : any;
  

  constructor(private route:ActivatedRoute, private api:AuthService, private router:Router) {}

  ngOnInit(): void {
    this.obtenerUsuario();

  }
  
  obtenerUsuario() {
    this.api.obtenerDatosUserLogueado().subscribe((res) => {
      this.usuario = res;

    });
  }
  modificarPerfil() {
    this.api.modificarPerfil(this.usuario, this.usuario.id).subscribe(() => {
      this.router.navigate(['/perfil']);
    });
  }


}
