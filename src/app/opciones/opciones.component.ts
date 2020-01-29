import { Component, OnInit } from '@angular/core';
import { NewService } from '../../app/servicios/new.service';
import {opciones} from 'src/app/model/opciones';
import { ObjectUnsubscribedError } from 'rxjs';

@Component({
  selector: 'app-opciones',
  templateUrl: './opciones.component.html',
  styleUrls: ['./opciones.component.css']
})
export class OpcionesComponent implements OnInit {

      public objetos:opciones[];

   constructor(private NewService:NewService) {

  }

  ngOnInit() {
    this.obtenerLista();
  }

  obtenerLista(){ 
    
    this.NewService.obtenerLista().subscribe(
      (res:opciones[]) => {
        this.objetos=res
    },
    );

}
}