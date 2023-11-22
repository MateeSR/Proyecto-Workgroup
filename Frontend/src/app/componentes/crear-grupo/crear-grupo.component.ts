import { Component, OnInit } from '@angular/core';
import { GrupoService } from 'src/app/Servicios/grupo.service';
import { Router } from '@angular/router';
import { Grupo } from 'src/app/Clases/grupo';

@Component({
  selector: 'app-crear-grupo',
  templateUrl: './crear-grupo.component.html',
  styleUrls: ['./crear-grupo.component.css']
})
export class CrearGrupoComponent implements OnInit{
  grupos: any;
  grupo = new Grupo();


  constructor(private grupoService:GrupoService, private router:Router) {}

  ngOnInit(): void {
    
  }

  listarGrupos() {
    this.grupoService.listarGrupos().subscribe(res => {
      this.grupos = res;
    });

  }

  crearGrupo() {
    this.grupoService.crearGrupo(this.grupo).subscribe(res => {
      this.listarGrupos();
      this.router.navigate(['grupos']);
   
    })
    }


}