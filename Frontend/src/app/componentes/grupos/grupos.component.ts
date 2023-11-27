import { Component, OnInit } from '@angular/core';
import { GrupoService } from 'src/app/Servicios/grupo.service';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/Servicios/auth.service';


@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent implements OnInit {

  id:any;
  grupo:any;
  rol:any;

  constructor (public grupoService:GrupoService, public api:AuthService) {}

  ngOnInit(): void {
    this.listarGrupos()
    this.obtenerRolDeUsuario();

  }

  listarGrupos() {
    this.grupoService.listarGrupos().subscribe(res => {
      this.grupo = res;
    });
  }

  obtenerRolDeUsuario() {
    this.api.obtenerRolesUsuario().subscribe((res: string[]) => {
        this.rol = res;
        console.log('Roles del usuario:', this.rol.join(', '));

      }
    );
    }

  faImage = faImage;

}
