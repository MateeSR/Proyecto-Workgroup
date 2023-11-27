import { Component, OnInit } from '@angular/core';
import { TareaService } from 'src/app/Servicios/tarea.service';
import { Tarea } from 'src/app/Clases/tarea';
import { ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-tareasgrupos',
  templateUrl: './tareasgrupos.component.html',
  styleUrls: ['./tareasgrupos.component.css']
})
export class TareasgruposComponent implements OnInit {
  id:any;
  tareas:any;
  tarea = new Tarea();
  

  constructor(private tareaService:TareaService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.listarTareas();
  }

  listarTareas() {
    this.tareaService.listarTareasDeGrupo(this.id).subscribe(res => {
      this.tareas = res;
    });
  }
  

}
