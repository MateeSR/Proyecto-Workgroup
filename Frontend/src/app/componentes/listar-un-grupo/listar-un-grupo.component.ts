import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GrupoService } from 'src/app/Servicios/grupo.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Servicios/auth.service';


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
  }

  id:any;
  grupo:any;
  grupos:any;
  integrantes:any;
  users:any;
  integra: any = { id_usuario: '' };

  constructor(private route:ActivatedRoute, private grupoService:GrupoService, private authService:AuthService, private router: Router) {}


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

 funcionIntegrarGrupo() {
  this.grupoService.funcionIntegrarGrupo(this.id, this.integra.id_usuario).subscribe(() => {
    this.listarUsuariosLogueados();

    this.router.navigate([`grupos/${this.id}`]);
  })
  
 }

}