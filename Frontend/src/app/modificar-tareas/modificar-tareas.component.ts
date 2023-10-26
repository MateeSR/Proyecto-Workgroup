import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TareaService } from 'src/app/Servicios/tarea.service';
import { Tarea } from 'src/app/Clases/tarea';
import { Router } from '@angular/router';


@Component({
  selector: 'app-modificar-tareas',
  templateUrl: './modificar-tareas.component.html',
  styleUrls: ['./modificar-tareas.component.css']
})
export class ModificarTareasComponent implements OnInit {
  id:any;
  tareas:any;
  tarea = new Tarea();
  constructor(private route:ActivatedRoute, private tareaService: TareaService, private router: Router) {
  }



  ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.listarUnaTarea();
  }

  listarUnaTarea() {
    this.tareaService.listarUnaTarea(this.id).subscribe(res => {
      this.tareas = res;
      this.tarea = this.tareas;
    })

    
  }
  modificarTarea() {
    this.tareaService.modificarTarea(this.tarea).subscribe(() => {
      this.router.navigate(['']);
    });
  }

}
