import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearTareasComponent } from './crear-tareas/crear-tareas.component';
import { ModificarTareasComponent } from './modificar-tareas/modificar-tareas.component';
import { TareasComponent } from './tareas/tareas.component';
import { ModalBorrarTareaComponent } from './modal-borrar-tarea/modal-borrar-tarea.component';

const routes: Routes = [
{
path: "",
component: TareasComponent

},

{
  path: "crearTarea", 
  component: CrearTareasComponent
},
{
  path: "modificarTarea/:id", 
  component: ModificarTareasComponent
},
{ 
  path:"modalTarea",
  component:ModalBorrarTareaComponent

}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
