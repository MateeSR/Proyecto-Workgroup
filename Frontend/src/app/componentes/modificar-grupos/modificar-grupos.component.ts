import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GrupoService } from 'src/app/Servicios/grupo.service';
import { Grupo } from 'src/app/Clases/grupo';
import { Router } from '@angular/router';


@Component({
  selector: 'app-modificar-grupos',
  templateUrl: './modificar-grupos.component.html',
  styleUrls: ['./modificar-grupos.component.css']
})
export class ModificarGruposComponent implements OnInit{
  id:any;
  grupos:any;
  grupo = new Grupo();

  constructor(private route:ActivatedRoute, private grupoService:GrupoService, private router: Router) {
  }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.listarUnGrupo();
}

listarUnGrupo() {
  this.grupoService.listarUnGrupo(this.id).subscribe(res => {
    this.grupos = res;
    this.grupo = this.grupos;
  })

}

  modificarGrupo() {
    this.grupoService.modificarGrupo(this.grupo).subscribe(() => {
      this.router.navigate(['grupos/' + this.grupo.id]);
    });
  }

}
