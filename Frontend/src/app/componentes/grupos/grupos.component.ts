import { Component, OnInit } from '@angular/core';
import { GrupoService } from 'src/app/Servicios/grupo.service';
import { faImage } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent implements OnInit {

  id:any;
  grupo:any;

  constructor (public grupoService:GrupoService) {}

  ngOnInit(): void {
    this.listarGrupos()
  }

  listarGrupos() {
    this.grupoService.listarGrupos().subscribe(res => {
      this.grupo = res;
    });
  }
  

  faImage = faImage;

}
