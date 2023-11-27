import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GrupoService } from 'src/app/Servicios/grupo.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Servicios/auth.service';
import { TareaService } from 'src/app/Servicios/tarea.service';
import { Location } from '@angular/common';
import { faGear } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-listar-un-grupo',
  templateUrl: './listar-un-grupo.component.html',
  styleUrls: ['./listar-un-grupo.component.css']
})
export class ListarUnGrupoComponent implements OnInit {

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.listarUnGrupo();
    this.listarIntegrantes();
    this.listarUsuariosLogueados()
    this.obtenerRolDeUsuario();
  }

  rol:any;
  id:any;
  grupo:any;
  grupos:any;
  integrantes:any;
  users:any;
  integra: any = { id_usuario: '' };
  faGear = faGear;

  constructor(
    private route:ActivatedRoute, 
    private grupoService:GrupoService, 
    private authService:AuthService, 
    private tareaService: TareaService, 
    private router: Router,
    private location: Location
    
    ) {}


  listarUnGrupo() {
    this.grupoService.listarUnGrupo(this.id).subscribe(res => {
      this.grupos = res;
      this.grupo = this.grupos;
      
  })

}
 listarIntegrantes() {
  this.grupoService.listarIntegrantes(this.id).subscribe(res => {
    this.integrantes = res;

  })

 }

 listarUsuariosLogueados() {

  this.authService.verUsuariosLogueados().subscribe(res => {
    this.users = res;
  })


 }

 obtenerRolDeUsuario() {
  this.authService.obtenerRolesUsuario().subscribe((res: string[]) => {
      this.rol = res;
      console.log('Roles del usuario:', this.rol.join(', '));

    }
  );

}


 funcionIntegrarGrupo() {
  this.grupoService.funcionIntegrarGrupo(this.id, this.integra.id_usuario).subscribe(() => {
    this.listarUsuariosLogueados();


    this.router.navigate(['grupos/' + this.grupo.id]);
  })
  
 }

}