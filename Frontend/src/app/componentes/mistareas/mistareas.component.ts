import { Component } from '@angular/core';
import { TareaService } from 'src/app/Servicios/tarea.service';
import { Tarea } from 'src/app/Clases/tarea';

@Component({
  selector: 'app-mistareas',
  templateUrl: './mistareas.component.html',
  styleUrls: ['./mistareas.component.css']
})
export class MistareasComponent {
  id:any;
  tareas:any;
  tarea = new Tarea();
  

  constructor(private tareaService:TareaService) { }

  ngOnInit(): void {
    this.listarTareas();
  }

  listarTareas() {
    this.tareaService.listarTareasDeUsuario().subscribe(res => {
      this.tareas = res;
    });
  }
}
