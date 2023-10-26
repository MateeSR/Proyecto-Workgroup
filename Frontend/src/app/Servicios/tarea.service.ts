import { Injectable } from '@angular/core';
import { Tarea } from '../Clases/tarea';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class TareaService {
  
  private url = 'http://127.0.0.1:8000/api/v1/tarea/';
  reqHeader = new HttpHeaders({
   'Content-Type': 'application/json'
   })

  constructor(private httpClient:HttpClient) { }

   listarTareas():Observable<Tarea> {
      return this.httpClient.get<Tarea>(this.url);
   }
   
   crearTarea(tarea:Tarea):Observable<Tarea> {
      return this.httpClient.post<Tarea>(this.url, tarea);
   }

   borrarTarea(id: number):Observable<any> {  
      return this.httpClient.delete<any>(this.url + id, { headers: this.reqHeader });
   }


   listarUnaTarea(id:number) {
      return this.httpClient.get(this.url+ id);

   }
   modificarTarea(tarea: Tarea): Observable<Tarea> {
      return this.httpClient.put<Tarea>(this.url + tarea.id + '/', tarea, { headers: this.reqHeader });
    }
}
