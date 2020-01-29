import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class NewService {

  public urlbase ='';

  constructor(private http:HttpClient) { 
    this.urlbase="../assets/dataopciones.json";
  }

  obtenerLista(){
    const url=`${this.urlbase}`;
    return this.http.get(url);
  }
}
