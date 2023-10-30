import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearTareasComponent } from './crear-tareas/crear-tareas.component';
import { ModificarTareasComponent } from './modificar-tareas/modificar-tareas.component';
import { TareasComponent } from './tareas/tareas.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
{
path: "tareas",
component: TareasComponent

},

{
  path: "crearTarea", 
  component: CrearTareasComponent
},
{
  path: "tareas/modificarTarea/:id", 
  component: ModificarTareasComponent
},

{
  path: "",
  component: LoginComponent
},

{
  path: "registro",
  component: RegistroComponent
}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
