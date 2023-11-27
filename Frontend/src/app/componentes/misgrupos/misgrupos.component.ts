import { Component } from '@angular/core';
import { GrupoService } from 'src/app/Servicios/grupo.service';
import { faImage } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-misgrupos',
  templateUrl: './misgrupos.component.html',
  styleUrls: ['./misgrupos.component.css']
})
export class MisgruposComponent {

  id:any;
  grupo:any;

  constructor (public grupoService:GrupoService) {}

  ngOnInit(): void {
    this.listarMisGrupos()
  }

  listarMisGrupos() {
    this.grupoService.listarMisGrupos().subscribe(res => {
      this.grupo = res;
    });
  }
  

  faImage = faImage;
}
