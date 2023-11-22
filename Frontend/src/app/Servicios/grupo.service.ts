import { Injectable } from '@angular/core';
import { Grupo } from '../Clases/grupo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GrupoService {
  grupo:any;
  private url = 'http://localhost:8000/api/v1/grupo/';
  private urlUserGrupo = 'http://localhost:8000/api/v1/integra/';


  constructor(private httpClient:HttpClient) { }

  listarGrupos():Observable<Grupo> {
   
    return this.httpClient.get<Grupo>(this.url);
  }

  crearGrupo(grupo:Grupo):Observable<Grupo> {
    return this.httpClient.post<Grupo>(this.url, grupo);
 }

 borrarGrupo(id: number):Observable<any> {  
  const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  return this.httpClient.delete<any>(this.url + id, httpOptions);
  
}
  listarUnGrupo(id:number) {
  return this.httpClient.get(this.url + id);

  }
  
  modificarGrupo(grupo:any){
    const httpOptions = {
       headers: new HttpHeaders({ 'Content-Type': 'application/json' })
     };
  
    return this.httpClient.put(this.url + grupo.id + '/', grupo, httpOptions);
  
    }


  listarIntegrantes(id: number):Observable<any> {
      const httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };

      return this.httpClient.get(this.urlUserGrupo + id, httpOptions);


    }

    funcionIntegrarGrupo(id: number, id_usuario: number): Observable<any> {
      const httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };
    
      const body = { id_usuario: id_usuario };
      console.log('Cuerpo de la solicitud:', body);

    
      return this.httpClient.post(this.urlUserGrupo + id, body, httpOptions);
    }

}
