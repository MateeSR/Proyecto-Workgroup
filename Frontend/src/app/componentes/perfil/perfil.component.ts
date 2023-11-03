import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit{

  ngOnInit(): void {
    this.obtenerUsuario();
  }

  constructor(public api:AuthService,private router: Router,) {}

  usuario: any;


  obtenerUsuario() {
    this.api.obtenerDatosUserLogueado().subscribe((res) => {
      this.usuario = res;
      if (this.usuario && this.usuario.cumpleanos) {
        this.usuario.cumpleanos = this.convertirTimestampALineaDeTexto(this.usuario.cumpleanos);
      }

    }
  );}

  convertirTimestampALineaDeTexto(timestamp: number): string {
    const meses = [
        "enero",
        "febrero",
        "marzo",
        "abril",
        "mayo",
        "junio",
        "julio",
        "agosto",
        "septiembre",
        "octubre",
        "noviembre",
        "diciembre"
    ];

    const fecha = new Date(timestamp);
    const dia = fecha.getDate();
    const mes = meses[fecha.getMonth()];
    const año = fecha.getFullYear();
   

    const lineaDeTexto = `${dia} de ${mes} de ${año}`;
    return lineaDeTexto;
}

} 






  

