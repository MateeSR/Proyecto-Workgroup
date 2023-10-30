import { Component, OnInit } from '@angular/core';
import { TareaService } from 'src/app/Servicios/tarea.service';
import { Tarea } from 'src/app/Clases/tarea';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-tareas',
  templateUrl: './crear-tareas.component.html',
  styleUrls: ['./crear-tareas.component.css']
})
export class CrearTareasComponent implements OnInit {
  tareas: any;
  tarea = new Tarea();
  
  constructor(private tareaService:TareaService, private router: Router) { }

  ngOnInit(): void {
    this.listarTareas();
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
    
    
    
  }
 
