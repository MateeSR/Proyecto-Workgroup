import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TareaService } from 'src/app/Servicios/tarea.service';
import { Tarea } from 'src/app/Clases/tarea';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-una-tarea',
  templateUrl: './listar-una-tarea.component.html',
  styleUrls: ['./listar-una-tarea.component.css']
})
export class ListarUnaTareaComponent implements OnInit {
  id:any;
  tareas:any;
  tarea = new Tarea();

  constructor(private route:ActivatedRoute, private tareaService: TareaService, private router: Router) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.listarUnaTarea();
  }

  listarUnaTarea() {
    this.tareaService.listarUnaTarea(this.id).subscribe(res => {
      this.tareas = res;
      this.tarea = this.tareas;
      if (this.tarea && this.tarea.fecha_limite) {
        this.tarea.fecha_limite = this.convertirTimestampALineaDeTexto(this.tarea.fecha_limite);
      }
  })

  }
  
  convertirTimestampALineaDeTexto(timestamp: number): string {
    const meses = [
        "enero",
        "febrero",
        "marzo",
        "abril",
        "mayo",
        "junio",
        "julio",
        "agosto",
        "septiembre",
        "octubre",
        "noviembre",
        "diciembre"
    ];

    const fecha = new Date(timestamp);
    const dia = fecha.getDate();
    const mes = meses[fecha.getMonth()];
    const año = fecha.getFullYear();
    const horas = fecha.getHours();
    const minutos = fecha.getMinutes();
    const segundos = fecha.getSeconds();

    const horasFormateadas = horas < 10 ? `0${horas}` : `${horas}`;
    const minutosFormateados = minutos < 10 ? `0${minutos}` : `${minutos}`;
    const segundosFormateados = segundos < 10 ? `0${segundos}` : `${segundos}`;

    const lineaDeTexto = `${dia} de ${mes} de ${año} ${horasFormateadas}:${minutosFormateados}:${segundosFormateados}`;
    return lineaDeTexto;
}








}
