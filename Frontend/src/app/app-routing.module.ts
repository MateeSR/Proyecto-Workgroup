import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearTareasComponent } from './crear-tareas/crear-tareas.component';
import { ModificarTareasComponent } from './modificar-tareas/modificar-tareas.component';
import { TareasComponent } from './tareas/tareas.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { HomeComponent } from './home/home.component';
import { autenticacionGuard } from './guards/autenticacion.guard';



const routes: Routes = [
{
path: "tareas",
component: TareasComponent, canActivate: [autenticacionGuard]

},

{
  path: "crearTarea", 
  component: CrearTareasComponent, canActivate: [autenticacionGuard]
},
{
  path: "tareas/modificarTarea/:id", 
  component: ModificarTareasComponent
},

{
  path: "",
  component: HomeComponent, canActivate: [autenticacionGuard]
},

{
  path: "login",
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
