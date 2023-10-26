import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TareasComponent } from './tareas/tareas.component';
import { CrearTareasComponent } from './crear-tareas/crear-tareas.component';
import { ModificarTareasComponent } from './modificar-tareas/modificar-tareas.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ModalBorrarTareaComponent } from './modal-borrar-tarea/modal-borrar-tarea.component';

@NgModule({
  declarations: [
    AppComponent,
    TareasComponent,
    CrearTareasComponent,
    ModificarTareasComponent,
    ModalBorrarTareaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],

})
export class AppModule { }
