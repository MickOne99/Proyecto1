import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { NewService } from '../../app/servicios/new.service';
import { HttpClient, HttpClientModule } from '@angular/common/http'



@NgModule({
  declarations: [

  MainComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    NewService
  ]

})
export class OpcionesModule { }
