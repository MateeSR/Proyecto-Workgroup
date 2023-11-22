import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearTareasComponent } from './componentes/crear-tareas/crear-tareas.component';
import { ModificarTareasComponent } from './componentes/modificar-tareas/modificar-tareas.component';
import { TareasComponent } from './componentes/tareas/tareas.component';
import { LoginComponent } from './componentes//login/login.component';
import { RegistroComponent } from './componentes//registro/registro.component';
import { HomeComponent } from './componentes/home/home.component';
import { autenticacionGuard } from './guards/autenticacion.guard';
import { ListarUnaTareaComponent } from './componentes/listar-una-tarea/listar-una-tarea.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { ModificarperfilComponent } from './componentes/modificarperfil/modificarperfil.component';
import { GruposComponent } from './componentes/grupos/grupos.component';
import { CrearGrupoComponent } from './componentes/crear-grupo/crear-grupo.component';
import { ListarUnGrupoComponent } from './componentes/listar-un-grupo/listar-un-grupo.component';



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
  path: "grupos",
  component: GruposComponent
},

{
  path: "crearGrupo",
  component: CrearGrupoComponent

},
{
  path: "grupos/:id",
  component: ListarUnGrupoComponent

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
},

{
  path: "tareas/:id",
  component: ListarUnaTareaComponent
},
{
  path: "perfil",
  component: PerfilComponent

},
{
  path: "modificarPerfil",
  component: ModificarperfilComponent

}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
