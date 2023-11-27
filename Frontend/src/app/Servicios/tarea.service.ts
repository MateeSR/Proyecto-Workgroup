import { Injectable } from '@angular/core';
import { Tarea } from '../Clases/tarea';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class TareaService {
  
  private url = 'http://localhost:8000/api/v1/tarea/';
  private tareasGrupoURL = 'http://localhost:8000/api/v1/tareasgrupo/';
  private tareasUsuarioURL = 'http://localhost:8000/api/v1/tareasuser/';
  private correoUrl = 'http://localhost:8000/api/v1/enviar';

  constructor(private httpClient:HttpClient) { }

   listarTareas():Observable<Tarea> {
      return this.httpClient.get<Tarea>(this.url);
   }
   listarTareasDeGrupo(id: number):Observable<Tarea>  {
      return this.httpClient.get<Tarea>(this.tareasGrupoURL + id);
   }
   listarTareasDeUsuario():Observable<Tarea> {

     return this.httpClient.get<Tarea>(this.tareasUsuarioURL);

   }
   
   crearTarea(tarea:Tarea):Observable<Tarea> {
      return this.httpClient.post<Tarea>(this.url, tarea);
   }

   borrarTarea(id: number):Observable<any> {  
      const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
      return this.httpClient.delete<any>(this.url + id, httpOptions);
   }

   listarUnaTarea(id:number) {
      return this.httpClient.get(this.url+ id);

   }
   modificarTarea(tarea: Tarea): Observable<Tarea> {
      const httpOptions = {
         headers: new HttpHeaders({ 'Content-Type': 'application/json' })
       };

      return this.httpClient.put<Tarea>(this.url + tarea.id + '/', tarea, httpOptions);
    }

    enviarACorreo(): Observable<any> {
      return this.httpClient.post(this.correoUrl, {});
    }


    
}
