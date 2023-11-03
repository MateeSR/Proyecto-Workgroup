import { Component, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import { TareaService } from 'src/app/Servicios/tarea.service';
import { Tarea } from 'src/app/Clases/tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  id:any;
  tareas:any;
  modalTarea: any;
  tarea = new Tarea();
  

  constructor(public tareaService:TareaService) { }

  ngOnInit(): void {
    this.listarTareas();
  }

  listarTareas() {
    this.tareaService.listarTareas().subscribe(res => {
      this.tareas = res;
    });
  }
  
  borrarTarea(id: number) {
    this.tareaService.borrarTarea(id).subscribe(() => {
      this.listarTareas();

    })
 }



    faTrash = faTrash;
    faPenToSquare = faPenToSquare;

}
