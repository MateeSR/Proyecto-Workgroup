
import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import { Router } from '@angular/router';
import { TareaService } from 'src/app/Servicios/tarea.service';
import { Tarea } from 'src/app/Clases/tarea';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  faCoffee = faCoffee;
  title = 'Frontend';
}

