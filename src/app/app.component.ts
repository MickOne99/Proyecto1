import { Component } from '@angular/core';
import { NewService } from '../../src/app/servicios/new.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( public dataJson:NewService){  }
}
