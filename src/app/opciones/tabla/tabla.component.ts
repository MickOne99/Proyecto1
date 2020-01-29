import { Component, OnInit, Input } from '@angular/core';
import { opciones } from 'src/app/model/opciones';
@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  public objeto:string;
 
  @Input() public items:opciones[];
    //public opciones: Array<{id: number, idStr: string, descripcion: string}> = [...]; 

  constructor() { }

  ngOnInit() {
    debugger
    this.onSelectObject()
  }

  onSelectObject(){
    if( this.items ) {
      alert('sdasdasda')
  }
  }
  
}
