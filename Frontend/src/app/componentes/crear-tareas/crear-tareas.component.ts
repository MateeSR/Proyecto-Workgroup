import { Component, OnInit } from '@angular/core';
import { TareaService } from 'src/app/Servicios/tarea.service';
import { Tarea } from 'src/app/Clases/tarea';
import { GrupoService } from 'src/app/Servicios/grupo.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Servicios/auth.service';

@Component({
  selector: 'app-crear-tareas',
  templateUrl: './crear-tareas.component.html',
  styleUrls: ['./crear-tareas.component.css']
})
export class CrearTareasComponent implements OnInit {
  tareas: any;
  grupo: any;
  id_grupo : any;
  tarea = new Tarea();
  
  constructor(private tareaService:TareaService,  private grupoService:GrupoService, private router: Router) { }

  ngOnInit(): void {
    this.listarTareas();
    this.listarGrupos();
  }


  listarGrupos() {
    this.grupoService.listarGrupos().subscribe(res => {
      this.grupo = res;
    });
  }


  listarTareas() {
    this.tareaService.listarTareas().subscribe(res => {
      this.tareas = res;
    });

  }
  crearTarea() {
    this.tareaService.crearTarea(this.tarea).subscribe(res => {
      this.listarTareas();
      this.router.navigate(['tareas']);
   
    })
    }

    obtenerDatosCache() {
      this.tareaService.obtenerDatosUserCache().subscribe((res) => {
        console.log(res);
      })

    }
    
    
    
  }
 
