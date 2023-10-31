import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './Clases/token-interceptor';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TareasComponent } from './tareas/tareas.component';
import { CrearTareasComponent } from './crear-tareas/crear-tareas.component';
import { ModificarTareasComponent } from './modificar-tareas/modificar-tareas.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { ModalBorrarTareaComponent } from './modal-borrar-tarea/modal-borrar-tarea.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TareasComponent,
    CrearTareasComponent,
    ModificarTareasComponent,
    ModalBorrarTareaComponent,
    LoginComponent,
    RegistroComponent,
    HeaderComponent,
    HomeComponent
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
