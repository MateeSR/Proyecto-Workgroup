import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './Clases/token-interceptor';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TareasComponent } from './componentes/tareas/tareas.component';
import { CrearTareasComponent } from './componentes/crear-tareas/crear-tareas.component';
import { ModificarTareasComponent } from './componentes/modificar-tareas/modificar-tareas.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { HeaderComponent } from './componentes//header/header.component';
import { HomeComponent } from './componentes/home/home.component';
import { ListarUnaTareaComponent } from './componentes/listar-una-tarea/listar-una-tarea.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { ModificarperfilComponent } from './componentes/modificarperfil/modificarperfil.component';

@NgModule({
  declarations: [
    AppComponent,
    TareasComponent,
    CrearTareasComponent,
    ModificarTareasComponent,
    LoginComponent,
    RegistroComponent,
    HeaderComponent,
    HomeComponent,
    ListarUnaTareaComponent,
    PerfilComponent,
    ModificarperfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
     useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],

})
export class AppModule { }
